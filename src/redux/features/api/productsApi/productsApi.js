import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (category) => ({
        url: `products?category=${category}`,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
