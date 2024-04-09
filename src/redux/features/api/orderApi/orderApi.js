import { baseApi } from "../baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postOrder: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
    }),

    confirmPayment: builder.mutation({
      query: (orderId) => ({
        url: ` /orders/confirm/${orderId} `,
        method: "GET",
      }),
    }),
  }),
});

export const { usePostOrderMutation, useConfirmPaymentMutation } = orderApi;
