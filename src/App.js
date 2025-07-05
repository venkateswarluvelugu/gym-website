
import React from 'react';
 import HeroSection from './components/HeroSection';
 import ProductGrid from './components/ProductGrid';
 import Testimonials from './components/Testimonials';
 import Features from './components/Features';
import './App.css';

const App = () => {
  return (
    <div className="App">
       <HeroSection />
      <ProductGrid />
      <Testimonials />
       <Features />
      <footer className="footer">
        <p>&copy; 2025 Gym Equipment Store. All rights reserved.</p>
      </footer>
      
    </div>
  );
};

export default App;
