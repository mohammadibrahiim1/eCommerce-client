/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// const fetchFromLocalStorage = () => {
//   let cart = localStorage.getItem("cart");
//   if (cart) {
//     return JSON.parse(localStorage.getItem("cart"));
//   } else {
//     return [];
//   }
// };

// const storedInLocalStorage = (data) => {
//   localStorage.setItem("cart", JSON.stringify(data));
// };

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === payload._id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Updated ${payload.model}  cartQuantity`, {
          position: "top-right",
        });
      } else {
        const tempItem = { ...payload, cartQuantity: 1 };
        state.cartItems.push(tempItem);
        toast.success(`${payload.model} added to cart`, {
          position: "top-right",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, { payload }) => {
      const removeItem = state.cartItems.filter(
        (item) => item._id !== payload._id
      );
      state.cartItems = removeItem;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      toast.error(`${payload.model} removed from cart`, {
        position: "top-right",
      });
    },

    // incrementQuantity: (state, { payload }) => {
    //   const item = state.cartItems.find((item) => item._id === payload._id);
    //   item.quantity ++;
    // },

    incrementQuantity: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem._id === payload._id
      );
      if (state.cartItems[itemIndex]) {
        state.cartItems[itemIndex].cartQuantity += 1;

        toast.success(`Increased ${payload.model} cartQuantity`, {
          position: "top-right",
        });
      }

      // else if (state.cartItems[itemIndex].cartQuantity === 1) {
      //   const removeItem = state.cartItems.filter(
      //     (item) => item._id !== payload._id
      //   );
      //   state.cartItems = removeItem;

      //   toast.error(`${payload.model} removed from cart`, {
      //     position: "top-right",
      //   });
      // }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // const item = state.cart.find((item) => item._id === payload._id);
      // if (item.cartQuantity === 1) {
      //   item.cartQuantity = 1;
      // } else {
      //   item.cartQuantity--;
      // }
    },

    decrementQuantity: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem._id === payload._id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.error(`Decreased ${payload.model} cartQuantity`, {
          position: "top-right",
        });
      }

      // else if (state.cartItems[itemIndex].cartQuantity === 1) {
      //   const removeItem = state.cartItems.filter(
      //     (item) => item._id !== payload._id
      //   );
      //   state.cartItems = removeItem;

      //   toast.error(`${payload.model} removed from cart`, {
      //     position: "top-right",
      //   });
      // }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // const item = state.cart.find((item) => item._id === payload._id);
      // if (item.cartQuantity === 1) {
      //   item.cartQuantity = 1;
      // } else {
      //   item.cartQuantity--;
      // }
    },

    // eslint-disable-next-line no-unused-vars
    clearCart: (state, { payload }) => {
      state.cartItems = [];
      toast.error(`Cart Cleared`, {
        position: "top-right",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getTotal: (state) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.totalQuantity = quantity;
      state.totalAmount = total;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  getTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
