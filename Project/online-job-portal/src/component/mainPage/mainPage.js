import React from "react";
import "./mainPage.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function WelcomePage() {
  return (
    <div className="welcome-page">
      <Navbar />
      <section className="hero-section">
        <div className="hero-content">
          <h1>Find Your Dream Job Today</h1>
          <p>
            Discover thousands of opportunities in top companies. Your next
            career move is just a click away!
          </p>
          <a href="/jobs" className="cta-button">
            Explore Jobs
          </a>
        </div>
        {/* </section> */}
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature-card">
            <i className="fas fa-briefcase"></i>
            <h3>Top Companies</h3>
            <p>Get hired by leading companies in various industries.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-search"></i>
            <h3>Advanced Search</h3>
            <p>Find the perfect job using our smart search filters.</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-users"></i>
            <h3>Network & Grow</h3>
            <p>Connect with professionals and expand your career network.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <p>
              “I landed my dream job in just two weeks! The process was smooth
              and the job suggestions were on point.”
            </p>
            <h4>— Sarah W., Product Manager</h4>
          </div>
          <div className="testimonial-card">
            <p>
              “The best job portal I've ever used! The platform is easy to
              navigate, and the job recommendations are spot on.”
            </p>
            <h4>— John D., Software Engineer</h4>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default WelcomePage;
