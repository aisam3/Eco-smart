import React from 'react';
import { PhoneCall, Mail, MapPin } from 'lucide-react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-us section-padding" id="contact">
      <div className="container text-center fade-in">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
           Need Fast, Reliable HVAC Service? We’re Here to Help. Experience the difference with Eco Smart HVAC Solutions LLC – where quality meets reliability.
        </p>

        <div className="grid contact-grid">
           <div className="contact-card shadow">
              <div className="contact-icon"><PhoneCall size={35} /></div>
              <h3>Call Us</h3>
              <p>703-832-6339</p>
              <a href="tel:7038326339" className="btn btn-primary">Call Now</a>
           </div>

           <div className="contact-card shadow">
              <div className="contact-icon"><Mail size={35} /></div>
              <h3>Email Us</h3>
              <p>Ecosmarthvacsolutions@gmail.com</p>
              <a href="mailto:Ecosmarthvacsolutions@gmail.com" className="btn btn-secondary">Send Mail</a>
           </div>

           <div className="contact-card shadow">
              <div className="contact-icon"><MapPin size={35} /></div>
              <h3>Our Location</h3>
              <p>11090 wainwright Pl Manassas 20109 VA</p>
              <a href="https://maps.google.com/?q=11090+wainwright+Pl+Manassas+20109+VA" target="_blank" rel="noopener noreferrer" className="btn btn-dark">View Map</a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
