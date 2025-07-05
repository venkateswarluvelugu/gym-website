
import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const products = [
  {
    id: 1,
    name: "Adjustable Dumbbells",
    price: "₹3,499",
    rating: 4.5,
    image: "https://images.pexels.com/photos/17782849/pexels-photo-17782849.jpeg"
  },
  {
    id: 2,
    name: "Treadmill Pro 3000",
    price: "₹25,999",
    rating: 4.0,
    image: "https://images.pexels.com/photos/3757938/pexels-photo-3757938.jpeg"
  },
  {
    id: 3,
    name: "Multi Gym Station",
    price: "₹42,999",
    rating: 4.6,
    image: "https://images.pexels.com/photos/4944435/pexels-photo-4944435.jpeg"
  }
];

const ProductGrid = () => {
  return (
    <section className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductGrid;

