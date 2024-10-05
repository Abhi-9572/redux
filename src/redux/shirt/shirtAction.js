

export const buyShirt = (price) => {
    return {
      type: "buy-a-shirt",
      payload:price
    };
  };
  
  export const returShirt = (price) => {
    return {
      type: "return-a-shirt",
      payload:price
    };
  };
  