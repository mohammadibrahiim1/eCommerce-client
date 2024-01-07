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
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const itemsInCart = state.cartItems.find(
        (item) => item._id === payload._id
      );

      if (itemsInCart) {
        const tempCart = state.cartItems.map((item) => {
          if (item._id === payload._id) {
            let tempQty = item.quantity + payload.quantity;
            let tempTotalPrice = tempQty + item.price;
            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.cartItems = tempCart;
        storedInLocalStorage(state.cartItems);
      } else {
        state.cartItems.push(payload);
        storedInLocalStorage(state.cartItems);
      }
    },

    removeFromCart: (state, { payload }) => {
      const tempCart = state.cartItems.filter(
        (item) => item._id !== payload._id
      );
      state.cartItems = tempCart;
      storedInLocalStorage(state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
