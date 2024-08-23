import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { Fragment } from "react";
import "./Login.css";

const Login = () => {





  return (
    <Fragment>
      <NavBar/>
      <div className="login-container">
        <form className="login-form">
          <h2 className="poppins-bold text-center mb-4">Welcome Back</h2>
          {/* Email Input */}
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password Input */}
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Remember Me Checkbox */}
          <div className="form-group form-check mb-4">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          {/* Submit Button */}
          <button type="submit" className="btn btn-custom w-100">
            Log In
          </button>
          {/* Forgot Password Link */}
          <div className="text-center mt-3">
            <a href="#forgot-password" className="forgot-password">
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
