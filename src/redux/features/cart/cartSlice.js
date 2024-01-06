import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      // Check if the product is already in the cart
      const existingItem = state.items.find((item) => item._id === payload._id);
      console.log(payload);
      if (existingItem) {
        // If the product is already in the cart, you can update the quantity or take another action
        existingItem.quantity += 1;
      } else {
        // If the product is not in the cart, add it
        state.items.push({ ...payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const removedItem = action.payload;
      state.items = state.items.filter((item) => item._id !== removedItem._id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
