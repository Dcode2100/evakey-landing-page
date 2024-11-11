import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Card = ({ routeData }) => {
  return (
    <>
      <div className="mb-8">
        <h1 className="font-bold lg:text-[25px]">Shop by Products</h1>
        <p className="text-sm">{routeData.HeroSection.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {routeData?.CardsSection?.map((item, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg"
          >
            <div className="relative h-[300px] w-full">
              <div
                className="absolute inset-x-4 top-4 bottom-16 rounded-xl border-4 "
                style={{ backgroundColor: item.cardBgColor }}
              >
                <div className="relative w-full h-full p-6">
                  <Image
                    src={item.imagePath}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="absolute bottom-4 inset-x-4 flex items-center ">
                <h3 className="text-sm font-medium">{item.title}</h3>
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
