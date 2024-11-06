import React from "react";
import ProductSidebar from "../ProductSidebar";
import Image from "next/image";

const ProductPageLayout = ({ category, routeData }) => {

  return (
    <div className="flex mt-[90px] w-full h-[70vh] relative rounded-lg">
      <div className="leftside-absolute top-[50px] absolute left-[30px] bg-blue-400 h-[100vh] w-[300px]">
        <ProductSidebar category={category} />
      </div>
      <div className="w-full">
        <div
          className={`pl-[350px] left-0 top h-[50vh] w-full flex items-center justify-end pr-8 ${routeData?.HeroSection?.backgroundColor}`}
          style={{ backgroundColor: routeData?.HeroSection?.backgroundColor }}
        >
          <div className="w-[25rem] h-[48vh] absolute right-[80px]">
            <Image
              src={routeData?.HeroSection?.imagePath}
              alt=""
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="absolute left-[350px] h-[45vh] w-[38vw] m-6 pt-[3rem]">
            <div></div>
            <h1>{routeData.HeroSection.title}</h1>
            <p className="pt-6 text-[25px] font-bold ">
              {routeData.HeroSection.description}
            </p>
            <p className="pt-3 ">{routeData.HeroSection.subDescription}</p>
            <div className="h-[3rem] w-[30rem] flex gap-4 items-center pt-16 ml-2">
              <button className="bg-[#141327] text-white px-6 py-2 rounded-[25px] h-[7vh] w-[15rem]">
                {routeData.HeroSection.links.ExpressQuote.text}
              </button>
              <button className="border bg-white border-[#1B3764] text-[#1B3764] px-6 py-2 rounded-[25px] h-[7vh] ">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <div className="pl-[350px] top bg-red-400 w-full h-[70vh]"></div>
      </div>
    </div>
  );
};

export default ProductPageLayout;
