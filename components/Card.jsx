import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ routeData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {routeData?.CardsSection?.map((item, index) => (
        <Link href={item.quotationLInk} key={index}>
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
            <div className="relative h-[240px] w-full">
              <Image
                src={item.imagePath}
                alt="Product"
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-4 flex flex-col items-center">
              {item.title && (
                <h3 className="text-lg font-semibold text-center mb-2">
                  {item.title}
                </h3>
              )}
              <div className="flex items-center justify-center mt-2">
                <span className="text-blue-600 hover:text-blue-800">
                  View Details →
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;