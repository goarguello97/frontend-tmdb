import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../features/movies/movieSlice";
import moviesSlice from "../features/movies/moviesSlice";
import authSlice from "../features/user/authSlice";
import userSlice from "../features/user/userSlice";
import usersSlice from "../features/user/usersSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    movie: movieSlice,
    movies: moviesSlice,
    user: userSlice,
    users: usersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
