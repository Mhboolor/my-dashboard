import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  tagTypes : ["PRODUCTS"],
  endpoints: (builder) => ({
    getAllProducts : builder.query({
      query : () => "/products",
      providesTags : ["PRODUCTS"]
    }),
    addProduct : builder.mutation({
      query : newProduct => ({
        url : "/products",
        method : "POST",
        body : newProduct
      }),
      invalidatesTags : ["PRODUCTS"]
    })
  }),
});

export const { useGetAllProductsQuery , useAddProductMutation } = apiSlice;
