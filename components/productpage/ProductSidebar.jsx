// ProductSidebar.js
import React from 'react';

const ProductSidebar = ({ productTypes, selectedType, onSelectType }) => {
  return (
    <div className="py-4 pl-4 w-1/4 max-md:w-full max-sm:px-2 max-sm:pb-2 max-sm:pt-2">
      <h2 className="text-xl font-bold mb-4">Product Catelog</h2>
      <ul className=' max-md:flex  max-md:flex-wrap max-md:gap-x-3'>
        {productTypes.map((type) => (
          <li
            key={type}
            className="mb-2 max-md:w-min"
          >
            <div
              className={`cursor-pointer border border-primary py-4 px-4 max-sm:py-2 max-sm:px-3 flex-wrap hover:bg-black hover:text-white duration-300 whitespace-nowrap transition-all${
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
