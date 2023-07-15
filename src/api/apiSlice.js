import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  tagTypes: ["PRODUCTS", "BESTUSERS", "REVENUE-HISTORY","USERS"],
  endpoints: (builder) => ({
    // Products Api
    getAllProducts: builder.query({
      query: () => "/products",
      providesTags: ["PRODUCTS"],
    }),
    getProduct: builder.query({
      query: (productId) => `/products/${productId}`,
      providesTags: ["PRODUCTS"],
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
      invalidatesTags: ["PRODUCTS"],
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
    deleteRevenueHistory : builder.mutation({
      query : (revenueId) => ({
        url : `/revenue-history/${revenueId}`,
        method : "DELETE"
      }), 
      invalidatesTags: ["REVENUE-HISTORY"],
    }),

    // Users Api
    getAllUsers : builder.query({
      query : () => "/users",
      providesTags: ["USERS"],
    }),
    getUser : builder.query({
      query : (userId) => `/users/${userId}`,
      providesTags: ["USERS"],
    }),
    addUser : builder.mutation({
      query : (newUser) => ({
        url : "/users",
        method : "POST",
        body : newUser
      }),
      invalidatesTags: ["USERS"],
    })
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
  useAddUserMutation
} = apiSlice;
