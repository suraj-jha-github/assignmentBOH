import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addProduct } from "../redux/action/productAction";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(false);
  const [item, setItem] = useState({
    name: "",
    des: "",
    price: "",
    qty: "",
    url: "",
  });
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const history = useHistory();
  if (!userInfo) {
    history.push("/signin");
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if(item.name && item.price && item.qty){
      dispatch(addProduct(item));
      history.push("/products")
    }
  };
  return (
    <>
      <div className="add-Item">
        <button
          onClick={() => {
            setPopup(true);
          }}
        >
          Add Product
        </button>
      </div>
      {popup ? (
        <div className="background-popup">
          <form className="popup-cotent" onSubmit={submitHandler}>
            <input
              type="text"
              value={item.name}
              onChange={(e) => {
                setItem({ ...item, name: e.target.value });
              }}
              placeholder="Enter the product name"
            />
            <input
              type="text"
              value={item.des}
              onChange={(e) => {
                setItem({ ...item, des: e.target.value });
              }}
              placeholder="Write product description"
            />
            <input
              type="number"
              value={item.price}
              onChange={(e) => {
                setItem({ ...item, price: e.target.value });
              }}
              placeholder="Price of product"
              pattern="/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/"
            />
            <input
              type="number"
              value={item.qty}
              onChange={(e) => {
                setItem({ ...item, qty: e.target.value });
              }}
              placeholder="Quantity of product"
            />
            <input
              type="url"
              value={item.url}
              onChange={(e) => {
                setItem({ ...item, url: e.target.value });
              }}
              placeholder="Enter user image url"
            />
            <div>
              <button
                className="close"
                onClick={() => {
                  setPopup(false);
                }}
              >
                close
              </button>
              <button className="submit" onSubmit={submitHandler}>
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AddProduct;
