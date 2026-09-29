import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card9 from '../assets/card9.png';
import card10 from '../assets/card10.png';
import card11 from '../assets/card11.png';
import card12 from '../assets/card12.png';
import './Wishlist.css';

const Wishlist = ({ onViewChange }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [isLiked, setIsLiked] = useState(true);
  const [quantity, setQuantity] = useState(2);
  const [activeThumb, setActiveThumb] = useState(0);

  const product = {
    name: 'The blue Wedding Cards',
    price: 'Rs. 72.25',
    image: card1,
    sku: 'KSN0054'
  };

  const thumbs = [card1, card2, card3, card4];

  const relatedCards = [
    { id: 1, name: 'The blue Wedding Cards', price: 'Rs. 72.25', image: card1 },
    { id: 2, name: 'Ganesha Wedding Cards', price: 'Rs. 25.25', image: card2 },
    { id: 3, name: 'Wedding Cards Favour Box', price: 'Rs. 39.45', image: card3 },
    { id: 4, name: 'Theme Wedding Cards', price: 'Rs. 30.00', image: card4 },
    { id: 5, name: 'Editable Wedding Cards', price: 'Rs. 35.55', image: card9 },
    { id: 6, name: 'Traditional Wedding Cards', price: 'Rs. 25.00', image: card10 },
    { id: 7, name: 'Royal Scroll Wedding Cards', price: 'Rs. 75.00', image: card11 },
    { id: 8, name: 'Gate Fold Wedding Cards', price: 'Rs. 43.20', image: card12 },
  ];

  if (!isLiked && !showDetail) {
    return (
      <div className="wishlist-page">
        <Navbar onViewChange={onViewChange} />
        <main className="wishlist-main-container">
          <h1 className="wishlist-heading">Wishlist</h1>
          <div className="empty-wishlist">
            <h2>Your wishlist is empty</h2>
            <p>Browse our invitation cards and add your favorite designs.</p>
            <button className="continue-shopping-btn" onClick={() => onViewChange && onViewChange('home')}>
              Continue Shopping
            </button>
          </div>
        </main>
        <Footer onViewChange={onViewChange} />
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <Navbar onViewChange={onViewChange} />

      <main className="wishlist-main-container">
        <h1 className="wishlist-heading">Wishlist</h1>

        {!showDetail ? (
          <div className="wishlist-grid">
            <div className="wishlist-card-item" onClick={() => setShowDetail(true)}>
              <div className="wishlist-card-img-container">
                <img src={product.image} alt={product.name} />
                <button 
                  className="heart-btn active"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLiked(false);
                  }}
                  aria-label="Remove from Wishlist"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>
              <div className="wishlist-card-info">
                <h3 className="wishlist-card-caption">{product.name}</h3>
                <p className="wishlist-card-price">{product.price}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="wishlist-detail-view">
            <button className="back-to-wishlist-btn" onClick={() => setShowDetail(false)}>
              ← Back to Wishlist
            </button>
            <div className="product-detail-section">
              <div className="product-gallery">
                <div className="thumbnail-list">
                  {thumbs.map((img, idx) => (
                    <div 
                      key={idx} 
                      className={`thumb-item ${activeThumb === idx ? 'active' : ''}`}
                      onClick={() => setActiveThumb(idx)}
                    >
                      <img src={img} alt="Thumbnail" />
                    </div>
                  ))}
                </div>
                <div className="main-preview-image">
                  <img src={thumbs[activeThumb]} alt={product.name} />
                </div>
              </div>

              <div className="product-purchase-info">
                <div className="sku-badge">SKU Code: {product.sku}</div>
                <div className="price-tag">
                  <span className="amount">{product.price}</span> per unit inclusive of all taxes
                </div>

                <div className="qty-row">
                  <span className="qty-label">QTY:</span>
                  <div className="qty-selector">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                  </div>
                </div>

                <div className="action-buttons-row">
                  <button className="buy-now-btn" onClick={() => onViewChange && onViewChange('buy')}>Buy Now</button>
                  <button className="add-to-cart-btn" onClick={() => onViewChange && onViewChange('cart')}>Add to Cart</button>
                </div>

                <div className="variants-section">
                  <p className="variants-title">Variants (Same size & material but different color/Theme)</p>
                  <div className="variant-swatch active">
                    <img src={product.image} alt="Variant" />
                  </div>
                </div>
              </div>
            </div>

            <div className="product-specs-section">
              <div className="spec-block">
                <h3 className="spec-heading">DESCRIPTION:</h3>
                <p className="spec-text">
                  The blue wedding card has embossed floral design with customized initial acrylic nameplate. This invitation card has holding insert and an envelope
                </p>
              </div>
              <div className="spec-block">
                <h3 className="spec-heading">ADDITIONAL INFORMATION</h3>
                <div className="info-pills">
                  <span>📏 <strong>Height:</strong> 27.5 cms</span>
                  <span>📐 <strong>Width:</strong> 21 cms</span>
                  <span>⚖️ <strong>Weight:</strong> 110 grams</span>
                </div>
              </div>
              <div className="spec-block">
                <h3 className="spec-heading">ADDITIONAL COMMENTS</h3>
                <p className="spec-text">Discounts are applied based on quantity at checkout</p>
              </div>
            </div>

            <section className="related-cards-section">
              <h2 className="related-heading">Related Cards</h2>
              <div className="wishlist-grid">
                {relatedCards.map((card) => (
                  <div key={card.id} className="wishlist-card-item">
                    <div className="wishlist-card-img-container">
                      <img src={card.image} alt={card.name} />
                      <button 
                        className="heart-btn active"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Favorite"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="wishlist-card-info">
                      <h3 className="wishlist-card-caption">{card.name}</h3>
                      <p className="wishlist-card-price">{card.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      <Footer onViewChange={onViewChange} />
    </div>
  );
};

export default Wishlist;
