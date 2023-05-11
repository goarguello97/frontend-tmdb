import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

export const getSearch = createAsyncThunk(
  "GET_SEARCH",
  async (data, thunkApi) => {
    try {
      const results = await axiosInstance.post("/movies/search", data);
      return results.data;
    } catch (error: any) {
      const { message } = error;
      return thunkApi.rejectWithValue(message);
    }
  }
);

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

export const resetSearch = createAsyncThunk(
  "RESET_SEARCH",
  async (_, thunkApi) => {
    try {
      return null;
      // eslint-disable-next-line no-unreachable
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
  movies: [],
  tvSeries: [],
  horror: [],
  comedy: [],
  drama: [],
  search: null,
} as Movies;

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
    builder.addCase(getSearch.pending, (state, action) => {
      state.loadingSearch = true;
    });
    builder.addCase(getSearch.fulfilled, (state, action) => {
      state.loadingSearch = false;
      state.search = action.payload;
    });
    builder.addCase(getSearch.rejected, (state, action) => {
      state.loadingSearch = false;
      state.error = action.payload;
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
    builder.addCase(resetSearch.pending, (state, action) => {
      state.loadingSearch = true;
    });
    builder.addCase(resetSearch.fulfilled, (state, action) => {
      state.loadingSearch = false;
      state.search = action.payload;
    });
    builder.addCase(resetSearch.rejected, (state, action) => {
      state.loadingSearch = false;
      state.error = action.payload;
    });
  },
});

export default moviesSlice.reducer;
