import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("");
  const [item, setItem] = useState();
  const [clone, setclone] = useState();
  const userInfo = useSelector((state) => state.userSignin.userInfo);
  const products = useSelector((state) => state.productReducer);
  const optionHandler = (e) => {
    setOption(e.target.value);
    if (option === "lowest") {
      setclone(
        item.sort((a, b) => {
          return parseInt(b.price) - parseInt(a.price);
        })
      );
    } else if (option === "highest") {
      setclone(
        item.sort((a, b) => {
          return parseInt(a.price) - parseInt(b.price);
        })
      );
    } else {
      setclone(clone);
    }
    console.log(clone);
  };
  useEffect(() => {
    setItem(products.products);
    setclone(item);
  }, [products, item]);
  const history = useHistory();
  if (!userInfo) {
    history.push("/signin");
  }
  useEffect(() => {
    setclone(
      search.trim()
        ? item.filter((val) =>
            val.name.toLowerCase().includes(search.trim().toLowerCase())
          )
        : item
    );
  }, [search, item]);
  return (
    <div className="product-content">
      <div className="action-div">
        <input
          type="text"
          placeholder="search the product"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <select onChange={optionHandler}>
          <option value="">Select</option>
          <option value="lowest">lowest to highest</option>
          <option value="highest">highest to lowest</option>
        </select>
      </div>
      <div className="product-div">
        {clone && clone.map((ele, index) => <Product item={ele} key={index} />)}
      </div>
    </div>
  );
};

export default Products;
