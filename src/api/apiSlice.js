import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  endpoints: (builder) => ({
    getBestUsers: builder.query({
      query: () => "/best-users",
    }),
    deleteBestUser : builder.mutation({
      query : bestUserId => ({
        url : `/best-users/${bestUserId}`,
        method: 'DELETE',
      })
    })
  }),
});

export const { useGetBestUsersQuery , useDeleteBestUserMutation } = apiSlice;
