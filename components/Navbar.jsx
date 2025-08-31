"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "@styles/Navbar.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: "/", name: "Home", isScroll: false },
    { path: "#products", name: "Products", isScroll: true },
    { path: "/about", name: "About", isScroll: false },
    { path: "/contact", name: "Contact", isScroll: false },
  ];

  const handleNavClick = (item) => {
    if (item.isScroll) {
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuActive(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link href="/" aria-label="Homepage" className={styles.logo}>
          <span>EVAKEY</span>
        </Link>

        <div className={styles.navLinks}>
          {navItems.map((item) => {
            const isActive = item.path === pathname;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item)}
                className={`${styles.link} ${isActive ? 'text-primary' : ''}`}
              >
                {item.name}
              </button>
            );
          })}
          
          <Link href="/cart" className={styles.link}>
            <FaShoppingCart className="w-5 h-5" />
          </Link>
          
          <button 
            onClick={() => handleNavClick({ path: "#products", isScroll: true })}
            className={styles.ctaButton}
          >
            Shop Now
          </button>
        </div>

        <button
          className={`${styles.mobileMenuButton} ${menuActive ? styles.active : ""}`}
          onClick={() => setMenuActive(!menuActive)}
          type="button"
          aria-label="Toggle menu"
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${menuActive ? styles.open : ""}`}>
        <div className={styles.mobileNavLinks}>
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavClick(item)}
              className={styles.mobileLink}
            >
              {item.name}
            </button>
          ))}
          <Link
            href="/cart"
            className={styles.mobileLink}
            onClick={() => setMenuActive(false)}
          >
            <div className="flex items-center gap-2">
              <FaShoppingCart className="w-5 h-5" />
              Cart
            </div>
          </Link>
          <button
            onClick={() => handleNavClick({ path: "#products", isScroll: true })}
            className={styles.ctaButton}
          >
            Shop Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
