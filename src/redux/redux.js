import {createStore} from 'redux'
// action creator

export const buyShirt = () => {
  return {
    type: "buy-a-shirt",
  };
};

export const returShirt = () => {
  return {
    type: "return-a-shirt",
  };
};

 const initialShopState = {
  shirt: 100,
  jean: 100,
};

export const shirtReducer = (state = initialShopState, action) => {
  if (action.type === "buy-a-shirt") {
    return {
      ...state,
      shirt: state.shirt - 1,
    };
  } else if (action.type === "return-a-shirt") {
    return {
      ...state,
      shirt: state.shirt + 1,
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
