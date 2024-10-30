import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { LOGGED_USER } from "../../utils/constant";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem(LOGGED_USER); // Remove user data from localStorage
    navigate("/signin"); // Redirect to login page
    setIsMenuOpen(false); // Close the menu after logout
  };

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Check if the user is logged in by checking localStorage
  const isLoggedIn = !!localStorage.getItem(LOGGED_USER);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6956/6956765.png"
          alt="JobHunt Logo"
          className="logo-img"
        />
        <h2 className="logo-text">HIRELANE</h2>
        <button className="menu-toggle" onClick={toggleMenu}>
          {/* Hamburger icon */}
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      <div
        style={{ zIndex: 1000 }}
        className={`nav-links ${isMenuOpen ? "active" : ""}`}
      >
        <Link to="/jobs" onClick={closeMenu}>
          All Jobs
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>

        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        ) : (
          <>
            <Link to="/signup" onClick={closeMenu}>
              Sign Up
            </Link>
            <Link to="/signin" onClick={closeMenu}>
              Sign In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
