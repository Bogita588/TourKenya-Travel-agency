import React from 'react';
import './Listings.css';
import Listing1 from './Listing1.png';
import Listing2 from './Listing2.png';
import Listing3 from './Listing3.png';
import Listing4 from './Listing4.png';
import Listing5 from './Listing5.png';
import Listing6 from './Listing6.png';

const Listings = () => {
  const listingsData = [
    { id: 1, image: Listing1, place: 'Beach House', price: '$200/night' },
    { id: 2, image: Listing2, place: 'Mountain Cabin', price: '$150/night' },
    { id: 3, image: Listing3, place: 'City Apartment', price: '$100/night' },
    { id: 4, image: Listing4, place: 'Lake Cottage', price: '$180/night' },
    { id: 5, image: Listing5, place: 'Rural Farmhouse', price: '$120/night' },
    { id: 6, image: Listing6, place: 'Ski Chalet', price: '$250/night' },
  ];

  const handleLearnMoreClick = (place) => {
    // Handle Learn More button click, e.g., navigate to property details page
    console.log(`Learn More clicked for ${place}`);
  };

  return (
    <div className="listings">
      <h2>OUR BEST TOURS</h2>
      <div className="listings-grid">
        {listingsData.map(listing => (
          <div key={listing.id} className="listing">
            <img src={listing.image} alt={listing.place} className="listing-image" />
            <div className="listing-overlay">
              <button className="learn-more-button" onClick={() => handleLearnMoreClick(listing.place)}>
                Learn More
              </button>
            </div>
            <div className="place">{listing.place}</div>
            <div className="price">{listing.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listings;
