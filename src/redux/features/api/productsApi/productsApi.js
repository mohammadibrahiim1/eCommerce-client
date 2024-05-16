import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ category, sub_category }) => ({
        // let url = `/products`;
        // if (category && sub_category) {
        //   url += `?category=${category}$sub_category=${sub_category}`;
        // } else if (category) {
        //   url += `?category=${category}`;
        // } else if (sub_category) {
        //   url += `?subcategory=${sub_category}`;
        // }
        // return { url };
        url: `/products?category=${category}&sub_category=${sub_category}`,
      }),

      // Enhanced error handling
      onError: (error) => {
        console.error("Error fetching products :", error);
        return { error: "An error occurred while fetching products" };
      },
    }),

    // getProductsBySubCategory: builder.query({
    //   query: (sub_category) => ({
    //     url: `/products?sub_category=${sub_category}`,
    //   }),
    // }),
  }),
});

export const { useGetProductsQuery } = productApi;
