import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./slices/favouriteSlice";

export const store = configureStore({
  reducer: {
    Favourites: favouriteReducer,
  },
});
