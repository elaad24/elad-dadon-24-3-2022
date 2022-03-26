import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addTofavourites: (state, action) => {
      state = [...state, action.payload];
    },

    removeFromFavourites: (state, action) => {
      let temp = [];
      for (let item of state) {
        console.log("item", JSON.stringify(item));
        if (item.Id != action.payload) {
          temp.push(item);
        }
      }
      state = [...temp];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTofavourites, removeFromFavourites } = favouriteSlice.actions;

export default favouriteSlice.reducer;
