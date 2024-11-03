"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Bag = () => {
  const router = useRouter();
  const id = router;
  const bags = [
    {
      id: 1,
      name: "Corporate Laptop Bag",
      price: "₹899",
      image: "/Assets/p754503.avif",
      description: "Professional laptop bag with multiple compartments",
    },
    {
      id: 2,
      name: "Canvas Tote Bag",
      price: "₹399",
      image: "/Assets/p754503.avif",
      description: "Eco-friendly tote bag with custom printing",
    },
    // ... existing code ...
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Promotional {console.log(id)}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bags.map((bag) => (
          <div
            key={bag.id}
            className="border rounded-lg p-4 hover:shadow-lg transition"
          >
            <Image
              src={bag.image}
              alt={bag.name}
              width={300}
              height={300}
              className="rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{bag.name}</h2>
            <p className="text-gray-600">{bag.description}</p>
            <p className="text-lg font-bold mt-2">{bag.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bag;
