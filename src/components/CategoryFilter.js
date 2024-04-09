import React from 'react';

const CategoryFilter = ({ categories, onSelectCategory }) => {
  const handleCategoryClick = (category) => {
    onSelectCategory(category);
  };

  return (
    <div>
      <h2>Category Filter</h2>
      <button onClick={() => handleCategoryClick('All')}>All</button>
      {categories.map((category, index) => (
        <button key={index} onClick={() => handleCategoryClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
