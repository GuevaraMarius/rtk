import { createSlice } from "@reduxjs/toolkit";

interface InitialStateInterface{
    products: number
}
const initialState:InitialStateInterface ={
    products: 0,
}
export const cart = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state)=>{
            state.products+=1;
        }, 
        removeFromCart: (state)=>{
            state.products-=1;
        }, 
        resetCart:(state)=>{
            state.products=0;
        }
    }
});

export const {addToCart, removeFromCart, resetCart} = cart.actions
export default cart.reducer;