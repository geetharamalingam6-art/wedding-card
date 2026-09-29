import React from 'react';
import hinduImg from '../assets/hindu.png';
import luxuryImg from '../assets/luxury.png';
import floralImg from '../assets/floral.png';
import beachImg from '../assets/beach.png';
import birdsImg from '../assets/birds.png';
import palaceImg from '../assets/palace.png';
import simple1Img from '../assets/simple1.png';
import simple2Img from '../assets/simple2.png';
import simple3Img from '../assets/simple3.png';
import simple4Img from '../assets/simple4.png';
import simple5Img from '../assets/simple5.png';
import simple6Img from '../assets/simple6.png';
import offer1Img from '../assets/offer1.jpeg';
import offer2Img from '../assets/offer2.png';
import './InvitationCards.css';

const InvitationCards = () => {
  const exclusiveCards = [
    { id: 1, image: hinduImg, alt: 'Classic Invitation', caption: 'Hindu wedding cards' },
    { id: 2, image: luxuryImg, alt: 'Gold Foil Invitation', caption: 'Luxury cards' },
    { id: 3, image: floralImg, alt: 'Royal Blue Invitation', caption: 'Floral wedding cards' },
  ];

  const themeCards = [
    { id: 1, image: beachImg, alt: 'Beach Theme', caption: 'Beach theme cards' },
    { id: 2, image: birdsImg, alt: 'Birds Theme', caption: 'Birds theme cards' },
    { id: 3, image: palaceImg, alt: 'Palace Theme', caption: 'Palace theme cards' },
  ];

  const simpleCards = [
    { id: 1, image: simple1Img, name: 'Red invite card with bride & groom name', price: 'Rs. 10.25' },
    { id: 2, image: simple2Img, name: 'Floral invite card with couple names', price: 'Rs. 10.25' },
    { id: 3, image: simple3Img, name: 'Gold traditional invite card', price: 'Rs. 10.25' },
    { id: 4, image: simple4Img, name: 'Minimalist white invite card', price: 'Rs. 10.25' },
    { id: 5, image: simple5Img, name: 'Royal vintage invite card', price: 'Rs. 10.25' },
    { id: 6, image: simple6Img, name: 'Modern elegant invite card', price: 'Rs. 10.25' },
  ];

  return (
    <>
      <section className="cards-section">
        <h2 className="cards-title">Unique & Exclusive Invitation Cards</h2>
        <p className="cards-subtitle">Because Each Wedding is Truly Unique and Memorable</p>
        
        <div className="cards-grid">
          {exclusiveCards.map(card => (
            <div key={card.id} className="card-item">
              <img 
                src={card.image} 
                alt={card.alt} 
              />
              <h3 className="card-caption">{card.caption}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="cards-section" style={{ backgroundColor: '#E6E6FA' }}>
        <h2 className="cards-title">Theme Based invitation</h2>
        <p className="cards-subtitle">Theme Based invitation</p>
        
        <div className="cards-grid">
          {themeCards.map(card => (
            <div key={card.id} className="card-item" style={{ background: '#fff' }}>
              <img 
                src={card.image} 
                alt={card.alt} 
              />
              <h3 className="card-caption">{card.caption}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Full width offer banner image 1 */}
      <section className="offer-banner-section">
        <img src={offer1Img} alt="Special Offer 1" className="full-width-offer-img" />
      </section>

      <section className="cards-section" style={{ backgroundColor: '#fff' }}>
        <h2 className="cards-title">Simple and Affordable Wedding Cards</h2>
        <p className="cards-subtitle">Beautiful designs at pocket-friendly prices</p>
        
        <div className="cards-grid">
          {simpleCards.map(card => (
            <div key={card.id} className="card-item" style={{ background: '#fcfcfc' }}>
              <img 
                src={card.image} 
                alt={card.name} 
              />
              <div className="card-info">
                <h3 className="card-name">{card.name}</h3>
                <div className="card-footer">
                  <span className="card-price">{card.price}</span>
                  <div className="card-actions">
                    <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full width offer2 banner image */}
      <section className="offer-banner-section">
        <img src={offer2Img} alt="Special Offer 2" className="full-width-offer-img" />
      </section>
    </>
  );
};

export default InvitationCards;
