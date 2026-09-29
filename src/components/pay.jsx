import React from 'react';
import { 
  FiUser, 
  FiShoppingBag, 
  FiMail, 
  FiPhone, 
  FiTrash2, 
  FiCheck 
} from 'react-icons/fi';
import Footer from './Footer';
import { useCart } from '../context/CartContext';
import './pay.css';

const TAX_RATE = 0.18;

// "Rs. 10.25" -> 10.25
const parsePrice = (price) => {
  const match = String(price).match(/\d+(?:\.\d+)?/);
  return match ? parseFloat(match[0]) : 0;
};

const formatRs = (amount) => `Rs.${amount.toFixed(2)}`;

const Pay = ({ onViewChange }) => {
  const { cartItems } = useCart();

  const subTotal = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );
  const totalTax = subTotal * TAX_RATE;
  const grandTotal = subTotal + totalTax;

  // Continue Shopping: hard-reload the app so the cart is cleared and the
  // home page is shown fresh. window.location.href resets in-memory state
  // (the CartContext) and re-fetches the app from the server.
  const handleContinueShopping = () => {
    window.location.href = '/';
  };

  return (
    <div className="pay-page">
      <div className="pay-container">
        {/* Top Circular Badge */}
        <div className="order-confirmed-badge-wrapper">
          <div className="order-badge-circle">
            <div className="badge-inner-check">
              <FiCheck />
            </div>
            <div className="badge-text-ring">
              <span>O</span><span>R</span><span>D</span><span>E</span><span>R</span>
              <span>&nbsp;</span>
              <span>C</span><span>O</span><span>N</span><span>F</span><span>I</span><span>R</span><span>M</span><span>E</span><span>D</span>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="pay-content-grid">
          {/* Left Column */}
          <div className="pay-left-column">
            <div className="order-intro-box">
              <h1 className="your-order-heading">Your Order</h1>
              <p className="order-id-text">Order ID: 356958190</p>
              <p className="thank-you-text">Thank You! Your Order has been confirmed.</p>
            </div>

            {cartItems.map(item => (
              <div className="product-card-receipt" key={item.id}>
                <div className="receipt-thumb">
                  <img src={item.image} alt={item.name || item.alt} />
                </div>
                <div className="receipt-sku-badge">
                  <strong>{item.name || item.alt}</strong>
                  <span>SKU: {item.id}</span>
                </div>
                <div className="receipt-price-action">
                  <span className="receipt-price">
                    {formatRs(parsePrice(item.price) * item.quantity)}
                  </span>
                  <span className="receipt-qty">Qty: {item.quantity}</span>
                  <button className="delete-item-btn" aria-label="Delete">
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}

            <div className="order-summary-box">
              <h3 className="summary-title">Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>{formatRs(subTotal)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping Charge</span>
                <span>Rs. 0.00</span>
              </div>
              <div className="summary-row">
                <span>Taxes</span>
                <span>{formatRs(totalTax)}</span>
              </div>
              <div className="summary-row">
                <span>Discount</span>
                <span>Rs. 5.00</span>
              </div>
              <hr className="summary-hr" />
              <div className="summary-row total-row">
                <span>Total</span>
                <span>{formatRs(Math.max(0, grandTotal - 5))}</span>
              </div>
            </div>

            <div className="continue-shopping-container">
              <button
                className="continue-shop-btn"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="pay-right-sidebar">
            <div className="sidebar-card">
              <h4>Customer</h4>
              <div className="sidebar-info-line">
                <FiUser className="sidebar-icon" />
                <span>Jhon</span>
              </div>
              <div className="sidebar-info-line">
                <FiShoppingBag className="sidebar-icon" />
                <span>1 order</span>
              </div>
            </div>

            <div className="sidebar-card">
              <h4>Customer Information</h4>
              <div className="sidebar-info-line">
                <FiMail className="sidebar-icon" />
                <span>jhon057@gmail.com</span>
              </div>
              <div className="sidebar-info-line">
                <FiPhone className="sidebar-icon" />
                <span>1 order</span>
              </div>
            </div>

            <div className="sidebar-card">
              <h4>Shipping Address</h4>
              <div className="sidebar-info-line">
                <FiUser className="sidebar-icon" />
                <span>Jhon</span>
              </div>
              <p className="address-text">
                123 Elm street<br />
                Anytown, ABC 12345<br />
                Anywhere.
              </p>
            </div>

            <div className="sidebar-card">
              <h4>Billing Address</h4>
              <p className="billing-text">Same as Shipping address</p>
            </div>
          </div>
        </div>
      </div>

      <Footer onViewChange={onViewChange} />
    </div>
  );
};

export default Pay;
