import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../redux/action/userAction";

const Headers = () => {
  const [burger, setBurger] = useState(false);
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const signoutHandler = () => {
    dispatch(userLogout());
    console.log(userInfo)
  };
  const hamBurger = ()=>{
    if(burger===true){
      setBurger(false)
    }else{
      setBurger(true)
    }
  }
  return (
    <nav className={burger? "navbar" : "navbar h-res"}>
      {userInfo ? (
        <div className="nav-left">
          <Link to="/">{userInfo.name.split(" ")[0]}</Link>
        </div>
      ) : (
        <div className="nav-left">
          <Link to="/">Bidonhomes</Link>
        </div>
      )}
        <div className="burger" onClick={hamBurger}>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
      <div className="nav-right">
        {userInfo ? (
          <div className={burger?"nav-item":"nav-item v-res"}>
            <div>
              <Link to="/products">PRODUCTS</Link>
            </div>
            <div>
              <Link to="/addProduct">ADD ITEM</Link>
            </div>
            <div>
              <button onClick={signoutHandler} to="#">
                LogOut
              </button>
            </div>
          </div>
        ) : (
          <div className={burger?"":"v-res"}>
            <Link to="/signin">LOG IN</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Headers;
