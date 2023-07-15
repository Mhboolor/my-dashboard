import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  tagTypes : ["PRODUCTS","BESTUSERS"],
  endpoints: (builder) => ({

    // Products Api
    getAllProducts : builder.query({
      query : () => "/products",
      providesTags : ["PRODUCTS"]
    }),
    getProduct : builder.query({
      query : (productId) => `/products/${productId}`,
      providesTags : ["PRODUCTS"]
    }),
    addProduct : builder.mutation({
      query : newProduct => ({
        url : "/products",
        method : "POST",
        body : newProduct
      }),
      invalidatesTags : ["PRODUCTS"]
    }), 
    deleteProduct : builder.mutation({
      query : productId => ({
        url : `/products/${productId}`,
        method : "DELETE"
      }),
      invalidatesTags : ["PRODUCTS"]
    }),
    editProduct : builder.mutation({
      query : (editedProduct) => ({
        url : `/products/${editedProduct.id}`,
        method : "PUT",
        body : editedProduct
      }),
      invalidatesTags : ["PRODUCTS"]
    }),


    // Dashboard Best Users Api
    getBestUsers : builder.query({
      query : () => "./best-users",
      providesTags : ["BESTUSERS"]
    }),
    deleteBestUser : builder.mutation({
      query : (userId) => ({
        url : `./best-users/${userId}`,
        method : "DELETE", 
      }),
      invalidatesTags : ["BESTUSERS"]
    })

    


  }),
});

export const { useGetAllProductsQuery , useGetProductQuery ,useAddProductMutation , useDeleteProductMutation , useEditProductMutation , useGetBestUsersQuery , useDeleteBestUserMutation} = apiSlice;
