import { baseApi } from "../baseApi";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    submitPayment: builder.mutation({
      query: (paymentData) => ({
        url: "/payment",
        method: "POST",
        body: paymentData,
      }),
    }),
  }),
});

export const { useSubmitPaymentMutation } = paymentApi;
