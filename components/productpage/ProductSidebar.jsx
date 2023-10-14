
// ProductSidebar.js
import React from 'react';

const ProductSidebar = ({ productTypes, selectedType, onSelectType }) => {
  return (
    <div className="w-1/4 p-4">
      <h2 className="text-xl font-bold mb-4">Product Types</h2>
      <ul>
        {productTypes.map((type) => (
          <li
            key={type}
            className={`cursor-pointer ${
              selectedType === type ? 'font-bold' : ''
            }`}
            onClick={() => onSelectType(type)}
          >
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSidebar;
