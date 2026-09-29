import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.jpg';
import card6 from '../assets/card6.png';
import card7 from '../assets/card7.png';
import card8 from '../assets/card8.png';
import card9 from '../assets/card9.png';
import card10 from '../assets/card10.png';
import card11 from '../assets/card11.png';
import card12 from '../assets/card12.png';
import './Hindu.css';

const Hindu = ({ onViewChange }) => {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const hinduCards = [
    { id: 1, image: card1, caption: 'The blue Wedding Cards', price: 'Rs. 72.25' },
    { id: 2, image: card2, caption: 'Ganesha Wedding Cards', price: 'Rs. 25.25' },
    { id: 3, image: card3, caption: 'Wedding Cards Favour Box', price: 'Rs. 39.45' },
    { id: 4, image: card4, caption: 'Theme Wedding Cards', price: 'Rs. 30.00' },
    { id: 5, image: card5, caption: 'Vintage Wedding Cards', price: 'Rs. 30.15' },
    { id: 6, image: card6, caption: 'Elegant peacock WeddingCards', price: 'Rs. 15.00' },
    { id: 7, image: card7, caption: 'Unique Wedding Cards', price: 'Rs. 22.50' },
    { id: 8, image: card8, caption: 'Wardrope Wedding Cards', price: 'Rs. 59.75' },
    { id: 9, image: card9, caption: 'Editable Wedding Cards', price: 'Rs. 35.55' },
    { id: 10, image: card10, caption: 'Traditional Wedding Cards', price: 'Rs. 25.00' },
    { id: 11, image: card11, caption: 'Royal Scroll Wedding Cards', price: 'Rs. 75.00' },
    { id: 12, image: card12, caption: 'Gate Fold Wedding Cards', price: 'Rs. 43.20' },
  ];

  return (
    <div className="hindu-page">
      <Navbar onViewChange={onViewChange} />
      
      <header className="hindu-header">
        <h1>HINDU WEDDING CARDS</h1>
      </header>

      <main className="hindu-main">
        <div className="hindu-grid">
          {hinduCards.map((card) => (
            <div key={card.id} className="hindu-card-item">
              <div className="hindu-card-img-container">
                <img src={card.image} alt={card.caption} />
                <button 
                  className={`heart-btn ${favorites[card.id] ? 'active' : ''}`}
                  onClick={() => toggleFavorite(card.id)}
                  aria-label="Favorite"
                >
                  <svg viewBox="0 0 24 24" fill={favorites[card.id] ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="hindu-card-info">
                <h3 className="hindu-card-caption">{card.caption}</h3>
                <p className="hindu-card-price">{card.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer onViewChange={onViewChange} />
    </div>
  );
};

export default Hindu;
