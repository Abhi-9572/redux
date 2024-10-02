import React from "react";
import { useDispatch } from "react-redux";
import { returShirt } from "../redux/redux";

const Return = () => {
  const dispatch = useDispatch(); // use to dispatch the action
  const returnShirtFunction = () => {
    //need a shirt action should be raised
    dispatch(returShirt());
  };
  return (
    <div>
      <button onClick={returnShirtFunction}>Return</button>
    </div>
  );
};

export default Return;
