import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

// const initialState = {
//   cartData: [],
// };

export const cartItem = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("reducers", action);
      return [...state, { cartData: action.data }];

    case REMOVE_TO_CART:
      // console.log("reducers", action);
      state.pop();
      return [...state];

    default:
      return state;
  }
};
