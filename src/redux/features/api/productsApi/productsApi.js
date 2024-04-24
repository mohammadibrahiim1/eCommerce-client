import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: `/products`,
        // body: products,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
