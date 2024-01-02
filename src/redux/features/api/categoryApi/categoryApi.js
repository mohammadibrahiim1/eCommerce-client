import { baseApi } from "../baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: (categories) => ({
        url: "/categories",
        body: categories,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
