import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container fade-in">
        <div className="hero-content">
          <h1 className="hero-title">
            Trusted HVAC Experts in Virginia
            <span className="subtitle">Reliable Heating & Cooling Solutions</span>
          </h1>

          <p className="hero-intro">
            At Eco Smart HVAC Solutions, we provide dependable, cost-effective HVAC services tailored to meet your comfort needs across Virginia. From fast and efficient repairs to complete air conditioning installations and heating system maintenance, our experienced and certified technicians are committed to delivering high-quality results every time.
          </p>
          
          <div className="hero-images-row">
            <img src="/Assets/hero-unit.jpeg" alt="HVAC Unit" />
            <img src="/Assets/hero-tech.jpeg" alt="Technician working" />
            <img src="/Assets/hero-gauge.jpeg" alt="Digital Gauge" />
          </div>

          <div className="hero-text-container">
            <p className="hero-description">
              Whether you're facing a sudden AC breakdown or planning a full HVAC system upgrade, we offer energy-efficient solutions that ensure year-round comfort—keeping your home or business cool in the summer and warm during the winter months.
            </p>
            <p className="hero-description highlighted">
              Get in touch today for expert HVAC services that prioritize your comfort, efficiency, and peace of mind.
            </p>
          </div>

          <div className="hero-btns">
            <a href="tel:5714619548" className="btn btn-primary">Call 571-461-9548</a>
            <Link to="/services" className="btn btn-outline">Our Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
