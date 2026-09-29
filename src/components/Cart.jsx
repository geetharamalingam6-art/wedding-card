import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useCart } from '../context/CartContext';
import './cart.css';

const TAX_RATE = 0.18;
const MIN_ITEMS = 100;

// "Rs. 10.25" -> 10.25  (keep only the number, dots included)
const parsePrice = (price) => {
  const match = String(price).match(/\d+(?:\.\d+)?/);
  return match ? parseFloat(match[0]) : 0;
};

const formatRs = (amount) => `Rs.${amount.toFixed(2)}`;

const Cart = ({ onViewChange }) => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, clearCart } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subTotal = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );
  const totalTax = subTotal * TAX_RATE;
  const grandTotal = subTotal + totalTax;
  const canCheckout = totalItems >= MIN_ITEMS;

  const handleCheckout = () => {
    if (!canCheckout) return;
    if (onViewChange) onViewChange('buy');
  };

  return (
    <div className="cart-page">
      <Navbar onViewChange={onViewChange} />

      <main className="cart-main-container">
        <div className="cart-table-wrapper">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <h2>Your cart is empty</h2>
              <p>Add invitation cards to your cart to see them here.</p>
              <button
                className="continue-shopping-btn"
                onClick={() => onViewChange && onViewChange('home')}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th>Tax</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => {
                    const unitPrice = parsePrice(item.price);
                    const lineTotal = unitPrice * item.quantity;
                    return (
                      <tr key={item.id}>
                        <td className="product-cell">
                          <div className="cart-product-info">
                            <img
                              src={item.image}
                              alt={item.name || item.alt}
                              className="cart-product-img"
                            />
                            <div className="product-sku-card">
                              <strong>{item.name || item.alt}</strong>
                              <span>SKU: {item.id}</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="qty-stepper qty-stepper-sm">
                            <button onClick={() => decreaseQty(item.id)} aria-label="Decrease quantity">−</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increaseQty(item.id)} aria-label="Increase quantity">+</button>
                          </div>
                        </td>
                        <td>{formatRs(unitPrice)}</td>
                        <td>18%</td>
                        <td>{formatRs(lineTotal)}</td>
                        <td>
                          <button
                            className="remove-item-btn"
                            onClick={() => removeFromCart(item.id)}
                            aria-label="Remove item"
                          >
                            ✕
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="cart-summary-section">
                <div className="summary-row">
                  <span className="summary-label">Total Items:</span>
                  <span className="summary-value">{totalItems}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Sub Total:</span>
                  <span className="summary-value">{formatRs(subTotal)}</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Total Tax:</span>
                  <span className="summary-value">{formatRs(totalTax)}</span>
                </div>
                <div className="summary-row total-row">
                  <span className="summary-label">Total:</span>
                  <span className="summary-value">{formatRs(grandTotal)}</span>
                </div>
              </div>

              {!canCheckout && (
                <div className="checkout-warning-msg">
                  TO CHECKOUT PLEASE ADD MINIMUM {MIN_ITEMS} ITEMS TO THE CART
                </div>
              )}

              <div className="cart-actions-row">
                <button
                  className="continue-shopping-btn"
                  onClick={() => onViewChange && onViewChange('home')}
                >
                  Continue Shopping
                </button>
                <button
                  className="clear-cart-btn"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
                <button
                  className="checkout-btn"
                  onClick={handleCheckout}
                  disabled={!canCheckout}
                  style={{
                    cursor: canCheckout ? 'pointer' : 'not-allowed',
                    backgroundColor: '#f39c12',
                    color: '#111',
                    opacity: canCheckout ? 1 : 0.55,
                  }}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer onViewChange={onViewChange} />
    </div>
  );
};

export default Cart;
