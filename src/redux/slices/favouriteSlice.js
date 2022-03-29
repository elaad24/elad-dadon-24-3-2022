import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedIds: [],
  likedItems: [],
};

export const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addTofavourites: (state, action) => {
      return (state = {
        likedIds: [...state.likedIds, action.payload.id],
        likedItems: [...state.likedItems, action.payload],
      });
    },

    removeFromFavourites: (state, action) => {
      let temp = [];
      let temp2 = [];
      for (let item of state.likedItems) {
        if (item.id !== action.payload.id) {
          temp.push(item);
        }
      }
      temp2 = state.likedIds.filter((ID) => ID !== action.payload.id);

      return (state = {
        likedIds: [...temp2],
        likedItems: [...temp],
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTofavourites, removeFromFavourites } = favouriteSlice.actions;

export default favouriteSlice.reducer;
