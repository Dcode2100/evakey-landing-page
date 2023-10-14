"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from "@styles/Navbar.module.scss"
import { usePathname } from "next/navigation";
import Link from "next/link";
import "@styles/globals.css";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/products",
    name: "Now",
  },
  {
    path: "/guestbook",
    name: "Guestbook",
  },
  {
    path: "/writing",
    name: "Writing",
  },
];
function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  let pathname = usePathname() || "/";

  if (pathname.includes("/writing/")) {
    pathname = "/writing";
  }
  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <nav className='navbar flex justify-between items-center  py-[1.5rem] md:py-[1.5rem]  max-xs:px-[1.5rem] md:fixed top-0 w-full bg-transparent md:bg-[#e6fcfe] px-6 md:px-[7rem] z-[100]' >
      <a href='#'><Image className="brand_logo max-md:top-0.5" src="/evakey_logo.svg" width={200} height={80} quality={100} alt='evakeylogo' /></a>

      <div className='flex text-black space-x-4 '>
        <div className="border border-stone-800/90 p-[0.4rem] max-md:hidden rounded-lg  sticky top-4 z-[100] bg-stone-900/80 backdrop-blur-md">
          <nav className="flex gap-2 relative justify-start w-full z-[100]  rounded-lg">
            {navItems.map((item, index) => {
              const isActive = item.path === pathname;

              return (
                <Link
                  key={item.path}
                  className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${isActive ? "text-zinc-100" : "text-zinc-400"
                    }`}
                  data-active={isActive}
                  href={item.path}
                  onMouseOver={() => setHoveredPath(item.path)}
                  onMouseLeave={() => setHoveredPath(pathname)}
                >
                  <span>{item.name}</span>
                  {item.path === hoveredPath && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-full bg-stone-800/80 rounded-md -z-10"
                      layoutId="navbar"
                      aria-hidden="true"
                      style={{
                        width: "100%",
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        stiffness: 130,
                        damping: 9,
                        duration: 0.3,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>



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
            ? `${styles.mobile} ${styles.on} bg-opacity-20 md:hidden`
            : `${styles.mobile} ${styles.off} md:hidden `
        }
      >
        <div
          className={`flex-col md:hidden gap-3 justify-end ${menuActive && "flex"} text-right m-0 relative z-10`}
        >
          {["Products", "Process", "Contact Us"].map((menuItem, index) => (
            <div
              key={index}
              onClick={() => setMenuActive(!menuActive)}
              className="text-xl py-2 text-center cursor-pointer hover:scale-[1.07] duration-200"
              href={`#${menuItem.toLowerCase().replace(/\s/g, "-")}`}
            >
              {menuItem}
            </div>
          ))}
        </div>
      </aside>

    </nav>
  );
}

export default Navbar;
