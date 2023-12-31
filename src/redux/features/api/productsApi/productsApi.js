import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (product) => ({
        url: "/products",
        body: product,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
