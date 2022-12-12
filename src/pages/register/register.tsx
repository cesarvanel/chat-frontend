import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { REGISTER } from "../../types/constans/constant";
import { useNavigate } from "react-router-dom";
import { ToastProps } from "../../components/Notifications/Toast";
import Toast from "../../components/Notifications/Toast";
import { key_App } from "../../types/constans/constant";
import userSlice from "../../redux/apps/reducer";
import { useAppDispatch } from "../../redux/store";

import "./register.scss";

const Register = () => {
  const random = Math.round(Math.random() * 1000);
  const navigate = useNavigate();
  const toastRef = useRef(null);
  const dispatch = useAppDispatch();
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPwd: "",
    confPwd: "",
    userAvatar: `https://api.multiavatar.com/${random}`,
  });

  const [toast, setToast] = useState<ToastProps>({ message: "", type: "" });

  const handleValidation = async () => {
    const { userName, userEmail, userPwd, confPwd } = user;

    if (
      !userName.trim() ||
      !userEmail.trim() ||
      !userPwd.trim() ||
      !confPwd.trim()
    ) {
      setToast({
        ...toast,
        message: "veuillez remplir tous les champs",
        type: "Error",
      });
    } else if (userPwd.trim() !== confPwd.trim()) {
      setToast({
        ...toast,
        message: "confirmation du mot de passe  incorrecte",
        type: "Error",
      });
    } else {
      try {
        const { data } = await axios.post(REGISTER, user);
        console.log(data);
        if (data.success) {
          localStorage.setItem(key_App, JSON.stringify(data.sesUser));
          dispatch(userSlice.actions.LoadSesUser(data.sesUser));
          navigate("/");
        }
      } catch (error: any) {
        console.log(error.response);
      }
    }
  };

  const handleSubmmit = async (e: any) => {
    e.preventDefault();
    handleValidation();
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
            placeholder="Password"
            onChange={(e) => setUser({ ...user, confPwd: e.target.value })}
          />

          <input type="file" hidden id="file" ref={imageRef} />
          <label htmlFor="file">
            <img src="images/add-user.png" alt="" />
            <span>Add and Avatar</span>
          </label>
          <button>Sing up</button>
          {toast && (
            <Toast message={toast.message} type={toast.type} ref={toastRef} />
          )}
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
