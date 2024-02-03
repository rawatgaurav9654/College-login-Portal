import React from "react";
import { useState } from "react";
import "./LoginSignup.css";

import user_icon from "../assessts/images/th.jpg";
import email_icon from "../assessts/images/email.jpg";
import password_icon from "../assessts/images/password.jpg";




const LoginSignup = () => {
  const [action, setAction] = useState("Log in");

  return (
    <div className="container">
      <div className="header">
        <div className="text"> {action} </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Log in" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" width={20} height={20} />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" width={20} height={20} />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" width={20} height={20} />
          <input type="password" placeholder="password" />
        </div>
      </div>
      {action === "sign up" ? (
        <div></div>
      ) : (
        <div className="forget-password">
          Forget password?<span>click here</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("sign up");
          }}
        >
          sign up
        </div>
        <div
          className={action === "sign up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Log in
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
