import React from 'react';
import laserImg from '../assets/laser.jpeg';

const FeaturedCarousel = () => {
  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <img 
          src={laserImg} 
          alt="Laser Cut Invitations" 
          className="carousel-image"
        />
        <button className="carousel-nav carousel-prev">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="carousel-nav carousel-next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default FeaturedCarousel;
