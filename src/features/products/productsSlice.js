import { createSlice , createEntityAdapter } from "@reduxjs/toolkit";

const productsAdapter = createEntityAdapter({}) 

const productsSlice = createSlice({
    name : "products",
    initialState : productsAdapter.getInitialState(),
    reducers : {}
})

export default productsSlice.reducer;
export const {} = productsSlice.actions;
