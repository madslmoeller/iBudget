import React from "react";
import Register from "./register";

const login = () => {
  return (
    <div className="login-form">
      <div className="login-header-1">
        <h1>iBudget</h1>
      </div>
      <div className="login-header-2">
        <h2>KEEP TRACK OF YOUR EXPENSES</h2>
      </div>
      <div className="login">
        <h1 className="login-header">Welcome, please sign in</h1>
        <input type="text" name="email" placeholder="Email"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <div>
          <button className="button">LOGIN</button>
        </div>
        <div>or</div>
        <div>
          <button className="button-1">REGISTER</button>
        </div>
      </div>
    </div>
  );
};

export default login;
