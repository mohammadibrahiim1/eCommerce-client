import { baseApi } from "../baseApi";
import { getUser } from "./authSlice";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          console.log(res);
          await dispatch(getUser(data?.email));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { usePostUserMutation } = authApi;
