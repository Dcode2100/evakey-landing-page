import React from "react";
import Image from "next/image";

const ProductCategory = () => {
  const Datas = [
    {
      id: 1,
      name: "Product 1",
      bgColor: "bg-red-300",
      extracolors: "bg-blue-600",
      image: "/Assets/promotional-keyrings.png", // Updated path
    },
    {
      id: 2,
      name: "Product 2",
      bgColor: "bg-green-300",
      extracolors: "bg-yellow-600",
    },
    {
      id: 3,
      name: "Product 3",
      bgColor: "bg-blue-300",
      extracolors: "bg-red-600",
    },
    {
      id: 4,
      name: "Product 4",
      bgColor: "bg-yellow-300",
      extracolors: "bg-purple-600",
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
      <div className="h-[32rem] mt-9 flex flex-wrap gap-10 pl-14">
        {Datas.map((data) => (
          <div
            key={data.id}
            className={`h-[15rem] w-[15rem] ${data.bgColor} rounded-xl flex flex-col`}
          >
            <div
              className={`w-full ${data.extracolors} h-[9vh] mt-auto rounded-b-xl flex justify-center items-center`}
            >
              {data.image && (
                <Image
                  className=""
                  src={data.image}
                  alt={data.name}
                  width={100} // Set appropriate width
                  height={100} // Set appropriate height
                />
              )}
              <h1 className="text-white font-black text-xl">{data.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCategory;
