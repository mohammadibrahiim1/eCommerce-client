import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../features/api/baseApi";
import cartSlice from "../features/cart/cartSlice";
import wishListSlice from "../features/wishList/wishListSlice";
import authSlice from "../features/api/auth/authSlice";
// import paymentSlice from "../features/api/payment/paymentSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartSlice,
    wishList: wishListSlice,
    auth: authSlice,
    // payment: paymentSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
