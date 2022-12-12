import axios from "axios";
import { emit } from "process";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../types/constans/constant";
import { key_App } from "../../types/constans/constant";

import "./login.scss";

const Login = () => {
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const items: string | null = localStorage.getItem(key_App);
    if (items) {
      navigate("/");
    }

  }, [navigate]);


  const handleValidation = async (userEmail?: string, userPwd?: string) => {
    if (!userEmail || !userPwd) {
      console.log("une erreur est survenue");
    } else {
      try {
        const { data } = await axios.post(LOGIN, { userEmail, userPwd });
        if (data.success) {
          navigate("/");
        }
      } catch (error: any) {
        console.log("mot de passe ou passeword incorrect");
      }
    }
  };

  const handleSubmmit = async (e: any) => {
    e.preventDefault();
    const userEmail = inputEmailRef.current?.value;
    const userPwd = inputPasswordRef.current?.value;

    handleValidation(userEmail, userPwd);
  };
  return (
    <div className="Login">
      <div className="formWrapper">
        <h2 className="logo">Ronddo Chat</h2>
        <h4 className="title">Login</h4>
        <form onSubmit={handleSubmmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            ref={inputEmailRef}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            ref={inputPasswordRef}
          />

          <button>Log in </button>
        </form>
        <p>
          You don't have and Account ? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
