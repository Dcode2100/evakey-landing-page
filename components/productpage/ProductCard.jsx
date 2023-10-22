// ProductCard.js
import React from 'react';

const ProductCard = ({ products }) => {
  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-200 p-4 rounded">
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
