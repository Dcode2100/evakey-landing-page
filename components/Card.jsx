import React from 'react';
import Image from 'next/image';
import ContactPage from './contactpage/ContactPage';

const Card = ({ routeData }) => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 ml-[15px] md:p-6">
      {routeData?.CardsSection?.map((item, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="relative h-[180px] sm:h-[200px] md:h-[240px] w-full">
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
          </div>
        </div>
      ))}
      </div>
      
      </>
  );
};

export default Card;