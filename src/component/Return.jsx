import React from "react";
import { useDispatch } from "react-redux";
import { returShirt } from "../redux/redux";

const Return = () => {
  const dispatch = useDispatch(); // use to dispatch the action
  const returnShirtFunction = (returnPrice) => {
    //need a shirt action should be raised
    dispatch(returShirt(returnPrice));
  };
  return (
    <div>
      <button onClick={()=>returnShirtFunction(800)}>Return normal Shirt</button>
      <button onClick={()=>returnShirtFunction(1800)}>Return normal shirt</button>

    </div>
  );
};

export default Return;
