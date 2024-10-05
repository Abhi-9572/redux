import React from "react";
import { useSelector } from "react-redux";

const Shop = () => {
  const shopState = useSelector((state) => state); // give the selected value form state ( allow you to select value)

  console.log(shopState); // {shirt: , jean: ,totalSell: }
  return (
    <div>
      <h2>Flipkart</h2>
      <h3>Total sell : {shopState.totalSell}</h3>
      <div>Shirt :- {shopState.shirt}</div>
      <div>jean :- {shopState.jean}</div>
    </div>
  );
};

export default Shop;
