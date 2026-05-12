import React from 'react';
import './Map.css';

const Map = () => {
  const address = "11090 wainwright Pl Manassas 20109 VA";
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="map-section">
      <div className="map-container">
        <iframe
          title="Eco Smart HVAC Location"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={mapUrl}
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
