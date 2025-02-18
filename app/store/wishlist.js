import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addtowishlist: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    clearWishlist: (state, action) => {
      state.products = [];
    },
  },
});

export const { addtowishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
