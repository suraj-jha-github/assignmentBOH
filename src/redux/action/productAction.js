import { CREATE_NOTE } from "./actionType";

export const addProduct = (item) => (dispatch, getState) => {
  dispatch({
    type: CREATE_NOTE,
    payload: item,
  });
  localStorage.setItem(
    "productDetail",
    JSON.stringify(getState().productReducer.products)
  );
};
