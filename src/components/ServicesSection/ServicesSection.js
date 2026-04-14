import React from 'react';
import { Wrench, ShieldCheck, Zap, Wind, Settings } from 'lucide-react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      icon: <Settings size={40} />,
      title: "Installation & Replacement",
      desc: "Expert setup of air conditioning units, heating systems, and smart integrations for maximum efficiency.",
      link: "/services"
    },
    {
      icon: <Wrench size={40} />,
      title: "Repair & Troubleshooting",
      desc: "Fast diagnosis and 24/7 emergency repairs to restore your comfort during unexpected breakdowns.",
      link: "/services"
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Maintenance & Inspections",
      desc: "Routine servicing and preventive plans to extend your system's life and reduce breakdown risks.",
      link: "/services"
    },
    {
      icon: <Wind size={40} />,
      title: "Ventilation & Air Quality",
      desc: "Breathe cleaner air with our air quality testing, ductwork repair, and advanced ventilation solutions.",
      link: "/services"
    },
    {
      icon: <Zap size={40} />,
      title: "Efficiency Upgrades",
      desc: "Specialized thermostat installation and energy-efficient solutions to lower your monthly utility bills.",
      link: "/services"
    }
  ];

  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Common HVAC Services</h2>
          <p className="section-subtitle">Complete HVAC Services You Can Trust</p>
        </div>
        <div className="grid service-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card shadow fade-in">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href={service.link} className="btn btn-dark">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;