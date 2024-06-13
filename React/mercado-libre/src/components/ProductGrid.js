import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';

const ProductGrid = ({ sellerId, categoryId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts(sellerId, categoryId);
      setProducts(data);
    };
    fetchProducts();
  }, [sellerId, categoryId]);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <a href={product.permalink} target="_blank" rel="noopener noreferrer">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
