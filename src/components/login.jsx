import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <div className="d-flex align-items-center justify-content-center bg-login hv-100">
      <div className="p-2 border rounded-lg w-25 bg-blur">
        <div className="d-flex align-items-center justify-content-center">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
            alt="logo"
            width="100"
            height="100"
          />
        </div>
        <h1 className="text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="form-group ">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <hr />
        <div className="text-center">
          <p>
            or <Link> Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
