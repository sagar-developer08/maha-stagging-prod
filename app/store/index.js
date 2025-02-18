import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import storage from "./storage"; // Import the updated storage file
// # Reducers
import cartReducer from "../store/cart";
import wishlistReducer from "../store/wishlist";
import bookingReducer from "../store/booking";
import authReducer from "../store/auth";
import globalLoaderReducer from "../store/globalLoader";

//
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["booking"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  booking: bookingReducer,
  auth: authReducer,
  loader: globalLoaderReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }),
});

export const persistor = persistStore(store);
