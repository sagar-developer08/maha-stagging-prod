import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    updateItem: (state, action) => {
      state.products = action.payload;
    },
    clearCart: (state, action) => {
      state.products = [];
    },
  },
});

export const { addtoCart, updateItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
