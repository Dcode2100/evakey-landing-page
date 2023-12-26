"use client";
import React, { useState } from "react";
import ProductSidebar from "../../components/productpage/ProductSidebar";
import ProductCard from "../../components/productpage/ProductCard";

const Products = () => {
  const metalKeychainProducts = [
    {
      id: 1,
      name: "Iron Man Metal Keychain",
      description: "High-quality metal keychain featuring Iron Man.",
      image: "iron_man.jpg",
    },
    {
      id: 2,
      name: "Wolverine Metal Keychain",
      description: "Durable metal keychain with Wolverine design.",
      image: "wolverine.jpg",
    },
    {
      id: 3,
      name: "Superhero Trio Metal Keychain",
      description: "Metal keychain featuring a trio of popular superheroes.",
      image: "superhero_trio.jpg",
    },
    {
      id: 4,
      name: "Galaxy Explorer Metal Keychain",
      description: "Explore the galaxy with this unique metal keychain.",
      image: "galaxy_explorer.jpg",
    },
    {
      id: 5,
      name: "Spider-Man Rubber Keychain",
      description: "Fun rubber keychain with Spider-Man design.",
      image: "rubber1.jpg",
    },
    {
      id: 6,
      name: "Captain America Rubber Keychain",
      description: "Vibrant rubber keychain featuring Captain America.",
      image: "rubber2.jpg",
    },
    {
      id: 7,
      name: "Cute Animal Rubber Keychain",
      description: "Adorable rubber keychain featuring cute animals.",
      image: "rubber3.jpg",
    },
    {
      id: 8,
      name: "Superhero Logo Rubber Keychain",
      description: "Rubber keychain with iconic superhero logos.",
      image: "rubber4.jpg",
    },
    {
      id: 9,
      name: "Glow-in-the-Dark Rubber Keychain",
      description: "Rubber keychain that glows in the dark.",
      image: "rubber5.jpg",
    },
    {
      id: 10,
      name: "Comic Book Rubber Keychain",
      description: "Colorful rubber keychain inspired by comic books.",
      image: "rubber6.jpg",
    },
  ];

  const rubberKeychainProducts = [
    
    {
      id: 11,
      name: "Animal Lover Rubber Keychain",
      description: "Rubber keychain for animal enthusiasts.",
      image: "rubber7.jpg",
    },
    {
      id: 12,
      name: "Classic Car Rubber Keychain",
      description: "Rubber keychain featuring vintage cars.",
      image: "rubber8.jpg",
    },
    {
      id: 13,
      name: "Music Note Rubber Keychain",
      description: "Musical-themed rubber keychain with notes.",
      image: "rubber9.jpg",
    },
    {
      id: 14,
      name: "Space Explorer Rubber Keychain",
      description: "Explore the cosmos with this rubber keychain.",
      image: "rubber10.jpg",
    },
    {
      id: 15,
      name: "Abstract Art Rubber Keychain",
      description:
        "Express your artistic side with this abstract art keychain.",
      image: "rubber11.jpg",
    },
    {
      id: 16,
      name: "Cartoon Character Keychain",
      description: "Colorful keychain featuring various cartoon characters.",
      image: "cartoon_keychain.jpg",
    },
  ];

  const otherProducts = [
   
    {
      id: 17,
      name: "Random Name Keychain",
      description: "Unique keychain with a creative design.",
      image: "random_keychain.jpg",
    },
    {
      id: 18,
      name: "Abstract Art Rubber Keychain",
      description:
        "Express your artistic side with this abstract art keychain.",
      image: "abstract_art.jpg",
    },
  ];

  const productTypes = ["Metal Keychains", "Rubber Keychains", "Others"];
  const [selectedType, setSelectedType] = useState(productTypes[0]);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
  };

  let selectedProducts = [];

  // Determine the selected products based on the product type
  switch (selectedType) {
    case "Metal Keychains":
      selectedProducts = metalKeychainProducts;
      break;
    case "Rubber Keychains":
      selectedProducts = rubberKeychainProducts;
      break;
    case "Others":
      selectedProducts = otherProducts;
      break;
    default:
      selectedProducts = [];
  }

  return (
    <div className="flex h-full min-h-screen flex-col gap-0 p-4 backdrop:justify-center max-md:items-center md:mt-[110px] md:flex-row md:space-x-8 lg:mt-[120px]">
      <ProductSidebar
        productTypes={productTypes}
        selectedType={selectedType}
        onSelectType={handleTypeSelect}
      />
      <ProductCard products={selectedProducts} />
    </div>
  );
};

export default Products;
