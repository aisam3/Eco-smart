import React from 'react';
import './AboutUs.css';
import { CheckCircle2, Award, Users } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="about-us section-padding" id="about">
      <div className="container">
        <div className="grid about-grid">
          <div className="about-image-side fade-in">
             <img src="/Assets/WhatsApp Image 2026-04-04 at 2.41.16 AM.jpeg" alt="HVAC System Installation" />
             <div className="about-experience shadow">
                <h3>Reliable</h3>
                <span>HVAC Experts</span>
             </div>
          </div>

          <div className="about-content-side fade-in">
             <h4>Your Trusted Partner for Year-Round Comfort</h4>
             <p>
                At Eco Smart HVAC Solutions, we are dedicated to providing high-quality, cost-effective heating and cooling solutions across Virginia. Our mission is to ensure your home or business remains comfortable, regardless of the season.
             </p>
             <p>
                Whether you're facing a sudden AC breakdown or planning a full HVAC system upgrade, we offer energy-efficient solutions that ensure year-round comfort—keeping your home or business cool in the summer and warm during the winter months.
             </p>
             <ul className="about-list">
               <li className="list-item">
                  <CheckCircle2 color="var(--primary)" size={18} />
                  <span>Licensed and Certified Technicians</span>
               </li>
                <li className="list-item">
                  <CheckCircle2 color="var(--primary)" size={18} />
                  <span>Emergency 24/7 HVAC Services</span>
               </li>
               <li className="list-item">
                  <CheckCircle2 color="var(--primary)" size={18} />
                  <span>Residential and Commercial Expertise</span>
               </li>
             </ul>

             <div className="about-badges flex">
                <div className="badge-item"><Award size={20} /> High-Quality Results</div>
                <div className="badge-item"><Users size={20} /> Virginia Local</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
