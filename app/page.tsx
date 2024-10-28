import React from "react";
import HeroSection from "@/components/herosection/HeroSection"
import ContactPage from "@/components/contactpage/ContactPage"
const Home = () => {
  return (
    <div className="flex flex-col ">
      <HeroSection/>
      <ContactPage/>
    </div>
  );
};

export default Home;
