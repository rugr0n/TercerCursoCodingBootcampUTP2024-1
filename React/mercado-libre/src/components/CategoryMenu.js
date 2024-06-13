import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../api';

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const toggleCategory = (categoryId) => {
    setExpanded((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const renderCategories = (categories) => {
    return categories.map((category) => (
      <div key={category.id}>
        <button onClick={() => toggleCategory(category.id)}>
          {expanded[category.id] ? '-' : '+'}
        </button>
        <Link to={`/${category.id}`}>{category.name}</Link>
        {expanded[category.id] && category.children && (
          <div style={{ marginLeft: '20px' }}>
            {renderCategories(category.children)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="category-menu">
      {renderCategories(categories)}
    </div>
  );
};

export default CategoryMenu;
