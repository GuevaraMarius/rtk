import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cart";
import { api } from "./api";

export const store = configureStore({
    reducer:{
        [api.reducerPath]:api.reducer,
        cart
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(api.middleware)
});

export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch= ReturnType<typeof store.dispatch>;