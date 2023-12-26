import React from "react";
import "@styles/globals.css";
import HeroSection  from "@components/herosection/HeroSection";import ContactPage from "@components/contactpage/ContactPage";
"@components/HeroSection"
const Home = () => {
  return (
    <div className="flex flex-col ">
      <HeroSection />
      <ContactPage/>
    </div>
  );
};

export default Home;
