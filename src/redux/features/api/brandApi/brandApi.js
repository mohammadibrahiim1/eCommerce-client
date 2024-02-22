import { baseApi } from "../baseApi";

const brandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBrands: builder.query({
      query: (brands) => ({
        url: "/brands",
        body: brands,
      }),
    }),
  }),
});

export const { useGetBrandsQuery } = brandApi;
