import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftLogo from "../images/OpenBook.png";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import "./SignIn.css";
import { LOGGED_USER, REGISTRED_USER } from "../../utils/constant";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem(REGISTRED_USER));

    // Check if user exists and the password matches
    if (storedUser.email === email && storedUser.password === password) {
      // Simulate a successful login and navigate to the welcome page
      localStorage.setItem(LOGGED_USER, JSON.stringify({ email, password }));
      navigate("/jobs");
    } else {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={LeftLogo} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-center">
            <a href="/" className="visit">
              Visit MyJobPortal
            </a>
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>

              {errorMessage && <p className="error-message">{errorMessage}</p>}

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
              </div>
              <div className="login-center-button">
                <button type="submit">Log In</button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
