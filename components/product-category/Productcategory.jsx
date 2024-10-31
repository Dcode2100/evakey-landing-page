import React from "react";
import Image from "next/image";

const ProductCategory = () => {
  const Datas = [
    {
      id: 1,
      name: "Product 1",
      bgColor: "bg-red-300",
      extracolors: "opacity-50 bg-black",
      image: "/Assets/promotional-keyrings.png", 
    },
    {
      id: 2,
      name: "Product 2",
      bgColor: "bg-green-300",
      extracolors: "opacity-50 bg-black",
    },
    {
      id: 3,
      name: "Product 3",
      bgColor: "bg-blue-300",
      extracolors: "opacity-50 bg-black",
    },
    {
      id: 4,
      name: "Product 4",
      bgColor: "bg-yellow-300",
      extracolors: "opacity-50 bg-black",
    },
  ];

  return (
    <>
      <h1 className="font-black text-2xl">
        Promotional Products For Your Company
      </h1>
      <h1 className="text-sm pt-3">
        Feature your logo and promote your brand to clients across INDIA
      </h1>
      <div className="h-[32rem] mt-9 flex flex-wrap rounded-xl overflow-hidden gap-10 pl-14">
        {Datas.map((data) => (
          <div
            key={data.id}
            className={`h-[15rem] relative w-[15rem] ${data.bgColor} rounded-xl flex flex-col`}
          >
            {data?.image && (
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                src={data.image}
                alt={data.name}
                width={100}
                height={100}
              />
            )}
            <div
              className={`w-full ${data.extracolors} h-[9vh] relative mt-auto rounded-b-xl flex justify-center items-center`}
            >
              <h1 className="text-white font-black text-xl">{data.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCategory;
