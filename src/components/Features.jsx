// File: src/components/Features.jsx

import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="feature-item">
        <span className="icon">🚚</span>
        <p>Free Shipping</p>
      </div>
      <div className="feature-item">
        <span className="icon">🔁</span>
        <p>Easy Returns</p>
      </div>
      <div className="feature-item">
        <span className="icon">💳</span>
        <p>Secure Payments</p>
      </div>
        <div className="feature-item">
            <span className="icon">📞</span>
            <p>24/7 Support</p>
        </div>
    </section>
  );
};
export default Features;