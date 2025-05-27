import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const ProductApi=createAsyncThunk('product',async()=>{
    let response=await fetch('https://fakestoreapi.com/products');
    let data= response.json()
    return data;
});

export const ProductSlice=createSlice({
    name:'product',
    initialState:{
        loading:false,
        ProductList:[],
        error:null,
        AddCart:[]

    },
    extraReducers:(boiler)=>{
        boiler.addCase(ProductApi.pending,(state)=>{
            state.loading=true
        })
        .addCase(ProductApi.fulfilled,(state,action)=>{
            state.loading=false
            state.ProductList=action.payload
        })
        .addCase(ProductApi.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload

        })
    },
    reducers:{
        addProduct:(state,action)=>{
            let list=state.ProductList
           let product= list.find((item)=>item.id.toString()==action.payload);
           state.AddCart.push({title:product.title,id:product.id,price:product.price,rating:product.rating.rate,image:product.image,category:product.category})
        },
        removeProduct:(state,action)=>{
           state.AddCart=state.AddCart.filter((item)=>item.id.toString()!=action.payload)
        }

    }
})

export const {addProduct,removeProduct}=ProductSlice.actions;

export default ProductSlice.reducer