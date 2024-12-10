import Link from "next/link";
import Image from "next/image";
import ButtonWave from "../productpage/ButtonWave";
import SimpleSlider from "@components/carousel-slider/SimpleSlider";
import Productcategory from "@components/product-category/Productcategory";

const HeroSection = () => {
  return (
    <>
      <section className="container mx-auto px-4 md:px-[7rem] min-h-screen">
        <div className="grid lg:grid-cols-2 gap-6 pt-[102px] mt-12">
          <div className="flex flex-col justify-center space-y-4 py-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Discover Amazing Keychains
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-zinc-500 dark:text-zinc-400">
              Premium and custom keychains for everyone.
            </p>
            <Link href="/products">
              <ButtonWave title="Explore Products" />
            </Link>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">About EVA KEY</h3>
              <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400">
                We&apos;re a global keychain company providing high-quality, custom
                keychains to customers worldwide.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center w-full lg:pl-[5rem]">
            <div className="w-full max-w-[500px]">
              <SimpleSlider />
            </div>
          </div>
        </div>
      </section>

      <div className="relative px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-center mb-8">Brands That Trust Us</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            <div className="relative h-20 w-20 md:w-[90px]">
              <Image
                src="/assets/ipl.jpg"
                alt="Brand 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-20 w-20 md:w-[90px]">
              <Image
                src="/Assets/abs.jpg"
                alt="Brand 2"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-20 w-20 md:w-[90px]">
              <Image
                src="/Assets/hdfc.png"
                alt="Brand 3"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative h-20 w-20 md:w-[90px]">
              <Image
                src="/Assets/disney.png"
                alt="Brand 4"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-full border-b-2 border-blue-500 bottom-0" />
      </div>

      <div className="px-4 md:px-[5rem] py-12">
        <Productcategory />
      </div>
    </>
  );
};

export default HeroSection;
