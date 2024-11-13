"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const ProductCategory = () => {
  const router = useRouter();

  const Datas = [
    {
      id: 1,
      name: "KeyChains",
      bgColor: "bg-red-300",
      extracolors: "opacity-80 bg-black",
      image: "/Assets/promotional-keyrings.png",
      link: "/products/keychains"
    },
    {
      id: 2,
      name: "Bag",
      bgColor: "bg-green-300",
      extracolors: "opacity-80 bg-black",
      image: "/Assets/p754503.avif",
      link: "/products/bag"
    },
    {
      id: 3,
      name: "promotionalitems",
      bgColor: "bg-blue-300",
      extracolors: "opacity-80 bg-black",
      image: "/Assets/card.jpg",
      link: "/products/promotionalitems"
    },
   
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
      <h1 className="font-black text-2xl md:text-3xl lg:text-4xl text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Promotional Products For Your Company
      </h1>
      <h2 className="text-sm md:text-base lg:text-lg text-center text-gray-600 pt-4">
        Feature your logo and promote your brand to clients across INDIA
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {Datas.map((data) => (
          <div
            key={data.id}
            className={`group aspect-square relative w-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-102 overflow-hidden`}
            onClick={() => router.push(data.link)}
          >
            {data?.image && ( 
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                src={data.image}
                alt={data.name}
                width={400}
                height={400}
                priority={data.id === 1}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h1 className="text-white font-bold text-lg md:text-xl text-center drop-shadow-lg">
                {data.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
