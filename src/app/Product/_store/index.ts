import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../../API";


type NewPorductType = {
    name: string,
    count: number,
    id: string | undefined | any
}
// CREATE
export const addProductAction = createAsyncThunk(
    'products/addProduct',
    async (userData: NewPorductType) => {
        let res = await API.post(`/api/product/add`, { ...userData });
        return res;
    }
)
// READ
export const fetchProductsAction = createAsyncThunk(
    'products/fetchAllProducts',
    async () => {
        let res = await API.get("/api/product", {});
        return res;
    }
)
// UPDATE
export const editProductAction = createAsyncThunk(
    'products/editProduct',
    async (userData: NewPorductType) => {
        console.log("here is action", userData);

        let res = await API.post(`/api/product/edit/${userData.id}`, { name: userData.name, count: userData.count });
        return res;
    }
)
// DELETE
export const removeProductAction = createAsyncThunk(
    'products/removeProduct',
    async (id) => {
        let res = await API.delete(`/api/product/${id}`, {});
        return res;
    }
)



const productSlice = createSlice({
    name: 'crud',
    initialState: {
        isLoading: false,
        newProduct: {},
        products: []
    },
    reducers: {
        setProducts(state, action) {

        },
        setNewProduct(state, action) {

        }
    },
    extraReducers(builder) {

        builder
            .addCase(fetchProductsAction.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchProductsAction.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.products = action.payload.products;
                }
                state.isLoading = false;
            })
            .addCase(fetchProductsAction.rejected, (state, action) => {
                state.isLoading = false;
            })
            .addCase(addProductAction.fulfilled, (state, action) => {
                if (action.payload.success) {
                    console.log('ADDED! :)', action.payload);
                    state.products = action.payload.products;
                }
            })
            .addCase(editProductAction.fulfilled, (state, action) => {
                if (action.payload.success) {
                    console.log('Edited! :)', action.payload)
                    state.products = action.payload.products;
                }
            })
            .addCase(removeProductAction.fulfilled, (state, action) => {
                if (action.payload.success) {
                    console.log('Removed! :)', action.payload);
                    state.products = action.payload.products;
                }
            })


    }

})

export const { setNewProduct } = productSlice.actions;

export default productSlice.reducer;