import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  tagTypes: ["PRODUCTS", "BESTUSERS", "REVENUE-HISTORY", "USERS", "TIKETS"],
  endpoints: (builder) => ({
    // Products Api
    getAllProducts: builder.query({
      query: () => "/products",
      providesTags: (result = [], error, arg) => [
        "PRODUCTS",
        ...result.map(({ id }) => ({ type: "PRODUCTS", id })),
      ],
    }),
    getProduct: builder.query({
      query: (productId) => `/products/${productId}`,
      providesTags: (result, error, arg) => [{ type: "PRODUCTS", id: arg }],
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["PRODUCTS"],
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PRODUCTS"],
    }),
    editProduct: builder.mutation({
      query: (editedProduct) => ({
        url: `/products/${editedProduct.id}`,
        method: "PUT",
        body: editedProduct,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "PRODUCTS", id: arg.id },
      ],
    }),

    // Dashboard Best Users Api
    getBestUsers: builder.query({
      query: () => "./best-users",
      providesTags: ["BESTUSERS"],
    }),
    deleteBestUser: builder.mutation({
      query: (userId) => ({
        url: `/best-users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["BESTUSERS"],
    }),

    // Dashboard Revenue History Api
    getRevenueHistory: builder.query({
      query: () => "/revenue-history",
      providesTags: ["REVENUE-HISTORY"],
    }),
    deleteRevenueHistory: builder.mutation({
      query: (revenueId) => ({
        url: `/revenue-history/${revenueId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["REVENUE-HISTORY"],
    }),

    // Users Api
    getAllUsers: builder.query({
      query: () => "/users",
      providesTags: (result = [], error, arg) => [
        "USERS",
        ...result.map(({ id }) => ({ type: "USERS", id })),
      ],
    }),
    getUser: builder.query({
      query: (userId) => `/users/${userId}`,
      providesTags: (result, error, arg) => [{ type: "USERS", id: arg }],
    }),
    addUser: builder.mutation({
      query: (newUser) => ({
        url: "/users",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["USERS"],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["USERS"],
    }),

    // Tikets
    getTikets: builder.query({
      query: () => "/tikets",
      providesTags: (result = [], error, arg) => [
        "TIKETS",
        ...result.map(({ id }) => ({ type: "TIKETS", id })),
      ],
    }),
    addTikets: builder.mutation({
      query: (newTiket) => ({
        url: "/tikets",
        method: "POST",
        body: newTiket,
      }),
      invalidatesTags: ["TIKETS"],
    }),
    deleteTiket: builder.mutation({
      query: (tiketId) => ({
        url: `/tikets/${tiketId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TIKETS"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
  useGetBestUsersQuery,
  useDeleteBestUserMutation,
  useGetRevenueHistoryQuery,
  useDeleteRevenueHistoryMutation,
  useGetAllUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useGetTiketsQuery,
  useAddTiketsMutation,
  useDeleteTiketMutation,
} = apiSlice;
