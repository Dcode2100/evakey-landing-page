"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ProductPageLayout from "@components/layouts/ProductPageLayout";

const Layout = () => {
  const productCategories = {
    keychains: {
      HeroSection: {
        title: "Rubber / Metal Keychains",
        description: "Variety of stylish and functional keychains.",
        subDescription:
          "Keychains are a great way to keep your valuables secure and organized. Choose from a variety of styles and designs to suit your needs.",
        imagePath: "/Assets/f1.png",
        backgroundColor: "#fdc",
        subtitle: "Feature your logo on keychains and let clients carry your brand wherever they go",
        links: {
          ExpressQuote: {
            text: "Express Quote",
            url: "/",
          },
          Contact: {
            text: "Contact Us",
          },
        },
      },
      CardsSection: [
        {
          imagePath:"/rubberkeychain/image-removebg-preview.png",
          title: "Radha Krishna Keychain",
          cardBgColor: "#B0E0E6",
        },
        {
          imagePath: "/rubberkeychain/rubber2.png",
          title: "god",
          cardBgColor: "#E1F1FF",
        },
        {
          imagePath: "/rubberkeychain/rubber2.png",
          title: "god",
          cardBgColor: "#FFDAB9",
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
        backgroundColor: "#F0F8FF",
        links: {
          ExpressQuote: {
            text: "Express Quote",
            url: "/",
          },
          Contact: {
            text: "Contact Us",
          },
        },
      },
      CardsSection: [
        {
          imagePath: "/Assets/bag1.jpg",
          title: "Corporate Laptop Bag",
          cardBgColor: "#FFE4E1",
        },
        {
          imagePath: "/Assets/bag2.jpg",
          title: "Canvas Tote Bag",
          cardBgColor: "#F0F8FF",
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
        backgroundColor: "#F0FFF0",
        links: {
          ExpressQuote: {
            text: "Express Quote",
            url: "/",
          },
          Contact: {
            text: "Contact Us",
          },
        },
      },
      CardsSection: [
        {
          imagePath: "/Assets/mug1.jpg",
          title: "Ceramic Mug",
          cardBgColor: "#FFE4E1",
        },
        {
          imagePath: "/Assets/mug2.jpg",
          title: "Travel Mug",
          cardBgColor: "#F0F8FF",
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
    <div className="flex w-full  relative rounded-lg">
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
