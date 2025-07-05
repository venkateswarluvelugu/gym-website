// File: src/components/HeroSection.jsx

import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero section">
      <h1 className="hero-title">Welcome To Our Gym Equipment Store</h1>
      <p className="hero-subtitle">Premium Gym Equipment for Home & Commercial Use</p>
      <button className="hero-button">Shop Now</button>
    </section>
  );
};

export default HeroSection;