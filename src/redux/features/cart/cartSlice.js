import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const storedInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  cartItems: fetchFromLocalStorage(),
  cartTotalQuantity: 0,
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
        state.cartItems[itemIndex].quantity += 1;
      } else {
        const tempItem = { ...payload, quantity: 1 };
        state.cartItems.push(tempItem);
      }
      // console.log(itemsInCart);

      // if (itemsInCart) {
      //   itemsInCart.quantity += 1;
      //   storedInLocalStorage(state.cartItems);
      // } else {
      //   state.cartItems.push({ ...payload, quantity: 1 });
      //   storedInLocalStorage(state.cartItems);
      // }
    },

    // incrementQuantity: (state, { payload }) => {
    //   const item = state.cartItems.find((item) => item._id === payload._id);
    //   item.quantity ++;
    // },

    // decrementQuantity: (state, { payload }) => {
    //   const item = state.cart.find((item) => item._id === payload._id);
    //   if (item.quantity === 1) {
    //     item.quantity = 1;
    //   } else {
    //     item.quantity--;
    //   }
    // },

    removeFromCart: (state, { payload }) => {
      const removeItem = state.cartItems.filter(
        (item) => item._id !== payload._id
      );
      state.cartItems = removeItem;
      storedInLocalStorage(state.cartItems);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
