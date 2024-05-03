import { baseApi } from "../baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ category, brand }) => {
        let url = `/products`;
        if (category && brand) {
          url += `?category=${category}&brand=${brand}`;
        } else if (category) {
          url += `?category=${category}`;
        } else if (brand) {
          url += `?brand=${brand}`;
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
