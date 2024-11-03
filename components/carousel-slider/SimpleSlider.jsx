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
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false
        }
      }
    ]
  };


  return (
    <div className="w-full">
      <Slider {...settings}>
        {Datas.map((data, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={data.image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-contain rounded-xl"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
