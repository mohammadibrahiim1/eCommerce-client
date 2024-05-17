import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ category, sub_category }) => {
        let url = `/products`;
        if (category && sub_category) {
          url += `?category=${category}&sub_category=${sub_category}`;
        } else if (category) {
          url += `?category=${category}`;
        } else if (sub_category) {
          url += `?subcategory=${sub_category}`;
        }
        return { url };
      },

      // Enhanced error handling
      onError: (error) => {
        console.error("Error fetching products :", error);
        return { error: "An error occurred while fetching products" };
      },
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
