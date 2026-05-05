import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <section className="contact-header text-center fade-in">
          <span className="page-label">Contact Us</span>
          <h1 className="main-headline">Get in Touch with Virginia's Trusted HVAC Experts</h1>
          <h2 className="sub-headline">Eco Smart HVAC Solutions Corporation – Available 24/7 For Emergencies</h2>
        </section>

        <ContactUs />
        
        <section className="areas-served section-padding text-center fade-in">
           <div className="container">
              <h3 className="section-title">Areas We Serve</h3>
              <p className="description-text">We proudly serve residential and commercial clients across Virginia, delivering dependable HVAC solutions wherever you need us.</p>
           </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
