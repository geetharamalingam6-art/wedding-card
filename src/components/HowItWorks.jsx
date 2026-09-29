  import React from 'react';

const HowItWorks = () => {
  const steps = [
    { id: 1, title: 'Order Sample', icon: '📋' },
    { id: 2, title: 'Get Sample Order In 5 days', icon: '📦' },
    { id: 3, title: 'Approve Digital Draft', icon: '📱' },
    { id: 4, title: 'Place Your Bulk Order', icon: '🛒' },
    { id: 5, title: 'Print & Delivery', icon: '🚚' },
  ];

  return (
    <section className="how-it-works-section">
      <h2 className="section-title">How It Works</h2>
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.id} className="step-item">
            <div className="step-icon-box">
              <span className="step-emoji">{step.icon}</span>
            </div>
            <p className="step-title">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
