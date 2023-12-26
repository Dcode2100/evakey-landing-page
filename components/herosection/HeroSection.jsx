// import { Button } from "@/components/ui/button";
import Link from "next/link";
import ButtonWave from "../productpage/ButtonWave";

const HeroSection = () => {
  return (
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
      <div className="grid grid-cols-5 gap-4 h-[80%] self-center relative">
        <div className="relative flex justify-center items-center">
          <div className="absolute top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%] p-2">
            <p
              className="transform -r [writing-mode:vertical-lr] [text-orientation:upright] 
            "
            >
              Rubber keychains
            </p>
          </div>
          <div className="flex items-center justify-center p-4 bg-[#FFD1DC] rounded-lg relative h-full w-full">
            <img
              alt="Keychain"
              className="absolute inset-0 w-full h-full object-cover filter blur-lg"
              src="/metal1.jpg"
            />
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%] p-2">
            <p
              className="transform -r [writing-mode:vertical-lr] [text-orientation:upright]
            "
            >
              Metal keychains
            </p>
          </div>
          <div className="flex items-center justify-center p-4 bg-[#FFD1DC] rounded-lg relative h-full w-full">
            <img
              alt="Keychain"
              className="absolute inset-0 w-full h-full object-cover filter blur-lg"
              src="/metal1.jpg"
            />
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%] p-2">
            <p
              className="transform -r [writing-mode:vertical-lr] [text-orientation:upright]
            "
            >
              Silicon WristBands
            </p>
          </div>
          <div className="flex items-center justify-center p-4 bg-[#FFD1DC] rounded-lg relative h-full w-full">
            <img
              alt="Keychain"
              className="absolute inset-0 w-full h-full object-cover filter blur-lg"
              src="/metal1.jpg"
            />
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%] p-2">
            <p
              className="transform -r [writing-mode:vertical-lr] [text-orientation:upright]
            "
            >
              Leather Wallets 
            </p>
          </div>
          <div className="flex items-center justify-center p-4 bg-[#FFD1DC] rounded-lg relative h-full w-full">
            <img
              alt="Keychain"
              className="absolute inset-0 w-full h-full object-cover filter blur-lg"
              src="/metal1.jpg"
            />
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%] p-2">
            <p
              className="transform -r [writing-mode:vertical-lr] [text-orientation:upright]
            "
            >
              Marval Collection
            </p>
          </div>
          <div className="flex items-center justify-center p-4 bg-[#FFD1DC] rounded-lg relative h-full w-full">
            <img
              alt="Keychain"
              className="absolute inset-0 w-full h-full object-cover filter blur-lg"
              src="/metal1.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
