import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addTofavourites: (state, action) => {
      console.log("add to favorit hapend ");
      console.log(action);
      return (state = [...state, action.payload]);
    },

    removeFromFavourites: (state, action) => {
      let temp = [];
      console.log("remove from favourits - state,", state);
      for (let item of state) {
        console.log("item", JSON.stringify(item));
        if (item.id != action.payload.id) {
          temp.push(item);
        }
      }
      return (state = [...temp]);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTofavourites, removeFromFavourites } = favouriteSlice.actions;

export default favouriteSlice.reducer;
