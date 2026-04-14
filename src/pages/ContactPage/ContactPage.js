import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
       <section className="contact-hero">
          <div className="container">
             <h1 className="fade-in">Get in Touch with Eco Smart HVAC Solutions LLC</h1>
             <p className="fade-in">Your Trusted HVAC Experts in Virginia. We’re Here to Help.</p>
          </div>
       </section>
       <ContactUs />
       <section className="areas-served section-padding text-center">
          <div className="container">
             <h3>Areas We Serve</h3>
             <p>We proudly serve residential and commercial clients across Virginia, delivering dependable HVAC solutions wherever you need us.</p>
             <div className="map-placeholder shadow">
                <iframe 
                  title="Eco Smart HVAC Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.882141575465!2d-77.5100!3d38.7500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQ1JzAwLjAiTiA3N8KwMzAnMzYuMCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0, borderRadius: '15px' }} 
                  allowFullScreen="" 
                  loading="lazy">
                </iframe>
             </div>
          </div>
       </section>
    </div>
  );
};

export default ContactPage;
