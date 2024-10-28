"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Datas } from "./Carouselimg";
import Image from "next/image";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {Datas.map((data, index) => (
        <div key={index} className="">
          <Image src={data.image} alt="img" fill className="max-w-full max-h-full object-contain" />
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
