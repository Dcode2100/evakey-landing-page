"use client"
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
const CircleClass = ` border-2 rounded-full bg-white h-[15rem] w-[15rem]  `

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
          <div className=' flex justify-between relative flex-col gap-16 '>
            <div className={`${CircleClass}  ml-[5rem] relative overflow-hidden `}>
              <Image src={"/rubberkeychain/MC-15.jpg"} quality={100} fill />
            </div>
            <div className={`${CircleClass} ml-[23rem] top-[25%] absolute overflow-hidden `}>
              <div className="relative w-full h-full  overflow-hidden ">
                <Image src={"/rubberkeychain/MC-9.jpg"} quality={100} fill />
              </div>
            </div>
            <div className={`${CircleClass} ml-[5rem] relative overflow-hidden `}>
              <Image src={"/rubberkeychain/MC-10.jpg"} quality={100} fill />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main swiper-slide" id="coral">
          <div className=' flex justify-between relative flex-col gap-16 '>
            <div className={`${CircleClass}  ml-[5rem] relative overflow-hidden  `}>
              <Image src={"/rubberkeychain/MC-3.jpg"} quality={100} fill />
            </div>
            <div className={`${CircleClass} ml-[23rem] top-[25%] absolute overflow-hidden `}>
              <div className="relative w-full h-full  overflow-hidden ">
                <Image src={"/rubberkeychain/MC-6.jpg"} quality={100} fill />
              </div>
            </div>
            <div className={`${CircleClass} ml-[5rem] relative overflow-hidden `}>
              <Image src={"/rubberkeychain/MC-24.png"} quality={100} fill />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="swiper-pagination"></div>
    </React.Fragment>
  );
};

export default ImageSliderHero;
