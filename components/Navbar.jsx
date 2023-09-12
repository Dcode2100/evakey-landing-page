"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
const navItems = ['Products', 'Process', 'Contact Us'];

function Navbar() {
  return (
    <nav className='flex justify-between items-center p-5' style={{ width: '70vw' }}>
      <a href='#'><Image src="/EVAKEY.png" width={200} height={80} alt='evakeylogo'/></a>
      <div className='flex text-black space-x-4'>
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
