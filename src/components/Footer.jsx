import React from 'react';
import logoImg from '../assets/logo.jpeg';

const Footer = ({ onViewChange }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col footer-brand">
          <div className="footer-logo" style={{ cursor: 'pointer' }} onClick={() => onViewChange && onViewChange('home')}>
            <img src={logoImg} alt="Logo" />
          </div>
          <p className="footer-brand-text">Largest Wedding Cards Collections in Chennai</p>
          <div className="footer-social">
            <span className="social-label">Follow us with</span>
            <div className="social-icons">
              {/* Instagram */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              {/* Facebook */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              {/* YouTube */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor"></polygon></svg>
              {/* WhatsApp */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h3>Information</h3>
          <ul>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); onViewChange && onViewChange('about'); }}>About Us</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); onViewChange && onViewChange('contact'); }}>Contact Us</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); onViewChange && onViewChange('faq'); }}>FAQ</a></li>
            <li><a href="#how-to-order" onClick={(e) => { e.preventDefault(); onViewChange && onViewChange('order'); }}>How to order wedding invitation online?</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Quick Access</h3>
          <ul>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); onViewChange && onViewChange('home'); }}>Home</a></li>
            <li><a href="#wedding-cards" onClick={(e) => { e.preventDefault(); onViewChange && onViewChange('wedding'); }}>Wedding Cards</a></li>
            <li><a href="#hindu-cards" onClick={(e) => { e.preventDefault(); onViewChange && onViewChange('hindu'); }}>Hindu Wedding Cards</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Us</h3>
          <p className="contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            +91 9876543210
          </p>
          <p className="contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            wedtype@weddingcards.com
          </p>
          <p className="operating-hours">
            Operating hours: 10.00Am to 10.00Pm<br />
            Monday - Sunday
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; Wed knot craft India Private Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
