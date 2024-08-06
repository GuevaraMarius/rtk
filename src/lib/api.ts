import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api= createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://pokeapi.co/api/v2/",
    }),
    endpoints:(builder)=>({
        getPokes:builder.query<any, void>({
            query: ()=>({
                url:'pokemon/ditto'
            })
        })
    }),
});
export const {useGetPokesQuery}=api;