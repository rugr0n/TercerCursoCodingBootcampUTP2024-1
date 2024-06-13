import React from 'react';
import ProductGrid from '../components/ProductGrid';

const HomePage = () => {
  const sellerId = 179571326; // El seller ID de Miguel

  return (
    <div className="home-page">
      <ProductGrid sellerId={sellerId} />
    </div>
  );
};

export default HomePage;
