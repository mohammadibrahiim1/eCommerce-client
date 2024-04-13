import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { data } from "autoprefixer";
// import axios from "axios";

const initialState = {
  paymentIntent: null,
  isLoading: true,
  isError: false,
  error: "",
};

export const createPaymentIntent = createAsyncThunk(
  "createPaymentIntent",
  async (amount) => {
    //     const response = await fetch("http://localhost:5173/api/v1/create-payment-intent", {
    //       method: "POST",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify({ amount }),
    //     });

    //     const data = await response.json();
    //     console.log(data);
    //     return data;

    try {
      const response = await axios.post(
        "http://localhost:5173/api/v1/create-payment-intent",
        amount
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPaymentIntent.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createPaymentIntent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.paymentIntent = action.payload;
        state.isError = false;
        state.error = null;
      })
      .addCase(createPaymentIntent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default paymentSlice.reducer;
