import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Card = ({ routeData, activeFilter }) => {
  const filteredCards = routeData.CardsSection.filter(card => {
    if (activeFilter === 'all') return true;
    return card.type === activeFilter;
  });

  return (
    <>
      <div className="mb-8">
        <h1 className="font-bold lg:text-[25px]">Shop by Products</h1>
        <p className="text-sm">{routeData.HeroSection.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg"
          >
            <div className="relative h-[300px] w-full">
              <div
                className="absolute inset-x-4 top-4 bottom-16 rounded-xl border-4 "
                style={{ backgroundColor: card.cardBgColor }}
              >
                <div className="relative w-full h-full p-6">
                  <Image
                    src={card.imagePath}
                    alt={card.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="absolute bottom-4 inset-x-4 flex items-center ">
                <h3 className="text-sm font-medium">{card.title}</h3>
                <ArrowRight
                  className="w-5 h-4 transition-transform group-hover:translate-x-1 ml-1"
                  strokeWidth={2}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
