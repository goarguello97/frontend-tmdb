import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";
import { OneMovie } from "../../interfaces/movies.interface";

export const getOne = createAsyncThunk(
  "GET_ONE",
  async (data: string, thunkApi) => {
    try {
      const result = await axiosInstance.get(`/movies/movie/${data}`);
      return result.data;
    } catch (error: any) {
      const { message } = error;
      return thunkApi.rejectWithValue(message);
    }
  }
);

const initialState = {
  loadingMovies: false,
  loadingSearch: false,
  searchOk: false,
  error: null,
  movie: {},
} as OneMovie;

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOne.pending, (state, action) => {
      state.loadingMovies = true;
    });
    builder.addCase(getOne.fulfilled, (state, action) => {
      state.loadingMovies = false;
      state.movie = action.payload;
    });
    builder.addCase(getOne.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default movieSlice.reducer;
