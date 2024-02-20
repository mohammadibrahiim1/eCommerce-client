import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ category, brand }) => ({
        url: `products?category=${category}&brand=${brand}`,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
