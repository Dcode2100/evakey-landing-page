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
            className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="relative h-[350px] w-full">
              {/* Card Background with Gradient Overlay */}
              <div
                className="absolute inset-x-4 top-4 bottom-16 rounded-xl border border-gray-100 shadow-lg transform transition-transform duration-300 group-hover:scale-[1.02]"
                style={{
                  backgroundColor: card.cardBgColor,
                  backgroundImage:
                    "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                }}
              >
                {/* Image Container */}
                <div className="relative w-full h-full p-8 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={card.imagePath}
                    alt={card.title}
                    fill
                    className="object-contain transform transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Title Container */}
              <div className="absolute bottom-4 inset-x-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg transform transition-all duration-300 group-hover:shadow-xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <button
                      onClick={() => onAddToCart(card)}
                      className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Add
                    </button>
                  </div>
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
