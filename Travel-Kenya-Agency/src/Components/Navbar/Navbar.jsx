// Navigation.js

import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import Sealine from './Sealine.png';

const Navbar = () => {
  return (
    <div className="navbar">
       <div className="logo">
        <img src={Sealine} alt="Logo" />
      </div>
      <div className="nav-pages">
        <a href="/">Home</a>
        <a href="/destinations">Destinations</a>
        <a href="/search">Search</a>
        {/* Add more navigation links as needed */}
      </div>
      <div className="book-tour">
        <button>Book a Tour</button>
      </div>
    </div>
  );
}

export default Navbar;
