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

    getOrders: builder.query({
      query: (orders) => ({
        url: `/orders`,
        body: orders,
      }),
    }),
  }),
});

export const { usePostOrderMutation, useGetOrdersQuery } = orderApi;
