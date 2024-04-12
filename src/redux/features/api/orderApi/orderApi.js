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

    updateOrderStatus: builder.mutation({
      query: (id) => ({
        url: `/api/v1/orders/${id}`,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  usePostOrderMutation,
  useGetUserOrdersQuery,
  useUpdateOrderStatusMutation,
} = orderApi;
