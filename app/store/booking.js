import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBookingModal: false,
  packageId: "",
  package: {},
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBooking: (state, action) => {
      state.isBookingModal = action.payload;
      // state.isBookingModal = false;
    },
    setPackageId: (state, action) => {
      state.packageId = action.payload;
    },
    setPackage: (state, action) => {
      state.package = action.payload;
    },
  },
});

export const { setBooking, setPackageId, setPackage } = bookingSlice.actions;

export default bookingSlice.reducer;
