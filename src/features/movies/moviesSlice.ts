import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";
import { Movies } from "../../interfaces/movies.interface";

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

export const getPopular = createAsyncThunk("GET_POP", async (_, thunkApi) => {
  try {
    const results = await axiosInstance.get("/movies/");
    return results.data;
  } catch (error: any) {
    const { message } = error;
    return thunkApi.rejectWithValue(message);
  }
});

export const getHorror = createAsyncThunk("GET_HORROR", async (_, thunkApi) => {
  try {
    const results = await axiosInstance.get("/movies/horror");
    return results.data;
  } catch (error: any) {
    const { message } = error;
    return thunkApi.rejectWithValue(message);
  }
});
export const getComedy = createAsyncThunk("GET_COM", async (_, thunkApi) => {
  try {
    const results = await axiosInstance.get("/movies/comedy");
    return results.data;
  } catch (error: any) {
    const { message } = error;
    return thunkApi.rejectWithValue(message);
  }
});
export const getDrama = createAsyncThunk("GET_DRAMA", async (_, thunkApi) => {
  try {
    const results = await axiosInstance.get("/movies/drama");
    return results.data;
  } catch (error: any) {
    const { message } = error;
    return thunkApi.rejectWithValue(message);
  }
});

const initialState = {
  loadingMovies: false,
  loadingSearch: false,
  searchOk: false,
  error: null,
  movies: [],
  tvSeries: [],
  horror: [],
  comedy: [],
  drama: [],
  search: {},
} as Movies;

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getOne.pending, (state, action) => {
    //   state.loadingMovies = true;
    // });
    // builder.addCase(getOne.fulfilled, (state, action) => {
    //   state.loadingMovies = false;
    //   state.movie = action.payload;
    // });
    // builder.addCase(getOne.rejected, (state, action) => {
    //   state.error = true;
    // });
    builder.addCase(getPopular.pending, (state, action) => {
      state.loadingMovies = true;
    });
    builder.addCase(getPopular.fulfilled, (state, action) => {
      state.loadingMovies = false;
      state.movies = action.payload.movies;
      state.tvSeries = action.payload.tvSeries;
    });
    builder.addCase(getPopular.rejected, (state, action) => {
      state.error = true;
    });
    builder.addCase(getHorror.pending, (state, action) => {
      state.loadingMovies = true;
    });
    builder.addCase(getHorror.fulfilled, (state, action) => {
      state.loadingMovies = false;
      state.horror = action.payload;
    });
    builder.addCase(getHorror.rejected, (state, action) => {
      state.error = true;
    });
    builder.addCase(getComedy.pending, (state, action) => {
      state.loadingMovies = true;
    });
    builder.addCase(getComedy.fulfilled, (state, action) => {
      state.loadingMovies = false;
      state.comedy = action.payload;
    });
    builder.addCase(getComedy.rejected, (state, action) => {
      state.error = true;
    });
    builder.addCase(getDrama.pending, (state, action) => {
      state.loadingMovies = true;
    });
    builder.addCase(getDrama.fulfilled, (state, action) => {
      state.loadingMovies = false;
      state.drama = action.payload;
    });
    builder.addCase(getDrama.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default moviesSlice.reducer;
