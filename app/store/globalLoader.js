import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGlobalLoading: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    GlobalLoader: (state, action) => {
      state.isGlobalLoading = action.payload;
    },
  },
});

export const { GlobalLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
