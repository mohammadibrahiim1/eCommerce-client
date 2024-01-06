import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../features/api/baseApi";
import cartSlice from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
