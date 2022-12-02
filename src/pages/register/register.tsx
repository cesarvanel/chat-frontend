import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "./register.scss";

const Register = () => {
  const imageRef = useRef(null);
  return (
    <div className="Register">
      <div className="formWrapper">
        <h2 className="logo">Ronddo Chat</h2>
        <h4 className="title">Register</h4>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" hidden ref={imageRef} />
          <label htmlFor="file">
            <img src="images/add-user.png" alt="" />
            <span>Add and Avatar</span>
          </label>
          <button>Sing up</button>
        </form>
        <p>
          {" "}
          do You have and Account ? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
