import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">{product.price}</p>
        <div className="product-rating">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={
                i <= Math.round(product.rating)
                  ? 'star-filled'
                  : 'star-empty'
              }
            >
              ★
            </span>
          ))}
        </div>
        <div className="product-buttons">
          <button className="btn btn-red">Add to Cart</button>
          <button className="btn btn-outline">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
