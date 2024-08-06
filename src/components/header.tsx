import { addToCart, removeFromCart, resetCart } from '@/lib/slices/cart';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch=useDispatch();
  const handleClick= ()=>{
    dispatch(addToCart());
  }
  const handleRemove= ()=>{
    dispatch(removeFromCart());
  }
  const handleReset= ()=>{
    dispatch(resetCart());
  }
  return (
    <>
    <button onClick={handleClick}>Add To cart</button> 
    <br/>
    <button onClick={handleRemove}>Remove To cart</button>
    <br/>
    <button onClick={handleReset}>Reset cart</button>
    </>
  )
}

export default Header