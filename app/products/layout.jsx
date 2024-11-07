"use client";
import { Contact } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ProductPageLayout from "@components/layouts/ProductPageLayout";
import ProductCategory from "@components/product-category/Productcategory";
import PromotionalItems from "./promotionalitems/page";

const Layout = ({ children }) => {
  const productCategories = {
    keychains: {
      HeroSection: {
        title: "Rubber / Metal Keychains",
        description: "Variety of stylish and functional keychains.",
        subDescription:
          "Keychains are a great way to keep your valuables secure and organized. Choose from a variety of styles and designs to suit your needs.",
        imagePath: "/Assets/f1.png",
        backgroundColor: "#fdc",
        links: {
          ExpressQuote: {
            text: "Express Quote",
            url: "/products/keychains/express-quote"
          },
          Contact: {
            text: "Contact Us",
            url: "/products/keychains/contact"
          }
        },
      },
      CardsSection: [
        {
          imagePath: "https://rukminim2.flixcart.com/image/850/1000/xif0q/key-chain/o/h/4/new-design-radha-krishna-and-chhota-krishna-rubber-keyring-original-imagqtgncgqsxrra.jpeg?q=90&crop=false",
          quotationLInk: "/products/keychain1",
          title: "Radha Krishna Keychain"
        },
        {
          imagePath: "/rubberkeychain/rubber2.png",
          quotationLInk: "/products/keychain2",
          title: "god"
        },
      ],
    },
    bag: {
      HeroSection: {
        title: "Bag",
        description: "Explore our collection of bags for every occasion.",
        subDescription:
          "Whether you need a tote for your daily commute or a backpack for a weekend getaway, we have you covered.",
        imagePath: "/Assets/f2.png",
        backgroundColor: "#e0e0e0",
        links: {
          ExpressQuote: {
            text: "Express Quote",
            url: "/products/bags/express-quote"
          },
          Contact: {
            text: "Contact Us",
            url: "/products/bags/contact"
          }
        },
      },
      CardsSection: [
        {
          imagePath: "/Assets/bag1.jpg",
          quotationLInk: "/products/bag1",
          title: "Corporate Laptop Bag"
        },
        {
          imagePath: "/Assets/bag2.jpg",
          quotationLInk: "/products/bag2",
          title: "Canvas Tote Bag"
        },
      ],
    },
    promotionalitems: {
      HeroSection: {
        title: "promotionalitems",
        description: "Find the perfect mug for your coffee or tea.",
        subDescription:
          "Whether you're looking for a stylish mug for your morning coffee or a travel mug for your next road trip, we've got you covered.",
        imagePath: "/Assets/f3.png",
        backgroundColor: "#4d4c4c",
        links: {
          ExpressQuote: {
            text: "Express Quote",
            url: "/products/mugs/express-quote"
          },
          Contact: {
            text: "Contact Us",
            url: "/products/mugs/contact"
          }
        },
      },
      CardsSection: [
        {
          imagePath: "/Assets/mug1.jpg",
          quotationLInk: "/products/mug1",
          title: "Ceramic Mug"
        },
        {
          imagePath: "/Assets/mug2.jpg",
          quotationLInk: "/products/mug2",
          title: "Travel Mug"
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
    bag: {
      Title: "Bags",
      Links: [
        { title: "CorporateLaptopBag", path: "/products/bag1" },
        { title: "CanvasToteBag", path: "/products/bag2" },
      ],
    },
    promotionalitems: {
      Title: "promotionalitems",
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
      <ProductPageLayout 
        category={category} 
        routeData={routeData}
        sidebarData={CommonLeftSidebar[category]}
      >
        <Image
          src={routeData.HeroSection.imagePath}
          alt={routeData.HeroSection.title}
          fill
          className="object-cover rounded-lg"
        />
      </ProductPageLayout>
    </div>
  );
};

export default Layout;
