// File: src/components/Testimonials.jsx

import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h3 className="testimonials-title">What Our Customers Say</h3>
      <div className="testimonial-list">
        <div className="testimonial">
          <p>“The equipment quality is top-notch. Highly recommend!”</p>
          <span>— Vikranth V.</span>
        </div>
        <div className="testimonial">
          <p>“Fast delivery and great service. Will buy again.”</p>
          <span>— Meena M.</span>
        </div>
        <div className="testimonial">
          <p>“I love the variety of equipment available. Something for everyone!”</p>
          <span>— Nagendra N.</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
