import React from "react";
import { Link } from "react-router-dom";
import "./admin.scss";

const Admin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.Email.value;
    const password = e.target.Password.value;
    console.log("Email : " + email, "\n", "Password :" + password);
  };
  return (
    <div className="container ">
      <div className="login">
        <div>
          <h1 className="text-center">LOGIN</h1>

          <form onSubmit={handleLogin}>
            <div>
              <p className="text-center">username</p>
              <input
                className="text-center"
                type="text"
                name="username"
                placeholder="username"
              />
            </div>

            <div>
              <p className="text-center">Password*</p>
              <input
                className="text-center"
                type="text"
                name="Password"
                placeholder="Password"
              />
            </div>
            
            <button className="btn-admin">Log in</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};
export default Admin;
