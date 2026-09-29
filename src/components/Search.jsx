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
import './Search.css';

const Search = ({ onViewChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [chips, setChips] = useState([
    'Wedding Cards',
    'Scroll Cards',
    'Theme Cards',
    'Birthday Cards',
    'Engagement Cards',
  ]);

  const removeChip = (chipToRemove) => {
    setChips(chips.filter(chip => chip !== chipToRemove));
  };

  const ideasForYou = [
    { id: 1, title: 'Hindu wedding Card', image: card1, bg: '#F7C584' },
    { id: 2, title: 'Simple wedding Card', image: card2, bg: '#D4AC4D' },
    { id: 3, title: 'Muslim wedding Card', image: card3, bg: '#8C7A5B' },
    { id: 4, title: 'Scroll wedding Card', image: card4, bg: '#2980B9' },
    { id: 5, title: 'Luxury wedding Card', image: card5, bg: '#8E44AD' },
  ];

  const popularOnThis = [
    { id: 1, title: 'Post Theme Wedding Card', image: card6, bg: '#6B9080' },
    { id: 2, title: 'Scroll Wedding Card', image: card7, bg: '#A3B18A' },
    { id: 3, title: 'Theme Wedding Card', image: card8, bg: '#C5A880' },
    { id: 4, title: 'Customize Wedding Card', image: card9, bg: '#9E576B' },
    { id: 5, title: 'Laser Wedding Card', image: card10, bg: '#B08968' },
    { id: 6, title: 'Hindu Wedding Card', image: card11, bg: '#C98CA8' },
  ];

  const filteredIdeas = ideasForYou.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPopular = popularOnThis.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const hasResults = filteredIdeas.length > 0 || filteredPopular.length > 0;

  return (
    <div className="search-page">
      <Navbar onViewChange={onViewChange} />

      <div className="search-hero-section">
        <h1 className="search-main-heading">Everything You Need, to Plan your Dream Wedding</h1>
        <p className="search-sub-heading">Search for vendors, cards, ideas and real wedding stories and more!</p>

        <div className="search-bar-wrapper">
          <button className="search-all-btn">All</button>
          <input 
            type="text" 
            className="search-input-field" 
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="search-chips-container">
          {chips.map((chip) => (
            <div key={chip} className="search-chip">
              <span>{chip}</span>
              <button className="chip-close-btn" onClick={() => removeChip(chip)}>×</button>
            </div>
          ))}
        </div>
      </div>

      <main className="search-content-main">
        {!hasResults ? (
          <div className="no-results">No results found</div>
        ) : (
          <>
            {filteredIdeas.length > 0 && (
              <section className="search-section">
                <h2 className="section-category-title">Ideas for you</h2>
                <div className="ideas-grid">
                  {filteredIdeas.map((item) => (
                    <div 
                      key={item.id} 
                      className="idea-card"
                      style={{ '--card-bg': item.bg }}
                    >
                      <div className="idea-card-img">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="idea-card-text" style={{ backgroundColor: item.bg }}>
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {filteredPopular.length > 0 && (
              <section className="search-section">
                <h2 className="section-category-title">Popular on this</h2>
                <div className="popular-grid">
                  {filteredPopular.map((item) => (
                    <div 
                      key={item.id} 
                      className="popular-card"
                      style={{ '--card-bg': item.bg }}
                    >
                      <div className="popular-card-img">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="popular-card-text" style={{ backgroundColor: item.bg }}>
                        <h3>{item.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>

      <Footer onViewChange={onViewChange} />
    </div>
  );
};

export default Search;
