import React from 'react';
import './Order.css';
import Navbar from './Navbar';
import Footer from './Footer';

const steps = [
  {
    label: 'Browse the Collection:',
    text: 'Take your time to explore our collection and discover various designs that suit your style and preferences. You can use the search filters to narrow down your options based on themes, colors, or card types.',
  },
  {
    label: 'Select a Design:',
    text: 'Once you have found a design that catches your eye, click on it to view more details. You can zoom in to see the intricate details and read the card description to ensure it meets your requirements.',
  },
  {
    label: 'Add to Cart:',
    text: 'Once you are happy with your design, select the quantity and click on the "Add to Cart" button to proceed to the next step.',
  },
  {
    label: 'Review Your Order:',
    text: 'In the shopping cart, you will be able to review your order summary, including the quantity, price, and any additional services you have selected.',
  },
  {
    label: 'Secure Payment:',
    text: 'King of Cards offers a secure online payment system. Choose your preferred payment method and enter the necessary details to complete your transaction.',
  },
  {
    label: 'Place Your Order:',
    text: 'After confirming your payment, you will receive an order confirmation via email, along with an estimated delivery date.',
  },
];

const Order = ({ onViewChange }) => {
  return (
    <div className="order-wrapper">
      <Navbar onViewChange={onViewChange} />
      <div className="order-page">
        <h1 className="order-title">
          How do I order wedding cards from Wed Knot Craft online?
        </h1>

        <div className="order-steps">
          {steps.map((step) => (
            <p className="order-step" key={step.label}>
              <strong className="order-step-label">{step.label}</strong>{' '}
              {step.text}
            </p>
          ))}
        </div>
      </div>

      <Footer onViewChange={onViewChange} />
    </div>
  );
};

export default Order;