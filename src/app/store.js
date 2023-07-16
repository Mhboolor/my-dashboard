import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import productsReducer from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    products : productsReducer,
    [apiSlice.reducerPath] : apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});