import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Top Section */}
        <div className="about-top-flex">
          <div className="about-top-left">
            <span className="page-label-minimal">About us page</span>
            <h1 className="about-main-title">Virginia’s Trusted HVAC Professionals – Experience. Integrity. Comfort.</h1>
            <h2 className="about-sub-title">Locally Owned, Professionally Certified – Eco Smart HVAC Solutions</h2>
            <p className="about-intro-text">
              At <strong>Eco Smart HVAC Solutions Corporation</strong>, customer satisfaction is our top priority. We 
              pride ourselves on delivering exceptional service, transparent pricing, and 
              unparalleled craftsmanship. Trust us to handle all your mechanical service needs 
              with professionalism, integrity, and a commitment to excellence.
            </p>
          </div>
          <div className="orange-box">
            <ul className="check-list">
              <li><span>✓</span> Licensed & Insured</li>
              <li><span>✓</span> Financing Availability</li>
              <li><span>✓</span> Affordability</li>
              <li><span>✓</span> Expertise</li>
              <li><span>✓</span> Reliability</li>
              <li><span>✓</span> Quality</li>
            </ul>
          </div>
        </div>

        {/* Middle Section */}
        <div className="about-bottom-flex">
          <div className="about-image-container">
            <img src="/Assets/hero-tech.jpeg" alt="HVAC Technicians" className="main-about-img" />
            <div className="about-image-caption">
              <p className="why-description">
                As a <strong>certified Trane dealer</strong> and <strong>NATE-certified HVAC company</strong>, we provide industry-leading 
                air conditioning installation, furnace repair, and HVAC system upgrades backed by trusted 
                brands and proven expertise. We also offer flexible HVAC financing options, making it easier 
                to invest in your indoor comfort without financial stress.
              </p>
              <p className="why-description">
                When you choose Eco Smart HVAC Solutions, you’re partnering with a team that values 
                integrity, professionalism, and long-term relationships. <strong>Your comfort is our priority.</strong>
              </p>
            </div>
          </div>
          <div className="about-why-choose">
            <h2 className="why-title">Why Choose Eco Smart HVAC Solutions?</h2>
            <p className="why-description">
              At <strong>Eco Smart HVAC Solutions Corporation</strong>, we bring over 15 years of HVAC experience to 
              homes and businesses throughout Virginia. Led by John, a seasoned HVAC professional, our team is committed to delivering top-rated 
              heating and air conditioning services with a focus on quality, reliability, and customer satisfaction.
            </p>
            <p className="sub-proud">We're proud to be:</p>
            <div className="orange-bars-container">
              <div className="orange-bar">
                <span className="bar-icon">🏆</span>
                A+ Rated by the Better Business Bureau (BBB)
              </div>
              <div className="orange-bar">
                <span className="bar-icon">🏢</span>
                Members of the Virginia Chamber of Commerce
              </div>
              <div className="orange-bar">
                <span className="bar-icon">🤝</span>
                Members of the Local Hispanic Chamber of Commerce
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
