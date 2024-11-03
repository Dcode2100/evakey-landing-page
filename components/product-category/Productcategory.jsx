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
    {
      id: 4,
      name: "Product 4",
      bgColor: "bg-yellow-300",
      extracolors: "opacity-80 bg-black",
      link: "/products/product-4"
    },
  ];

  return (
    <>
      <h1 className="font-black text-xl md:text-2xl">
        Promotional Products For Your Company
      </h1>
      <h2 className="text-sm md:text-base pt-3">
        Feature your logo and promote your brand to clients across INDIA
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-9">
        {Datas.map((data) => (
          <div
            key={data.id}
            className={`aspect-square relative w-full ${data.bgColor} rounded-xl flex flex-col cursor-pointer transition-transform hover:scale-105`}
            onClick={() => router.push(data.link)}
          >
            {data?.image && (
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                src={data.image}
                alt={data.name}
                width={300}
                height={300}
                priority={data.id === 1}
              />
            )}
            <div
              className={`w-full ${data.extracolors} h-[9vh] relative mt-auto rounded-b-xl flex justify-center items-center`}
            >
              <h1 className="text-white font-black text-lg md:text-xl">{data.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCategory;
