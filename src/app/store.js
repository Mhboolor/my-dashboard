import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import productsReducer from "../features/products/productsSlice";
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    products : productsReducer,
    [apiSlice.reducerPath] : apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});