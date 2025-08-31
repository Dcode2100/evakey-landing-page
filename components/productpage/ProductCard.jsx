"use client";
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
    <div className="h-full w-full py-4 pr-4 max-sm:pl-2 max-sm:pr-2">
      <h2 className="mb-4 text-xl font-bold">Products</h2>
      <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative h-min w-full rounded bg-primary p-4 "
            onMouseEnter={() => handleProductHover(product)}
            onMouseLeave={handleProductLeave}
          >
            <div className="relative h-[15rem]">
              <Image
                src={`/rubberkeychain/${product.image}`}
                alt={product.name}
                fill
                className="h-auto w-full cursor-pointer rounded"
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
