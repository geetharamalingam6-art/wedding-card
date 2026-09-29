import React from 'react';
import logoImg from '../assets/logo.jpeg';

const Hero = ({ onViewChange }) => {
  return (
    <section className="hero">
      <div className="hero-card">
        <div className="hero-logo-watermark">
          <img src={logoImg} alt="Watermark Logo" />
        </div>
        <div className="hero-content-inner">
          <h1>Your Love Story Begins Here</h1>
          <p>
            Create stunning wedding invitations that capture the essence of your special day. 
            Elegant designs, heartfelt words, and everything you need to make your first impression unforgettable.
          </p>
          <button className="btn-primary" onClick={() => onViewChange && onViewChange('wedding')}>Get your style</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
