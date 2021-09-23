import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productReducer } from "./reducer/productReducer";
import { userReducer } from "./reducer/userReducer";

const middleware = [thunk];
const reducer = combineReducers({
  userSignin: userReducer,
  productReducer: productReducer,
});

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  productReducer: {
    products: localStorage.getItem("productDetail")
      ? JSON.parse(localStorage.getItem("productDetail"))
      : [],
  },
};
export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
