"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import "@styles/globals.css";
const navItems = ['Products', 'Process', 'Contact Us'];

function Navbar() {
  return (
    <nav className='navbar flex justify-between items-center p-5 md:fixed top-0 w-full bg-text px-12' >
      <a href='#'><Image className="brand_logo max-md:top-1" src="/evakey_logo.svg" width={200} height={80} quality={100} alt='evakeylogo' /></a>
      <div className=''>

      </div>
      <div className='flex text-black space-x-4 max-md:hidden'>
        {navItems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <a href={`#${item.toLowerCase().replace(/\s/g, '')}`} className='hover:text-blue-300 duration-150'>
              {item}
            </a>
          </motion.div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
