const initialShirtShopState = {
    shirt: 100,
    totalSell:0
  };
  
  export const shirtReducer = (state = initialShirtShopState, action) => {
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
    return state
  };