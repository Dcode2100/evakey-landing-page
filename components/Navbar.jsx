"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from "@styles/Navbar.module.scss"

import { gsap } from "gsap";
import "@styles/globals.css";

const navItems = ['Products', 'Process', 'Contact Us'];

function Navbar() {
  const [menuActive, setMenuActive] = useState(true);

  useEffect(() => {
    const timeLine = gsap.timeline({ defaults: { ease: "power4.out" } });
    timeLine
      .fromTo(
        `.${styles.bar}`,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .fromTo(
        `.${styles.link}`,
        { opacity: 0, stagger: 0.1 },
        { opacity: 1, stagger: 0.2, duration: 0.4 },
        "<.5"
      );
    document.body.addEventListener('scroll', handleScroll);


    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY) {
      setMenuActive(false);
      console.log(scrollY, "there is a scroll")
    }
  };

  return (
    <nav className='navbar flex justify-between items-center  py-8 md:py-[2.5rem]  max-xs:px-[1.5rem] md:fixed top-0 w-full bg-transparent md:bg-[#e6fcfe] px-12 md:px-[7rem] z-[100]' >
      <a href='#'><Image className="brand_logo max-md:top-1" src="/evakey_logo.svg" width={200} height={80} quality={100} alt='evakeylogo' /></a>
      <div className=''>

      </div>
      <div className='flex text-black space-x-4 '>
        {navItems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='max-md:hidden'
            transition={{ delay: index * 0.2 }}
          >
            <a href={`#${item.toLowerCase().replace(/\s/g, '')}`} className='text-text duration-150'>
              {item}
            </a>
          </motion.div>
        ))}
        <div className=" md:hidden flex items-center ">
          <button
            className={
              menuActive
                ? `${styles.box} ${styles.active}`
                : `${styles.box}`
            }
            onClick={() => setMenuActive(!menuActive)}
            type="button"
            aria-label="hamburguer menu"
          >
            <div className={`${styles.hamburguer} md:hidden`}>

            </div>
          </button>
        </div>
      </div>
      <aside
        className={
          menuActive
            ? `${styles.mobile} ${styles.on}  bg-opacity-20 md:hidden`
            : `${styles.mobile} ${styles.off} md:hidden`
        }
      >
        <div className={`flex-col gap-3 justify-end  ${menuActive && "flex"}text-right m-0  relative z-10`}>
          <div
            onClick={() => setMenuActive(!menuActive)}
            className="text-xl py-2 text-center cursor-pointer hover:scale-[1.07] duration-200 "
            href="#about"
          >
            Products
          </div>
          <div
            onClick={() => setMenuActive(!menuActive)}
            className="text-xl py-2 text-center cursor-pointer hover:scale-[1.07] duration-200"
            href="#knowlodge"
          >
            Process
          </div>

          <div
            onClick={() => setMenuActive(!menuActive)}
            className="text-xl py-2 text-center cursor-pointer hover:scale-[1.07] duration-200"
            href="#contact"
          >
            Contact Us
          </div>
        </div>
        <div className="noise"></div>
      </aside>

    </nav>
  );
}

export default Navbar;
