import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  endpoints: (builder) => ({
    getAllProducts : builder.query({
      query : () => "/products",
    }),
    addProduct : builder.mutation({
      query : newProduct => ({
        url : "/products",
        method : "POST",
        body : newProduct
      })
    })
  }),
});

export const { useGetAllProductsQuery , useAddProductMutation } = apiSlice;
