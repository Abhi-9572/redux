import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyShirt, returShirt } from './shirtAction';

const ShirtShop = () => {
const shirtStore=useSelector(state=>state)

console.log({shirtStore});

const dispatch=useDispatch()
const buyShirtFunction=(price)=>{
dispatch(buyShirt(price))
}

const returnShirtFunction=(price)=>{
  dispatch(returShirt(price))
  }

  return (
    <div>
      <h2>Shirt Shop</h2>
      <div>Shirt -- {shirtStore?.shirt}</div>
      <div>Total shirt sell : {shirtStore?.totalSell}</div>
      <button onClick={()=>buyShirtFunction(1000)}>Buy normal Shirt</button>
      <button onClick={()=>buyShirtFunction(2000)}>Buy branded Shirt</button>
      <button onClick={()=>returnShirtFunction(1000)}>return normal Shirt</button>
      <button onClick={()=>returnShirtFunction(2000)}>return branded Shirt</button>

    </div>
  )
}

export default ShirtShop
