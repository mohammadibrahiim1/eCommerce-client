import { baseApi } from "../baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (price) => ({
        url: "/create-payment-intent",
        method: "POST",
        data: { price },
      }),
    }),
    postPayment: builder.mutation({
      query: (payment) => ({
        url: "/payment",
        method: "POST",
        body: payment,
      }),
    }),
  }),
});

export const { useCreatePaymentIntentMutation, usePostPaymentMutation } =
  paymentApi;
