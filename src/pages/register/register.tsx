import React, { useRef,useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { REGISTER } from "../../types/constans/constant";

import "./register.scss";

const Register = () => {
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPwd: "",
    confPwd: "",
  });

  console.log(user);

  console.log("REGISTER", REGISTER);

  const handleSubmmit = async (e: any) => {
    e.preventDefault();

    let response;
    try {
      response = await axios.post(
        "http://localhost:4500/api/users/register",{user}
        
      );
      console.log(response);
    } catch (error: any) {
      console.log(error);
    }

    /*const response = await fetch(REGISTER, {
      method: "POST",
      mode:'cors',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user),
    });*/
  };

  const imageRef = useRef(null);
  return (
    <div className="Register">
      <div className="formWrapper">
        <h2 className="logo">Ronddo Chat</h2>
        <h4 className="title">Register</h4>
        <form onSubmit={handleSubmmit}>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, userEmail: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, userPwd: e.target.value })}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setUser({ ...user, confPwd: e.target.value })}
          />
          <input type="file" hidden id="file" ref={imageRef} />
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
