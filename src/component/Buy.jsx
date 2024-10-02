import React from "react";
import { useDispatch } from "react-redux";
import { buyShirt } from "../redux/redux";

const Buy = () => {
  const dispatch = useDispatch(); // use to dispatch the action
  const buyShirtFunction = () => {
    //need a shirt action should be raised
    dispatch(buyShirt());
  };
  return (
    <div>
      <button onClick={buyShirtFunction}>Buy</button>
    </div>
  );
};

export default Buy;
