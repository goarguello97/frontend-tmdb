import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Movies } from "../../interfaces/movies.interface";

const initialState = {
  loadingMovies: false,
  loadingSearch: false,
  searchOk: false,
  error: null,
  movies: {},
  tvSeries: {},
  horror: {},
  comedy: {},
  drama: {},
  action: {},
  search: {},
} as Movies;

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default moviesSlice.reducer;
