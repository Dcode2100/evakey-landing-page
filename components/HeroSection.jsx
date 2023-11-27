// import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="container md:px-[7rem] mx-auto grid lg:grid-cols-2 gap-6 p-6 h-[100vh]">
      <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Discover Amazing Keychains
        </h1>
        <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400">
          Premium and custom keychains for everyone.
        </p>
        <Link href="#">
          <button className="w-full sm:w-auto" variant="default">
            Shop Now
          </button>
        </Link>
        <div className="space-y-2">
          <h3 className="text-lg font-medium">About EVA KEY</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            We're a global keychain company providing high-quality, custom
            keychains to customers worldwide.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div className="flex items-center justify-center p-4 bg-[#FFD1DC] rounded-lg">
          <img
            alt="Keychain"
            className="object-contain"
            height="50"
            src="/placeholder.svg"
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
            width="50"
          />
        </div>
        <div className="flex items-center justify-center p-4 bg-[#D1FFD1] rounded-lg">
          <img
            alt="Keychain"
            className="object-contain"
            height="50"
            src="/placeholder.svg"
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
            width="50"
          />
        </div>
        <div className="flex items-center justify-center p-4 bg-[#D1D1FF] rounded-lg">
          <img
            alt="Keychain"
            className="object-contain"
            height="50"
            src="/placeholder.svg"
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
            width="50"
          />
        </div>
        <div className="flex items-center justify-center p-4 bg-[#FFD1D1] rounded-lg">
          <img
            alt="Keychain"
            className="object-contain"
            height="50"
            src="/placeholder.svg"
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
            width="50"
          />
        </div>
        <div className="flex items-center justify-center p-4 bg-[#FFD1FF] rounded-lg">
          <img
            alt="Keychain"
            className="object-contain"
            height="50"
            src="/placeholder.svg"
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
            width="50"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
