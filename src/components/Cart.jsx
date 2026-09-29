import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './cart.css';

const Cart = ({ onViewChange }) => {
  return (
    <div className="cart-page">
      <Navbar onViewChange={onViewChange} />

      <main className="cart-main-container">
        <div className="cart-table-wrapper">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Unit Price</th>
                <th>Tax</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="product-cell">
                  <div className="product-sku-card">
                    <strong>SKU: KSN0054</strong>
                    <span>SN (SN 54)</span>
                  </div>
                </td>
                <td>2</td>
                <td>Rs.65.00</td>
                <td>18%</td>
                <td>Rs.130.00</td>
              </tr>
            </tbody>
          </table>

          <div className="cart-summary-section">
            <div className="summary-row">
              <span className="summary-label">Sub Total:</span>
              <span className="summary-value">Rs.130.00</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Total Tax:</span>
              <span className="summary-value">Rs.23.40</span>
            </div>
            <div className="summary-row total-row">
              <span className="summary-label">Total:</span>
              <span className="summary-value">Rs.153.40</span>
            </div>
          </div>

          <div className="checkout-warning-msg">
            TO CHECKOUT PLEASE ADD MINIMUM 100 ITEMS TO THE CART
          </div>

          <div className="cart-actions-row">
            <button className="continue-shopping-btn" onClick={() => onViewChange && onViewChange('home')}>
              Continue Shopping
            </button>
            <button 
              className="checkout-btn" 
              onClick={() => onViewChange && onViewChange('buy')} 
              style={{ cursor: 'pointer', backgroundColor: '#f39c12', color: '#111', opacity: 1 }}
            >
              Checkout
            </button>
          </div>
        </div>
      </main>

      <Footer onViewChange={onViewChange} />
    </div>
  );
};

export default Cart;
