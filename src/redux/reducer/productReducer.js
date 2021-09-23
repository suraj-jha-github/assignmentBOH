import { CREATE_NOTE } from "../action/actionType";

export const productReducer = (state = {products:[]}, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      return {
        ...state,
        products: [action.payload, ...state.products],
      };
    default:
      return state;
  }
};