<!-- EVA KEY - A BUSINESS LANDING FOR SHOWING OFF THE MISSION, VISION AND CATELOG OF PRODUCTS EVAKEY OWNS. -->

<!-- HEROSECTION v1->  -->
<!-- "use client";
import React, { useRef, useState, useEffect } from "react";
import ButtonWave from "./ButtonWave";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const CircleClass = ` border-2 rounded-full bg-white h-[15rem] w-[15rem]  `;

const ImageSliderHero = () => {
  return (
    // Your JSX (converted HTML) code here
    <React.Fragment>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        onDurationChange={1}
        modules={[EffectFade, Navigation, Pagination]}
        className="myswiper swiper-wrapper "
      >
        <SwiperSlide className="main swiper-slide" id="glacier">
          <div className=" flex justify-between relative flex-col gap-16 ">
            <div
              className={`${CircleClass}  ml-[5rem] relative overflow-hidden `}
            >
              <Image src={"/rubberkeychain/MC-15.jpg"} quality={100} fill />
            </div>
            <div
              className={`${CircleClass} ml-[23rem] top-[25%] absolute overflow-hidden `}
            >
              <div className="relative w-full h-full  overflow-hidden ">
                <Image src={"/rubberkeychain/MC-9.jpg"} quality={100} fill />
              </div>
            </div>
            <div
              className={`${CircleClass} ml-[5rem] relative overflow-hidden `}
            >
              <Image src={"/rubberkeychain/MC-10.jpg"} quality={100} fill />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main swiper-slide" id="coral">
          <div className=" flex justify-between relative flex-col gap-16 ">
            <div
              className={`${CircleClass}  ml-[5rem] relative overflow-hidden  `}
            >
              <Image src={"/rubberkeychain/MC-3.jpg"} quality={100} fill />
            </div>
            <div
              className={`${CircleClass} ml-[23rem] top-[25%] absolute overflow-hidden `}
            >
              <div className="relative w-full h-full  overflow-hidden ">
                <Image src={"/rubberkeychain/MC-6.jpg"} quality={100} fill />
              </div>
            </div>
            <div
              className={`${CircleClass} ml-[5rem] relative overflow-hidden `}
            >
              <Image src={"/rubberkeychain/MC-24.png"} quality={100} fill />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="swiper-pagination"></div>
    </React.Fragment>
  );
};

const HeroSection = () => {
  const CircleClass = ` border-2 rounded-full bg-secondary h-[15rem] w-[15rem] `;
  return (
    <section className="h-[100vh] md:px-[7rem] bg-white text-black hidden relative sm:flex justify-center items-center sm:pt-[6.5rem]">
      <div className="left-container w-1/2 gap-9 relative flex flex-col justify-center ">
        <div className="brand&punchline text-5xl flex flex-col ">
          <div className="flex gap-3">
            <Image
              className="brand_logo "
              src="/evakey_logo.svg"
              width={220}
              height={80}
              quality={100}
              alt="Logo"
            />
            <h1 className=""> YOUR PARTNER IN </h1>
          </div>
          <p className="ml-[-0.2rem]">CRAFTING PROMOTIONS</p>
        </div>
        <div className="secondpunchline relative flex text-justify flex-col text-xl max-w-[28rem]">
          <p className="">
            {
              "Unlock brand brilliance : Customized keychains labels wristband's (PVC, silicon, and more infused with our innovation.)"
            }
          </p>
        </div>
        <div className="email-us flex  ">
          <div className="border-2 flex py-5 px-10 bg-text text-secondary  gap-7 items-center rounded-3xl">
            Get catelog on your mail
            <ButtonWave title={"Contact Us"} className="roundex-sm" />
          </div>
        </div>
      </div>
      <div
        className="right-container w-1/2 flex items-center 
       relative"
      >
        <ImageSliderHero />
      </div>
    </section>
  );
};

export default HeroSection; -->
