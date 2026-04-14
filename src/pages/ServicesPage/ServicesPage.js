import React from 'react';
import './ServicesPage.css';
import { Settings, Wrench, Wind, Zap, ShieldCheck } from 'lucide-react';

const ServicesPage = () => {
  const allServices = [
    {
      icon: <Settings size={50} />,
      title: "Installation & System Replacement",
      desc: "Whether you’re building a new space or upgrading an outdated system, we offer expert HVAC installation services. From air conditioning units to complete heating systems and smart HVAC integrations, we ensure your system is installed for maximum performance and efficiency.",
      img: "/Assets/WhatsApp Image 2026-04-04 at 2.33.25 AM.jpeg"
    },
    {
      icon: <Wrench size={50} />,
      title: "HVAC Repair & Troubleshooting",
      desc: "Experiencing issues with your heating or cooling system? Our team quickly diagnoses and resolves problems to restore comfort. We handle everything from minor repairs to complex system faults, including emergency HVAC repairs with 24/7 support.",
      img: "/Assets/hero-tech.jpeg"
    },
    {
       icon: <ShieldCheck size={50} />,
       title: "Maintenance & System Inspections",
       desc: "Regular maintenance is key to extending the life of your HVAC system. We provide thorough inspections, routine servicing, and preventive maintenance plans to keep your system running efficiently and reduce the risk of unexpected breakdowns.",
       img: "/Assets/WhatsApp Image 2026-04-04 at 2.41.15 AM.jpeg"
    },
    {
       icon: <Wind size={50} />,
       title: "Ventilation & Indoor Air Quality",
       desc: "Breathe cleaner, healthier air with our ventilation and air quality services. We offer ductwork installation and repair, ventilation system services, and indoor air quality testing to improve airflow and indoor comfort.",
       img: "/Assets/WhatsApp Image 2026-04-04 at 2.41.19 AM (3).jpeg"
    },
    {
       icon: <Zap size={50} />,
       title: "Upgrades & Energy Efficiency",
       desc: "Looking to reduce energy costs? We specialize in system upgrades, thermostat installation, and energy-efficient solutions that enhance performance while lowering your utility bills.",
       img: "/Assets/WhatsApp Image 2026-04-04 at 2.41.19 AM.jpeg"
    }
  ];

  return (
    <div className="services-page">
       <section className="services-hero">
          <div className="container">
             <h1 className="fade-in">Complete HVAC Services You Can Trust</h1>
             <p className="fade-in">Reliable, Efficient & Available When You Need Them Most</p>
             <p className="fade-in subtitle-strong">Eco Smart HVAC Solutions LLC – Your Trusted Partner for Residential and Commercial HVAC Solutions</p>
          </div>
       </section>

       <section className="services-list section-padding">
          <div className="container">
             <div className="services-full-list">
                {allServices.map((service, index) => (
                  <div key={index} className={`service-detail-row fade-in ${index % 2 !== 0 ? 'reverse' : ''}`}>
                     <div className="service-detail-image">
                        <img src={service.img} alt={service.title} />
                     </div>
                     <div className="service-detail-content">
                        <div className="service-detail-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                        <a href="tel:7038326339" className="btn btn-primary">Schedule Service</a>
                     </div>
                  </div>
                ))}
             </div>
          </div>
       </section>

       <section className="cta-banner section-padding text-center fade-in">
          <div className="container">
             <h2>Ready to improve your home's comfort?</h2>
             <p>Eco Smart HVAC Solutions LLC – Your Trusted Partner for Residential and Commercial HVAC Solutions</p>
             <a href="tel:7038326339" className="btn btn-primary btn-large">Call 703-832-6339</a>
          </div>
       </section>
    </div>
  );
};

export default ServicesPage;
