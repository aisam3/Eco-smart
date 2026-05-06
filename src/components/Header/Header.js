import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="main-header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container flex items-center justify-between">
          <div className="contact-info flex items-center">
            <div className="info-item">
              <Phone size={14} /> <span>571-461-9548</span>
            </div>
            <div className="info-item">
              <Clock size={14} /> <span>Available 24/7 For Emergencies</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar shadow">
        <div className="container flex items-center justify-between">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <span className="ice">❄️</span>
              <span className="fire">🔥</span>
            </div>
            <div className="logo-text">
              <h1>ECO SMART</h1>
              <span>HVAC SOLUTIONS</span>
            </div>
          </Link>

          <div className={`nav-links flex ${isOpen ? 'active' : ''}`}>
             <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
             <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT US</Link>
             <Link to="/services" onClick={() => setIsOpen(false)}>SERVICES</Link>
             <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link>
             <a href="tel:5714619548" className="btn btn-primary nav-btn">CALL NOW</a>
          </div>

          <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
