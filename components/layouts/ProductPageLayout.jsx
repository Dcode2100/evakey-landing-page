import React from "react";
import ProductSidebar from "../ProductSidebar";

const ProductPageLayout = ({ category, routeData }) => {
  return (
    <div className="flex mt-[90px] w-full h-[70vh] relative rounded-lg">
      <div className="leftside-absolute top-[50px] absolute left-[30px] bg-blue-400 h-[100vh] w-[300px]">
        <ProductSidebar />
      </div>
      <div className="w-full">
        <div className="pl-[350px] left-0 top bg-green-400 h-[40vh] w-full">
          <h3>{category}</h3>
          <h2>{routeData.HeroSection.title}</h2>
          <p>{routeData.HeroSection.description}</p>
          <p>{routeData.HeroSection.subDescription}</p>
        </div>
        <div className="pl-[350px] top bg-red-400 w-full h-[70vh]">
          {routeData.CardsSection.map((card, index) => (
            <div key={index}>
              {/* Card content */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPageLayout;
