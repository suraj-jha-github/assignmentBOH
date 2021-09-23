import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userSigninAction } from "../redux/action/userAction";

const Signin = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  console.log(userSignin);
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  if (userInfo) {
    history.push("/addProduct");
  }
  const formSubmit = (e) => {
    e.preventDefault();
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        user.email
      ) &&
      user.name !== ""
    ) {
      dispatch(userSigninAction(user));
      history.push("/addProduct");
    } else {
      alert("please signin properly");
    }
  };
  return (
    <div className="login-container">
      <form className="login-div" onSubmit={formSubmit}>
        <h1>Sign In</h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <button onClick={formSubmit}>Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
