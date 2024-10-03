import { act } from 'react';
import {createStore} from 'redux' // this is depreacated now we will use redux toolkit
// action creator

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

export const buyJean = () => {
  return {
    type: "buy-a-jean",
  };
};

export const returJean = () => {
  return {
    type: "return-a-jean",
  };
};

 const initialShopState = {
  shirt: 100,
  jean: 100,
  totalSell:0
};

export const shirtReducer = (state = initialShopState, action) => {
  if (action.type === "buy-a-shirt") {
    return {
      ...state,
      shirt: state.shirt - 1,
      totalSell:state.totalSell+action.payload
    };
  } else if (action.type === "return-a-shirt") {
    return {
      ...state,
      shirt: state.shirt + 1,
      totalSell:state.totalSell-action.payload
    };
  }
  else if (action.type === "buy-a-jean") {
    return {
      ...state,
      jean: state.jean - 1,
    };
  }
  else if (action.type === "return-a-jean") {
    return {
      ...state,
      jean: state.jean + 1,
    };
  }
  return state
};


export const store=createStore(shirtReducer)
// reducer comes from reduce method from array

// Reducer is pure function --- for same input you will get same output

// redux is predictable container for JS App
// here you have reducer -- it is function and you can predict the output


// useSelector :- to take the value
// useDispatch :- to get the information to reducer [action : here it is type]

// context vs redux

// context will render all the children rapped by provider

// redux will render only the component which is using the state
