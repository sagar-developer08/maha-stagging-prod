import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  userData: {},
  token: "",
  registerInfo: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LoginUser: (state, action) => {
      state.isAuth = true;
      state.userData = action.payload.userData;
      state.token = action.payload.token;
    },
    LogOutUser: (state, action) => {
      state.isAuth = false;
      state.userData = {};
      state.token = "";
    },
    registerInfo: (state, action) => {
      state.registerInfo = action.payload;
    },
    registerInfoRemove: (state) => {
      state.registerInfo = {};
    },
  },
});

export const { LoginUser, LogOutUser, registerInfo, registerInfoRemove } =
  authSlice.actions;

export default authSlice.reducer;
