import React, { useState } from 'react';
import { 
  FaCcMastercard, 
  FaCcVisa, 
  FaCcPaypal, 
  FaInfoCircle, 
  FaMoneyBillWave 
} from 'react-icons/fa';
import Footer from './Footer';
import './buy.css';

const Buy = ({ onViewChange }) => {
  const [selectedUpi, setSelectedUpi] = useState('paytm');
  const [saveDetails, setSaveDetails] = useState(true);

  const handlePay = () => {
    if (onViewChange) onViewChange('pay');
  };

  return (
    <div className="buy-page">
      <div className="buy-panels-container">
        {/* Left Payment Panel */}
        <div className="payment-panel">
          <div className="payment-logos">
            <FaCcMastercard className="brand-logo mastercard" />
            <FaCcVisa className="brand-logo visa" />
            <FaCcPaypal className="brand-logo paypal" />
            <div className="upi-brand-badge">UPI</div>
          </div>

          <div className="upi-section">
            <div className="upi-header">
              <span>Pay by UPI</span>
              <div className="upi-icon-small">UPI</div>
            </div>

            <div 
              className={`payment-option ${selectedUpi === 'paytm' ? 'selected' : ''}`}
              onClick={() => setSelectedUpi('paytm')}
            >
              <div className="option-left">
                <input 
                  type="radio" 
                  checked={selectedUpi === 'paytm'} 
                  onChange={() => setSelectedUpi('paytm')} 
                />
                <span className="option-name">Paytm</span>
              </div>
              <div className="option-logo paytm-badge">PAYTM UPI</div>
            </div>

            <div 
              className={`payment-option ${selectedUpi === 'gpay' ? 'selected' : ''}`}
              onClick={() => setSelectedUpi('gpay')}
            >
              <div className="option-left">
                <input 
                  type="radio" 
                  checked={selectedUpi === 'gpay'} 
                  onChange={() => setSelectedUpi('gpay')} 
                />
                <span className="option-name">Gpay</span>
              </div>
              <div className="option-logo gpay-badge">G Pay</div>
            </div>

            <div 
              className={`payment-option ${selectedUpi === 'phonepe' ? 'selected' : ''}`}
              onClick={() => setSelectedUpi('phonepe')}
            >
              <div className="option-left">
                <input 
                  type="radio" 
                  checked={selectedUpi === 'phonepe'} 
                  onChange={() => setSelectedUpi('phonepe')} 
                />
                <span className="option-name">Phonepe</span>
              </div>
              <div className="option-logo phonepe-badge">Pe</div>
            </div>

            <div 
              className={`payment-option ${selectedUpi === 'cred' ? 'selected' : ''}`}
              onClick={() => setSelectedUpi('cred')}
            >
              <div className="option-left">
                <input 
                  type="radio" 
                  checked={selectedUpi === 'cred'} 
                  onChange={() => setSelectedUpi('cred')} 
                />
                <span className="option-name">Cred</span>
              </div>
              <div className="option-logo cred-badge">CRED</div>
            </div>
          </div>

          <div className="cod-button">
            <div className="cod-left">
              <FaMoneyBillWave className="cod-icon" />
              <span>Cash on Delivery</span>
            </div>
            <span className="arrow-down">˅</span>
          </div>

          <div className="info-message">
            <FaInfoCircle className="info-icon" />
            <span>Credit card payments may take up to 24 hours to be processed!</span>
          </div>

          <div className="checkbox-group">
            <input 
              type="checkbox" 
              id="save-details" 
              checked={saveDetails} 
              onChange={(e) => setSaveDetails(e.target.checked)} 
            />
            <label htmlFor="save-details">Save my payments details for future purchase</label>
          </div>
        </div>

        {/* Right Order Summary Panel */}
        <div className="order-summary-panel">
          <h2 className="order-summary-title">Order Summary</h2>

          <div className="summary-info-row">
            <span>Date:</span>
            <span>16th Apr</span>
          </div>
          <div className="summary-info-row">
            <span>Time:</span>
            <span>5.35pm</span>
          </div>

          <hr className="summary-divider" />

          <div className="products-section">
            <h3 className="products-heading">Products</h3>
            <div className="product-item-row">
              <span>The Blue Wedding Card</span>
              <span>2</span>
            </div>
            <div className="product-item-row">
              <span>Added Compliment</span>
              <span>Hold Bag</span>
            </div>
          </div>

          <hr className="summary-divider" />

          <div className="coupon-bar">
            <span className="coupon-code">MAR0057</span>
            <span className="coupon-applied">Coupon Applied</span>
          </div>

          <div className="price-details-section">
            <div className="price-row">
              <span>Subtotal</span>
              <span className="price-val">Rs. 153.40</span>
            </div>
            <div className="price-row">
              <span>Shipping</span>
              <div className="shipping-val">
                <span>0.00</span>
                <span className="free-badge">Free</span>
              </div>
            </div>
          </div>

          <div className="pay-button-container">
            <button className="pay-btn" onClick={handlePay}>
              Pay Rs.153.40
            </button>
          </div>
        </div>
      </div>

      <Footer onViewChange={onViewChange} />
    </div>
  );
};

export default Buy;
