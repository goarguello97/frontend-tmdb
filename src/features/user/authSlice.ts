import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";
import { Auth, Login, Register } from "../../interfaces/auth.interface";

export const register = createAsyncThunk(
  "REGISTER",
  async (data: Register, thunkApi) => {
    try {
      const userRegister = await axiosInstance.post(`/users/`, data);
      return {
        status: userRegister.status,
        message: userRegister.data.message,
      };
    } catch (error: any) {
      const { response } = error;
      const { data } = response;
      const { errors } = data;
      return thunkApi.rejectWithValue(errors[0].msg);
    }
  }
);

export const login = createAsyncThunk(
  "LOGIN",
  async (data: Login, thunkApi) => {
    try {
      const userLogin = await axiosInstance.post(`/users/login`, data);
      return {
        status: userLogin.status,
        user: userLogin.data,
      };
    } catch (error: any) {
      const { response } = error;
      const { data } = response;
      const { message } = data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const logOut = createAsyncThunk("LOG_OUT", async (_, thunkApi) => {
  try {
    const userLogout = await axiosInstance.post("/users/logout", _);
    return userLogout.data;
  } catch (error: any) {
    const { message } = error;
    return thunkApi.rejectWithValue(message);
  }
});

export const persistLogin = createAsyncThunk("PERSIST", async (_, thunkApi) => {
  try {
    const persistUser: {
      data: {
        user: { email: string; name: string; lastname: string; id: string };
        iat: number;
        exp: number;
      };
    } = await axiosInstance.get("/users/secret");
    return {
      payload: persistUser.data.user,
      iat: persistUser.data.iat,
      exp: persistUser.data.exp,
      token: null,
    };
  } catch (error: any) {
    return thunkApi.rejectWithValue("No hay una sesión existente.");
  }
});

export const resetError = createAsyncThunk(
  "RESET_ERROR",
  async (_, thunkApi) => {
    try {
      return null;
      // eslint-disable-next-line no-unreachable
    } catch (error: any) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const initialState = {
  error: null,
  errorPersist: null,
  operationOK: false,
  userRegister: null,
  userLogged: null,
  loading: false,
  isUserLogged: false,
} as Auth;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.userRegister = action.payload.message;
      state.operationOK = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.userLogged = action.payload.user;
      state.operationOK = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(logOut.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.userLogged = null;
      state.loading = false;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(persistLogin.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(persistLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.userLogged = action.payload;
    });
    builder.addCase(persistLogin.rejected, (state, action) => {
      state.loading = false;
      state.errorPersist = action.payload;
    });
    builder.addCase(resetError.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetError.fulfilled, (state, action) => {
      state.loading = false;
      state.userRegister = null;
      state.error = null;
      state.errorPersist = null;
      state.operationOK = false;
    });
    builder.addCase(resetError.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
