import React from 'react';
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
import './Wedding.css';

const Wedding = ({ onNavigateHome }) => {
  const weddingCards = [
    { id: 1, image: card1, caption: 'hindu wedding cards' },
    { id: 2, image: card2, caption: 'christian wedding cards' },
    { id: 3, image: card3, caption: 'muslim wedding cards' },
    { id: 4, image: card4, caption: 'sikh wedding cards' },
    { id: 5, image: card5, caption: 'interfaith wedding cards' },
    { id: 6, image: card6, caption: 'exclusive wedding cards' },
    { id: 7, image: card7, caption: 'traditional wedding cards' },
    { id: 8, image: card8, caption: 'all wedding cards' },
    { id: 9, image: card9, caption: 'new style wedding cards' },
    { id: 10, image: card10, caption: 'envelope wedding cards' },
    { id: 11, image: card11, caption: 'elegant faith wedding cards' },
    { id: 12, image: card12, caption: 'nepali wedding cards' },
  ];

  return (
    <div className="wedding-page">
      <Navbar onViewChange={onNavigateHome} />
      
      <header className="wedding-header">
        <h1>Wedding Invitation Collections</h1>
        <p>Explore our wide range of exquisite wedding card designs tailored for every tradition and style.</p>
      </header>

      <main className="wedding-main">
        <div className="wedding-grid">
          {weddingCards.map((card) => (
            <div key={card.id} className="wedding-card-item">
              <div className="wedding-card-img-wrapper">
                <img src={card.image} alt={card.caption} />
              </div>
              <h3 className="wedding-card-caption">{card.caption}</h3>
            </div>
          ))}
        </div>
      </main>

      <Footer onViewChange={onNavigateHome} />
    </div>
  );
};

export default Wedding;
