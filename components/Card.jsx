import React from "react";
import Image from "next/image";

const Card = ({ routeData, activeFilter, onAddToCart }) => {
  const filteredCards = routeData.CardsSection.filter((card) => {
    if (activeFilter === "all") return true;
    return card.type === activeFilter;
  });

  return (
    <>
      <div className="mb-12 text-center">
        <h1 className="font-bold text-3xl md:text-4xl mb-3 text-gray-800">
          Shop by Products
        </h1>
        <p className="text-gray-600 text-lg">
          {routeData.HeroSection.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCards.map((card, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white"
          >
            <div className="relative h-[350px] w-full p-4">
              {/* Card Background */}
              <div
                className="absolute inset-x-4 top-4 bottom-20 rounded-xl border border-gray-100 shadow-sm"
                style={{
                  backgroundColor: card.cardBgColor,
                  backgroundImage:
                    "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
                }}
              >
                {/* Image Container */}
                <div className="relative w-full h-full p-6 flex items-center justify-center">
                  <Image
                    src={card.imagePath}
                    alt={card.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
              {/* Title and Button Container */}
              <div className="absolute bottom-4 inset-x-4 bg-white rounded-xl p-1 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {card.title}
                  </h3>
                  <button
                    onClick={() => onAddToCart(card)}
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow-sm">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
