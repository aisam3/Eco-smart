import React from 'react';
import Hero from '../../components/Hero/Hero';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import AboutUs from '../../components/AboutUs/AboutUs';
import ContactUs from '../../components/ContactUs/ContactUs';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ServicesSection />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default Home;
