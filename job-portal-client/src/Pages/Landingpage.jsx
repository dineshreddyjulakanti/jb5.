import React , { useEffect } from "react";
import './LandingPage.css';
import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { RouterProvider } from "react-router-dom";
import router from "../Router/Router.jsx";
// import styles from "./style.module.css";



const Landingpage = () => {
  const navigate = useNavigate();

  const handleClick=()=>{
    navigate("/duplicate");

  }

  return (
    <>
      <div className="official-landing-page">
      <nav className="official-nav">
        <div className="logo">Official Portal</div>
        <div className="nav-links">
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <header className="official-hero">
        <h1>Welcome to the Official Portal</h1>
        <p>Your gateway to professional services and information.</p>

       <button  className="cta-button" onClick={handleClick}>get started</button>
      </header>
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>We are dedicated to providing our users with the most accurate and up-to-date information and services.</p>
      </section>
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="service-items">
          <div className="service-item">
            <h3>Service One</h3>
            <p>A brief description of this service and how it benefits the user.</p>
          </div>
          <div className="service-item">
            <h3>Service Two</h3>
            <p>A brief description of this service and what it entails.</p>
          </div>
          <div className="service-item">
            <h3>Service Three</h3>
            <p>A brief description of this service to attract potential users.</p>
          </div>
        </div>
      </section>
      <section id="testimonials" className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          <p>"This portal has significantly improved the way we access services. Highly recommend!"</p>
          <cite>- User Name</cite>
        </div>
      </section>
      <footer className="official-footer">
        <p>© 2024 Official Portal. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default Landingpage;
