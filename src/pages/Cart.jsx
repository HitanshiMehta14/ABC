import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {

  const{ products, currency, cartItems } = useContext(ShopContext);

  const[cartData,setCartData] = useState([]);

  useEffect(()=>{

    const tempData = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        
      }
    }

  },[cartItems])


  return (
    <div>
      
    </div>
  )
}

export default Cart