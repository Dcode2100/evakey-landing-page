// ProductCard.js
import React from 'react';
const ProductCard = ({ products }) => {
    return (
        <div className="w-3/4 p-4">
            <h2 className="text-xl font-bold mb-4">Products</h2>
            <div className="grid grid-cols-3 gap-4">
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
