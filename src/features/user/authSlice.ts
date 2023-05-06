import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";
import {
  Auth,
  ErrorRegister,
  Login,
  Register,
} from "../../interfaces/auth.interface";

export const register = createAsyncThunk(
  "REGISTER",
  async (data: Register, thunkApi) => {
    try {
      const userRegister = await axiosInstance.post(`/users/`, data);
      console.log(userRegister)
      return {
        status: userRegister.status,
        message: userRegister.data.message,
      };
    } catch (error: any) {
      const { errors } = error;
      return thunkApi.rejectWithValue(errors[0].msg);
    }
  }
);

const initialState = {
  error: {},
  operationOK: false,
  userLogged: {},
  loading: false,
  isUserLogged: false,
} as Auth;

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.operationOK = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
