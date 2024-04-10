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

    getOrderById: builder.query({
      query: (orderId) => ({
        url: `/orders/${orderId} `,
      }),
    }),
  }),
});

export const { usePostOrderMutation, useGetOrderByIdQuery } = orderApi;
