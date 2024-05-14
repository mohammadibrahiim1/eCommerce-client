import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (category) => ({
        url: `/products?category=${category}`,
      }),

      // Enhanced error handling
      onError: (error) => {
        console.error("Error fetching products :", error);
        return { error: "An error occurred while fetching products" };
      },
    }),

    getProductsBySubCategory: builder.query({
      query: (sub_category) => ({
        url: `/products?sub_category=${sub_category}`,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductsBySubCategoryQuery } =
  productApi;
