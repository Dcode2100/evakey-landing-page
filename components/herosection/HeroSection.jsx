// import { Button } from "@/components/ui/button";
import Link from "next/link";
import ButtonWave from "../productpage/ButtonWave";
import SimpleSlider from "@components/carousel-slider/SimpleSlider";
import Productcategory from "@components/product-category/Productcategory";

const HeroSection = () => {
  return (
    <>
      <section className="container md:px-[7rem] mx-auto grid lg:grid-cols-2 gap-6 p-6 h-[100vh] pt-[102px]">
        <div className="flex flex-col justify-center space-y-4 ">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Discover Amazing Keychains
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400">
            Premium and custom keychains for everyone.
          </p>
          <Link href="/products">
            <ButtonWave title="Expore Products" />{" "}
          </Link>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">About EVA KEY</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              We're a global keychain company providing high-quality, custom
              keychains to customers worldwide.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center align-center space-y-4 rad ">
          <SimpleSlider />
        </div>
      </section>
      <div className="flex justify-center m-7 X ">
        <div className="flex flex-col items-center justify-center w-[140vb] ">
          <h3 className="text-lg font-bold mb-4 p-1">Brands That Trust Us</h3>
          <div className="flex justify-between w-full  ">
            <img
              src="https://www.jagranimages.com/images/newimg/21082020/21_08_2020-ipl_logo_20650553.jpg"
              className="h-13 w-[90px]"
            />
            <img
              src="https://www.centralagsupply.com/wp-content/uploads/2017/08/020.jpg"
              className="h-13 w-[90px]"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSEpAAy4WojeOlFUjE84IxCMIl3_sK8OiOeg&s"
              className="h-13 w-[90px]"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaoGrllCeBLDClTWac0LubkWuF8mysWCGMBg&s"
              className="h-13 w-[90px]"
            />
          </div>
        </div>
        <div className="absolute w-full border-b-2 border-blue-500 mt-[23vh]"/>
      </div>
      <div className="h-[100vh] relative m-8 px-[5rem] ">
      <Productcategory/>
      </div>
    </>
  );
};

export default HeroSection;
