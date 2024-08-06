import { useGetPokesQuery } from '@/lib/api';
import { RootState } from '@/lib/store';
import React from 'react'
import { useSelector } from 'react-redux'

const Content = () => {
  const cartStore= useSelector((state:RootState)=>state.cart.products);
  const {data}= useGetPokesQuery();
  console.log(data);
  
  return (
    <div className="w-full h-[80vh] bg-gray-700">
      
      <h1>{cartStore}</h1>
      
      </div>
  )
}

export default Content