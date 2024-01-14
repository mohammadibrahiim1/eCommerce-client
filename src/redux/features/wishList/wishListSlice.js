import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const loadWishListFromLocalStorage = () => {
  const storedWishList = localStorage.getItem("wishList");

  return storedWishList ? JSON.parse(storedWishList) : [];
};

const saveWishListToLocalStorage = (wishList) => {
  localStorage.setItem("wishList", JSON.stringify(wishList));
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState: loadWishListFromLocalStorage(),
  reducers: {
    addToWishList: (state, action) => {
      console.log(action.payload);
      state.push(action.payload);
      toast.success(`${action.payload.model} added to wishlist`, {
        position: "top-right",
      });

      saveWishListToLocalStorage(state);
    },

    removeFromWishList: (state, { payload }) => {
      console.log(state);
      const index = state.findIndex((item) => item && item._id === payload._id);
      if (index !== -1) {
        state.splice(index, 1);
        saveWishListToLocalStorage(state);
      }

      toast.error(`${payload.model} removed from wishList`, {
        position: "top-right",
      });
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
