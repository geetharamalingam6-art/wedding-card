import React, { useState } from 'react';
import { 
  FaCcMastercard, 
  FaCcVisa, 
  FaCcPaypal, 
  FaInfoCircle, 
  FaMoneyBillWave 
} from 'react-icons/fa';
import Footer from './Footer';
import { useCart } from '../context/CartContext';
import './buy.css';

const TAX_RATE = 0.18;

// "Rs. 10.25" -> 10.25
const parsePrice = (price) => {
  const match = String(price).match(/\d+(?:\.\d+)?/);
  return match ? parseFloat(match[0]) : 0;
};

const formatRs = (amount) => `Rs.${amount.toFixed(2)}`;

const formatDate = (d) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });

const formatTime = (d) =>
  d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }).toLowerCase();

const Buy = ({ onViewChange }) => {
  const [selectedUpi, setSelectedUpi] = useState('paytm');
  const [saveDetails, setSaveDetails] = useState(true);
  const { cartItems, clearCart } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subTotal = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );
  const totalTax = subTotal * TAX_RATE;
  const grandTotal = subTotal + totalTax;

  const now = new Date();
  const orderDate = formatDate(now);
  const orderTime = formatTime(now);

  const handlePay = () => {
    if (onViewChange) onViewChange('pay');
  };

  const handlePlaceOrder = () => {
    clearCart();
    if (onViewChange) onViewChange('order');
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
            <span>{orderDate}</span>
          </div>
          <div className="summary-info-row">
            <span>Time:</span>
            <span>{orderTime}</span>
          </div>

          <hr className="summary-divider" />

          <div className="products-section">
            <h3 className="products-heading">Products</h3>
            {cartItems.length === 0 ? (
              <div className="product-item-row">
                <span>Your cart is empty</span>
                <span>0</span>
              </div>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="product-item-row">
                  <span>{item.name || item.alt}</span>
                  <span>{item.quantity}</span>
                </div>
              ))
            )}
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
              <span>Subtotal ({totalItems} items)</span>
              <span className="price-val">{formatRs(subTotal)}</span>
            </div>
            <div className="price-row">
              <span>Tax (18%)</span>
              <span className="price-val">{formatRs(totalTax)}</span>
            </div>
            <div className="price-row">
              <span>Shipping</span>
              <div className="shipping-val">
                <span>0.00</span>
                <span className="free-badge">Free</span>
              </div>
            </div>
            <div className="price-row total-row">
              <span>Total</span>
              <span className="price-val">{formatRs(grandTotal)}</span>
            </div>
          </div>

          <div className="pay-button-container">
            <button className="pay-btn" onClick={handlePay}>
              Pay {formatRs(grandTotal)}
            </button>
          </div>
          <button className="place-order-btn" onClick={handlePlaceOrder}>
            Place Order (Cash on Delivery)
          </button>
        </div>
      </div>

      <Footer onViewChange={onViewChange} />
    </div>
  );
};

export default Buy;
