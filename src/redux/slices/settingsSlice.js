import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
  metricUnits: true,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeMode: (state) => {
      return (state = {
        darkMode: !state.darkMode,
        metricUnits: state.metricUnits,
      });
    },
    changeTempUnits: (state) => {
      return (state = {
        darkMode: state.darkMode,
        metricUnits: !state.metricUnits,
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeMode, changeTempUnits } = settingsSlice.actions;

export default settingsSlice.reducer;
