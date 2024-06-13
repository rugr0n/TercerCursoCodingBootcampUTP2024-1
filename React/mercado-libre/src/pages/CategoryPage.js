import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { category_id } = useParams();
  const sellerId = 179571326; // El seller ID de Miguel

  return (
    <div className="category-page">
      <ProductGrid sellerId={sellerId} categoryId={category_id} />
    </div>
  );
};

export default CategoryPage;
