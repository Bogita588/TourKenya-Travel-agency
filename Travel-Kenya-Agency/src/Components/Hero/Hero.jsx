import React, { useState, useEffect } from 'react';
import './Hero.css';
import intern from './intern.jpg';



const Hero = () => {
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const backgrounds = [
    `url(${intern})`,
    
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 10000); // Change background every 10 seconds

    return () => clearInterval(interval);
  }, []); // Run once on component mount

  const heroStyle = {
    backgroundImage: backgrounds[currentBackgroundIndex]
  };

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Welcome to Our Travel Agency</h1>
          <p>Our travel agency is ready to offer you an exciting vacation 
            that is designed to fit your own needs and wishes. Whether it’s 
            an exotic cruise or a trip to your favorite resort, you will surely have the best experience.
            Book your dream vacation now!</p>
          <button className="cta-button">Book Now</button>
        </div>
        <div className="hero-form">
          <h2>Find Your Tour</h2>
          <form className="flight-search-form">
            <input type="text" placeholder="From" />
            <input type="text" placeholder="To" />
            <input type="date" placeholder="Depart Date" />
            <input type="number" placeholder="Duration of Stay (in days)" />
            <button type="submit">Search Flights</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;
