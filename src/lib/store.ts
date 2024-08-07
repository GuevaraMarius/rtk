import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cart";
import { api, housesApi } from "./api";

export const store = configureStore({
    reducer:{
        [api.reducerPath]:api.reducer,
        [housesApi.reducerPath]: housesApi.reducer,
        cart
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(api.middleware,housesApi.middleware)
});

export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch= ReturnType<typeof store.dispatch>;