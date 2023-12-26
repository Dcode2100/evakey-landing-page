// ProductSidebar.js
import React from "react";

const ProductSidebar = ({ productTypes, selectedType, onSelectType }) => {
  return (
    <div className="w-1/4 py-4 pl-4 max-md:w-full max-sm:px-2 max-sm:pb-2 max-sm:pt-2">
      <h2 className="mb-4 text-xl font-bold">Product Catelog</h2>
      <ul className=" max-md:flex  max-md:flex-wrap max-md:gap-x-3">
        {productTypes.map((type) => (
          <li key={type} className="mb-2 max-md:w-min">
            <div
              className={`cursor-pointer flex-wrap whitespace-nowrap border border-primary px-4 py-4 duration-300 hover:bg-black hover:text-white max-sm:px-3 max-sm:py-2 transition-all${
                selectedType === type ? "font-bold" : ""
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
