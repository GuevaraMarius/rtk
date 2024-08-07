import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface House {
    url: string;
    name: string;
    region: string;
    coatOfArms: string;
    currentLord: string;
    overlord: string;
    founded: string;
  }

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
export const housesApi = createApi({
    reducerPath: 'housesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://anapioficeandfire.com/api/' }),
    endpoints: (builder) => ({
      getHouses: builder.query<House[], void>({
        query: () => 'houses',
      }),
      getHouseById: builder.query<House, string>({
        query: (id) => `houses/${id}`,
      }),
      getCharacterById: builder.query<any, string>({
        query: (id) => `characters/${id}`,
      })
    }),
  });
  
export const {useGetPokesQuery}=api;
export const {useGetHousesQuery,useGetHouseByIdQuery, useGetCharacterByIdQuery}=housesApi;