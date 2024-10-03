import React from "react";
import { useDispatch } from "react-redux";
import { buyJean, buyShirt } from "../redux/redux";

const Buy = () => {
  const dispatch = useDispatch(); // use to dispatch the action
  const buyShirtFunction = (price) => {
    //need a shirt action should be raised
    dispatch(buyShirt(price));
  };

  const buyJeanFunction = () => {
    //need a shirt action should be raised
    dispatch(buyJean());
  };
  return (
    <div>
      <button onClick={()=>buyShirtFunction(1000)}>Buy normal Shirt</button>
      <button onClick={()=>buyShirtFunction(2000)}>Buy branded Shirt</button>

      <br/>
      <button onClick={buyJeanFunction}>Buy Jean</button>
    </div>
  );
};

export default Buy;
