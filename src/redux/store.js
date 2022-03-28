import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./slices/favouriteSlice";
import settimgsReducer from "./slices/settingsSlice";

export const store = configureStore({
  reducer: {
    Favourites: favouriteReducer,
    Settings: settimgsReducer,
  },
});
