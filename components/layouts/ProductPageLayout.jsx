import React from "react";
import ProductSidebar from "../ProductSidebar";
import Card from "../Card";
import Image from "next/image";

 const ProductPageLayout = ({ routeData, sidebarData, activeFilter, onFilterChange, onAddToCart }) => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row mt-[60px] lg:mt-[90px] w-full min-h-[70vh] relative rounded-lg">
      <div className="leftside-absolute static lg:absolute lg:top-[50px] lg:left-[30px] bg-white h-auto lg:h-[100vh] w-full lg:w-[300px]">
        <ProductSidebar
          sidebarData={sidebarData}
          onFilterChange={onFilterChange}
          activeFilter={activeFilter}
        />
      </div>
      <div className="w-full">
        <div
          className={`p-4 lg:pl-[350px] left-0 top min-h-[50vh] lg:h-[50vh] w-full flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-end pr-4 lg:pr-8 ${routeData?.HeroSection?.backgroundColor}`}
          style={{ backgroundColor: routeData?.HeroSection?.backgroundColor }}
        >
          <div className="w-full lg:w-[25rem] h-[30vh] lg:h-[48vh] relative lg:absolute lg:right-[80px]">
            <Image
              src={routeData?.HeroSection?.imagePath}
              alt=""
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative lg:absolute lg:left-[330px] h-auto lg:h-[45vh] w-full lg:w-[38vw] mt-4 lg:m-6 pt-4 lg:pt-[3rem]">
            <h1>{routeData.HeroSection.title}</h1>
            <p className="pt-4 lg:pt-6 text-xl lg:text-[30px] font-bold ">
              {routeData.HeroSection.description}
            </p>
            <p className="pt-3 ">{routeData.HeroSection.subDescription}</p>
            <div className="h-auto lg:h-[3rem] w-full lg:w-[30rem] flex flex-col sm:flex-row gap-4 items-center pt-8 lg:pt-16 lg:ml-2">
              <a href={routeData.HeroSection.links.ExpressQuote.url}>
                <button className="bg-[#141327] text-white px-6 py-2 rounded-[25px] h-[7vh] w-full sm:w-[15rem]">
                  {routeData.HeroSection.links.ExpressQuote.text}
                </button>
              </a>
              <button
                onClick={handleScrollDown}
                className="border bg-white border-[#1B3764] text-[#1B3764] px-6 py-2 rounded-[25px] h-[7vh] w-full sm:w-auto"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 lg:pl-[350px] top bg-gray-50 w-full min-h-[70vh]">
          <Card routeData={routeData} activeFilter={activeFilter} onAddToCart={onAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductPageLayout;
