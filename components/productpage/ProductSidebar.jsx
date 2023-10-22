// ProductSidebar.js
import React from 'react';

const ProductSidebar = ({ productTypes, selectedType, onSelectType }) => {
  return (
    <div className="sm:w-1/4 p-4 w-1/2 max-sm:w-[100%]">
      <h2 className="text-xl font-bold mb-4">Product Types</h2>
      <ul className=' max-sm:flex max-sm:gap-6 max-xs:gap-0 flex-wrap'>
        {productTypes.map((type) => (
          <li
            key={type}
            className="mb-2"
          >
            <div
              className={`cursor-pointer border p-2 hover:bg-gray-100 duration-300 transition-all${
                selectedType === type ? 'font-bold' : ''
              }`}
              onClick={() => onSelectType(type)}
            >
              {type}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSidebar;
