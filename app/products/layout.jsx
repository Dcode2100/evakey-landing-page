"use client";
import { Contact } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ProductPageLayout from "@components/layouts/ProductPageLayout";
import ProductCategory from "@components/product-category/Productcategory";

const Layout = ({ children }) => {
  const productCategories = {
    keychains: {
      HeroSection: {
        title: "Keychains",
        description: "A variety of stylish and functional keychains.",
        subDescription:
          "Keychains are a great way to keep your valuables secure and organized. Choose from a variety of styles and designs to suit your needs.",
        imagePath: "/images/keychains.jpg",
        links: {
          ExpressQuote: "/products/keychains/express-quote",
          Contact: "/products/keychains/contact",
        },
      },
      CardsSection: [
        {
          imagePath: "/images/keychain1.jpg",
          quotationLInk: "/products/keychain1",
        },
        {
          imagePath: "/images/keychain2.jpg",
          quotationLInk: "/products/keychain2",
        },
      ],
    },
    bags: {
      HeroSection: {
        title: "Bags",
        description: "Explore our collection of bags for every occasion.",
        subDescription:
          "Whether you need a tote for your daily commute or a backpack for a weekend getaway, we have you covered.",
        imagePath: "/images/bags.jpg",
        links: {
          ExpressQuote: "/products/bags/express-quote",
          Contact: "/products/bags/contact",
        },
      },
      CardsSection: [
        {
          imagePath: "/images/bag1.jpg",
          quotationLInk: "/products/bag1",
        },
        {
          imagePath: "/images/bag2.jpg",
          quotationLInk: "/products/bag2",
        },
      ],
    },
    mugs: {
      HeroSection: {
        title: "Mugs",
        description: "Find the perfect mug for your coffee or tea.",
        subDescription:
          "Whether you're looking for a stylish mug for your morning coffee or a travel mug for your next road trip, we've got you covered.",
        imagePath: "/images/mugs.jpg",
        links: {
          ExpressQuote: "/products/mugs/express-quote",
          Contact: "/products/mugs/contact",
        },
      },
      CardsSection: [
        {
          imagePath: "/images/mug1.jpg",
          quotationLInk: "/products/mug1",
        },
        {
          imagePath: "/images/mug2.jpg",
          quotationLInk: "/products/mug2",
        },
      ],
    },
  };

  const CommonLeftSidebar = {
    keychains: {
      Title: "Keychains",
      Links: [
        { title: "MetalKeychain", path: "/products/keychain1" },
        { title: "PlasticKeychain", path: "/products/keychain2" },
      ],
    },
    bags: {
      Title: "Bags",
      Links: [
        { title: "CorporateLaptopBag", path: "/products/bag1" },
        { title: "CanvasToteBag", path: "/products/bag2" },
      ],
    },
    mugs: {
      Title: "Mugs",
      Links: [
        { title: "CeramicMug", path: "/products/mug1" },
        { title: "TravelMug", path: "/products/mug2" },
      ],
    },
  };

  const path = usePathname();
  const category = path.split("/")[2];
  const [routeData, setRouteData] = useState(productCategories[category]);

  useEffect(() => {
    if (category && productCategories[category]) {
      setRouteData(productCategories[category]);
    }
  }, [category]);

  if (!routeData) {
    return <div>Category not found</div>;
  }

  return (
    <div className="flex w-full h-[70vh] relative rounded-lg">
      <ProductPageLayout category={category} routeData={routeData} />
    </div>
  );
};

export default Layout;
