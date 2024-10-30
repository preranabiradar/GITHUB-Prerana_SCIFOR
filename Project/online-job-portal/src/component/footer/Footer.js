import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaAngleRight,
} from "react-icons/fa";
import "./Footer.css"; // Add custom styling if needed

const Footer = () => {
  return (
    <div>
      <footer className="bg-secondary text-white py-4">
        <div className="container">
          <div className="row">
            {/* Quick Links */}
            <div className="col-md-4 mb-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <FaAngleRight className="me-2" />
                  <a href="#home" className="text-white">
                    Home
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaAngleRight className="me-2" />
                  <a href="#filter-search" className="text-white">
                    Filter Search
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaAngleRight className="me-2" />
                  <a href="#all-jobs" className="text-white">
                    All Jobs
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaAngleRight className="me-2" />
                  <a href="#about-us" className="text-white">
                    About Us
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaAngleRight className="me-2" />
                  <a href="#contact-us" className="text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Extra Links */}
            <div className="col-md-4 mb-4">
              <h5>Extra Links</h5>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <FaAngleRight className="me-2" />
                  <a href="#account" className="text-white">
                    Account
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaAngleRight className="me-2" />
                  <a href="/signin" className="text-white">
                    Sign In
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaAngleRight className="me-2" />
                  <a href="#register" className="text-white">
                    Register
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaAngleRight className="me-2" />
                  <a href="#post-job" className="text-white">
                    Post Job
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaAngleRight className="me-2" />
                  <a href="#dashboard" className="text-white">
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="col-md-4 mb-4">
              <h5>Follow Us</h5>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <FaFacebook className="me-2" />
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Facebook
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaTwitter className="me-2" />
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Twitter
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaInstagram className="me-2" />
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Instagram
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaLinkedin className="me-2" />
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <FaYoutube className="me-2" />
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-section">
        <div className="footer-content">
          <p>© 2024 JobPortal. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
