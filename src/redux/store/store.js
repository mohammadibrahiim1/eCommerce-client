import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../features/api/baseApi";
import cartSlice from "../features/cart/cartSlice";
import wishListSlice from "../features/wishList/wishListSlice";
import authSlice from "../features/api/auth/authSlice";
import productSlice from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartSlice,
    wishList: wishListSlice,
    auth: authSlice,
    products: productSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["auth.user"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        // Ignore these paths in the state
        ignoredPaths: ["items.dates"],
      },
    }).concat(baseApi.middleware),
});
