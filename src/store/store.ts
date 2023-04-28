import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../features/movies/moviesSlice";

const store = configureStore({
    reducer:{
        movies: moviesSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;