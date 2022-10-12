import React from "react";

const register = () => {
  return (
    <div className="register-form">
      <div className="register">
        <h1 className="register-header">Create account</h1>
        <input type="text" name="text" placeholder="Your Name"></input>
        <input type="text" name="text" placeholder="Your Email"></input>
        <input
          type="password"
          name="password"
          placeholder="Your Password"
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Re-enter Password"
        ></input>
        <div>
          <button className="register-button">REGISTER</button>
        </div>
        <div>or</div>
        <div>
          <button className="register-button-1">LOGIN</button>
        </div>
      </div>
    </div>
  );
};

export default register;
