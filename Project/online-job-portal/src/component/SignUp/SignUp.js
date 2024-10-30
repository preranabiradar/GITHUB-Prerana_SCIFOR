import React, { useState } from "react";
import LeftLogo from "../images/OpenBook.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./SignUp.css";
import { REGISTRED_USER } from "../../utils/constant";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!fullName || !email || !password) {
      setError("All fields are required");
      return;
    }

    // Store the user data in localStorage
    const user = { fullName, email, password };
    localStorage.setItem(REGISTRED_USER, JSON.stringify(user));

    // Display success message and clear fields
    setMessage("Sign-up successful! You can now log in.");
    setError("");
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-main">
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-center">
            <a href="/" className="visit">
              Visit MyJobPortal
            </a>
            <h2>Welcome to Signup!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleSubmit}>
              {error && <p className="error-message">{error}</p>}
              {message && <p className="success-message">{message}</p>}

              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                err
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
              <div className="login-center-buttons">
                <button type="submit">Sign Up </button>
                {/* <button type="button">
                  <img src={GoogleLogo} alt="Google Logo" />
                  Sign Up with Google
                </button> */}
              </div>
            </form>
          </div>
          <p className="login-bottom-p">
            Already have an account? <a href="/signin">Sign In</a>
          </p>
        </div>
      </div>
      <div className="login-left">
        <img src={LeftLogo} alt="Open Book Logo" />
      </div>
    </div>
  );
};

export default SignUp;
