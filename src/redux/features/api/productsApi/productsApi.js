import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (search, category, brand) => ({
        url: `/products`,
        params: { search, category, brand },
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
