import React from "react";
import { Link } from "react-router-dom";

import "./login.scss";

const Login = ({}) => {
  return (
    <div className="Login">
      <div className="formWrapper">
        <h2 className="logo">Ronddo Chat</h2>
        <h4 className="title">Register</h4>
        <form>
          <input type="email" name="" id="" placeholder="email" />
          <input type="password" name="" id="" placeholder="password" />

          <button>Log in </button>
        </form>
        <p>You don't have and Account ? <Link to='/register'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
