// ServicesSection.jsx

import React from 'react';
import { FaPlane, FaShip, FaHotel, FaSun } from 'react-icons/fa';
import './Services.css'; // Import CSS for styling

const Services = () => {
  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service">
          <FaPlane className="service-icon" />
          <h3>Air Tickets</h3>
          <p>We offer convenient and affordable air ticket booking services for your travel needs.</p>
        </div>
        <div className="service">
          <FaShip className="service-icon" />
          <h3>Voyages & Cruises</h3>
          <p>Explore the seas with our exciting voyages and luxurious cruise packages.</p>
        </div>
        <div className="service">
          <FaHotel className="service-icon" />
          <h3>Hotel Bookings</h3>
          <p>Find the perfect accommodations for your trip with our comprehensive hotel booking options.</p>
        </div>
        <div className="service">
          <FaSun className="service-icon" />
          <h3>Tailored Summer Tours</h3>
          <p>Experience unforgettable summer adventures with our customized tour packages.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
