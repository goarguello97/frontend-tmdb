import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";
import { Users } from "../../interfaces/users.interface";

export const getUsers = createAsyncThunk("GET_USERS", async (_, thunkApi) => {
  try {
    const users = await axiosInstance.get("/users/");
    return users.data;
  } catch (error: any) {
    const { message } = error;
    return thunkApi.rejectWithValue(message);
  }
});

const initialState = {
  error: null,
  operationOK: false,
  users: null,
  loading: false,
} as Users;

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.operationOK = true;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default usersSlice.reducer;
