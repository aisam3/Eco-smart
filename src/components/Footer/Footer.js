import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer-map">
        <iframe
          title="Eco Smart HVAC Solutions Location"
          src="https://www.google.com/maps?q=11090+Wainwright+Pl,+Manassas,+VA+20109&output=embed"
          width="100%"
          height="400"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <footer className="footer">
        <div className="container">
        <div className="grid footer-grid">
            <div className="footer-col">
               <div className="footer-logo">
                  <div className="logo-icon">
                    <span className="ice">❄️</span>
                    <span className="fire">🔥</span>
                  </div>
                  <div className="logo-text">
                     <h2>ECO SMART</h2>
                     <span>HVAC SOLUTIONS L.L.C</span>
                  </div>
               </div>
               <p className="footer-about">
                  Trusted HVAC experts in Virginia, providing dependable and cost-effective heating and cooling solutions for residential and commercial spaces.
               </p>
            </div>

            <div className="footer-col">
               <h3>Get In Touch</h3>
               <ul className="footer-contact">
                  <li>
                    <a href="tel:7038326339" className="flex items-center" style={{gap: '12px', color: 'inherit'}}>
                      <Phone size={18} /> <span>703-832-6339</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:Ecosmarthvacsolutions@gmail.com" className="flex items-center" style={{gap: '12px', color: 'inherit'}}>
                      <Mail size={18} /> <span>Ecosmarthvacsolutions@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://maps.google.com/?q=11090+wainwright+Pl,+Manassas,+VA+20109" target="_blank" rel="noopener noreferrer" className="flex items-center" style={{gap: '12px', color: 'inherit'}}>
                      <MapPin size={18} /> <span>11090 wainwright Pl Manassas 20109 VA</span>
                    </a>
                  </li>
               </ul>
            </div>

            <div className="footer-col">
               <h3>Our Services</h3>
               <ul className="footer-links">
                  <li>Installation & Replacement</li>
                  <li>Repair & Troubleshooting</li>
                  <li>Maintenance & Inspections</li>
                  <li>Ventilation & Air Quality</li>
               </ul>
            </div>
         </div>

         <div className="footer-bottom text-center">
            <p>© {new Date().getFullYear()} Eco Smart HVAC Solutions L.L.C. All rights reserved.</p>
         </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
