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
  ];

  const rubberKeychainProducts = [
    {
      id: 5,
      name: "Spider-Man Rubber Keychain",
      description: "Fun rubber keychain with Spider-Man design.",
      image: "spider_man.jpg",
    },
    {
      id: 6,
      name: "Captain America Rubber Keychain",
      description: "Vibrant rubber keychain featuring Captain America.",
      image: "captain_america.jpg",
    },
    {
      id: 7,
      name: "Cute Animal Rubber Keychain",
      description: "Adorable rubber keychain featuring cute animals.",
      image: "cute_animal.jpg",
    },
  ];

  const otherProducts = [
    {
      id: 8,
      name: "Cartoon Character Keychain",
      description: "Colorful keychain featuring various cartoon characters.",
      image: "cartoon_keychain.jpg",
    },
    {
      id: 9,
      name: "Random Name Keychain",
      description: "Unique keychain with a creative design.",
      image: "random_keychain.jpg",
    },
    {
      id: 10,
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
    <div className="md:mt-[150px] flex border-2 p-7 rounded-lg md:w-[80%] m-auto ">
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
