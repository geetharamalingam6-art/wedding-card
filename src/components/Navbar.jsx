import React, { useState } from 'react';
import logoImg from '../assets/logo.jpeg';
import NavDropdown from './NavDropdown';

const Navbar = ({ onViewChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const weddingInvitationItems = [
    'hindu wedding cards',
    'christian wedding cards',
    'muslim wedding cards',
    'exclusive cards',
  ];

  const specialOccasionsItems = [
    'Birthday Invitations',
    'Puperty Cards',
    'Luxury Invitations',
    'Ear Boring Cards',
    'Engagement Cards',
    'House Warming',
    'Anniversary Cards',
  ];

  const themeCardsItems = [
    'beach theme cards',
    'bride theme cards',
    'box cards',
    'singles sheet cards',
  ];

  const scrollInvitationItems = [
    'small size scroll',
    'box scroll',
    'only scroll',
    'high end scroll',
  ];

  const digitalInvitationItems = [
    'whatapp cards',
    'save the date cards',
  ];

  return (
    <nav className="navbar">
      <div className="nav-top" style={{ alignItems: 'flex-start' }}>
        <div className="nav-logo" style={{ marginTop: '0px', cursor: 'pointer' }} onClick={() => onViewChange && onViewChange('home')}>
          <img src={logoImg} alt="Logo" style={{ height: '160px', width: 'auto', objectFit: 'contain' }} />
        </div>
        
        <div className="nav-right-group">
          <div className="nav-search" onClick={() => onViewChange && onViewChange('search')} style={{ cursor: 'pointer' }}>
            <input 
              type="text" 
              placeholder="Search..." 
              onFocus={() => onViewChange && onViewChange('search')}
              onChange={() => onViewChange && onViewChange('search')}
            />
            <svg className="nav-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={() => onViewChange && onViewChange('search')}>
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          <div className="nav-actions">
            {/* Account Icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={() => onViewChange && onViewChange('login')} style={{ cursor: 'pointer' }}>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            {/* Heart Icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" onClick={() => onViewChange && onViewChange('wishlist')} style={{ cursor: 'pointer' }}>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            {/* Cart Icon */}
            <div className="cart-icon-wrapper" onClick={() => onViewChange && onViewChange('cart')} style={{ cursor: 'pointer', position: 'relative', display: 'inline-block' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '32px', height: '32px' }}>
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className="cart-badge">1</span>
            </div>
          </div>
        </div>
        
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </button>
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <li><a href="#home" onClick={(e) => { e.preventDefault(); onViewChange && onViewChange('home'); }}>Home</a></li>
        <li>
          <NavDropdown 
            label="Wedding Invitation" 
            items={weddingInvitationItems} 
            onSelectItem={(item) => {
              if (item === 'hindu wedding cards') {
                onViewChange && onViewChange('hindu');
              } else {
                onViewChange && onViewChange('wedding');
              }
            }} 
          />
        </li>
        <li><NavDropdown label="Special occasions" items={specialOccasionsItems} /></li>
        <li><NavDropdown label="Theme Cards" items={themeCardsItems} /></li>
        <li><NavDropdown label="Scroll Invitation" items={scrollInvitationItems} /></li>
        <li><NavDropdown label="Digital Invitation" items={digitalInvitationItems} /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
