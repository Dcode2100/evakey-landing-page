"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import styles from "@styles/Navbar.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);

  const navItems = useMemo(
    () => [
      { path: "/", name: "Home" },
      { path: "/products/bag", name: "Products" },
    ],
    []
  );

  return (
    <nav className="navbar flex justify-between items-center py-[1.5rem] md:py-[1.5rem] max-xs:px-[1.5rem] md:fixed top-0 w-full bg-transparent bg-white px-6 md:px-[7rem] z-[100]">
      <Link href="/" aria-label="Homepage">
        <Image
          className="brand_logo max-md:top-0.5"
          src="/evakey/evakey_logo.svg"
          width={200}
          height={80}
          quality={100}
          alt="evakeylogo"
        />
      </Link>

      <div className="flex text-black space-x-4">
        <div className="border border-stone-800/90 p-[0.4rem] max-md:hidden rounded-lg sticky top-4 z-[100] bg-stone-900/80 backdrop-blur-md">
          <nav className="flex gap-2 relative justify-start w-full z-[100] rounded-lg">
            <ul className="flex space-x-4">
              {navItems.map((item) => {
                const isActive = item.path === pathname;

                return (
                  <li key={item.path}>
                    <Link
                      className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                        isActive ? "text-zinc-100" : "text-zinc-400"
                      }`}
                      data-active={isActive}
                      href={item.path}
                      onMouseOver={() => setHoveredPath(item.path)}
                      onMouseLeave={() => setHoveredPath(pathname)}
                    >
                      <span>{item.name}</span>
                      {item.path === hoveredPath && (
                        <div
                          className="absolute bottom-0 left-0 h-full bg-stone-800/80 rounded-md -z-10"
                          aria-hidden="true"
                          style={{ width: "100%" }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className={`${styles.box} ${menuActive ? styles.active : ""}`}
            onClick={() => setMenuActive(!menuActive)}
            type="button"
            aria-label="Toggle menu"
          >
            <div className={styles.hamburguer}>
              {/* Your hamburger menu content */}
            </div>
          </button>
        </div>
      </div>
      <aside
        className={`${styles.mobile} ${
          menuActive ? styles.on : styles.off
        } md:hidden bg-opacity-20`}
      >
        <div
          className={`flex-col md:hidden gap-3 justify-end ${
            menuActive && "flex"
          } text-right m-0 relative z-10`}
        >
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <div
                onClick={() => setMenuActive(!menuActive)}
                className="text-xl py-2 text-center cursor-pointer hover:scale-[1.07] duration-200"
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
