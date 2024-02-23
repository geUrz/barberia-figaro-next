import { useState, useEffect, createContext } from "react"

export const CartContext = createContext()

export function CartProvider(props){
  const {children} = props

  const data = {}


  return <CartContext.Provider value={data}></CartContext.Provider>

}