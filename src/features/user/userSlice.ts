import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";
import { User } from "../../interfaces/user.interface";

export const myUser = createAsyncThunk(
  "MY_USER",
  async (data: string, thunkApi) => {
    try {
      const user = await axiosInstance.get(`/users/user/${data}`);
      return user.data;
    } catch (error: any) {
      const { response } = error;
      const { data } = response;
      const { message } = data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const editUser = createAsyncThunk(
  "EDIT_USER",
  async (data, thunkApi) => {
    try {
      const userEdited = await axiosInstance.put("/users/", data);
      return userEdited.data;
    } catch (error: any) {
      const { message } = error;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const addFav = createAsyncThunk(
  "ADD_FAV",
  async (data: {}, thunkApi) => {
    try {
      const movieAdded = await axiosInstance.post("/movies/add", data);
      return movieAdded.data;
    } catch (error: any) {
      const { message } = error;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const remFav = createAsyncThunk(
  "REM_FAV",
  async (data: {}, thunkApi) => {
    try {
      const movieRemoved = await axiosInstance.post("/movies/remove", data);
      return movieRemoved.data;
    } catch (error: any) {
      const { message } = error;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const resetUser = createAsyncThunk("RESET_USER", async (_, thunkApi) => {
  try {
    return null;
    // eslint-disable-next-line no-unreachable
  } catch (error: any) {
    const { message } = error;
    return thunkApi.rejectWithValue(message);
  }
});

const initialState = {
  error: null,
  operationOK: false,
  user: null,
  loading: false,
} as User;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(myUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(myUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.operationOK = true;
    });
    builder.addCase(myUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(editUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.userUpdated;
    });
    builder.addCase(editUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(addFav.pending, (state, action) => {
      state.loading = true;
      state.operationOK = false;
    });
    builder.addCase(addFav.fulfilled, (state, action) => {
      state.loading = false;
      state.operationOK = true;
    });
    builder.addCase(addFav.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(remFav.pending, (state, action) => {
      state.loading = true;
      state.operationOK = false;
    });
    builder.addCase(remFav.fulfilled, (state, action) => {
      state.loading = false;
      state.operationOK = true;
    });
    builder.addCase(remFav.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(resetUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(resetUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
