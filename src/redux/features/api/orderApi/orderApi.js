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

    getUserOrders: builder.query({
      query: (email) => ({
        url: `/orders/${email}`,
      }),
    }),
  }),
});

export const { usePostOrderMutation, useGetUserOrdersQuery } = orderApi;
