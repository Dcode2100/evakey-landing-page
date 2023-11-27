import React, { useState } from "react";
import Image from "next/image";
const ProductCard = ({ products }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleProductHover = (product) => {
    setHoveredProduct(product);
  };

  const handleProductLeave = () => {
    setHoveredProduct(null);
  };

  return (
    <div className="w-full pr-4 py-4 max-sm:pl-2 max-sm:pr-2 max-h-max">
      <h2 className="text-xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 h-full">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-primary p-4 rounded relative h-full w-full "
            onMouseEnter={() => handleProductHover(product)}
            onMouseLeave={handleProductLeave}
          >
            <div className="relative h-full">
              <Image
                src={`/rubberkeychain/${product.image}`}
                alt={product.name}
                fill
                quality={true}
                className="w-full h-auto rounded mb-2 cursor-pointer"
              />
              {hoveredProduct === product && (
                <div className="absolute inset-0  bg-opacity-80 text-white p-4 text-center transition-opacity h-full">
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
