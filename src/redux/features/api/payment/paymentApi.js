import { baseApi } from "../baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: "/create-payment-intent",
        method: "POST",
        data: data,
      }),
    }),
    // postPayment: builder.mutation({
    //   query: (payment) => ({
    //     url: "/payment",
    //     method: "POST",
    //     body: payment,
    //   }),
    // }),
  }),
});

export const { useCreatePaymentIntentMutation } = paymentApi;
