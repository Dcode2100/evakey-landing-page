"use client"
import { useState } from "react";
import "@styles/contact.scss"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Input from "./Input";
import Modal from "./Modal";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fadeInFromLeft = {
    initial: { opacity: 0, x: -50 }, // Initial state (hidden to the left)
    animate: { opacity: 1, x: 0 },   // Animation state (visible)
  };

  const delays = [0, 0.2, 0.4, 0.6];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here

    // Set formSubmitted to true
    setFormSubmitted(true);

    // Set the modal message
    setModalMessage('Thank you for contacting us. We will get back to you shortly.');

    // Show the modal
    setModalVisible(true);

    console.log('Form data:', formData);
  };




  return (
    <section id="contact" className=" h-[100vh] max-md:h-full  w-full  md:flex md:justify-between max-md:pt-[4rem] md:pt-[8rem] pb-[5rem] px-[3rem] max-sm:px-[2rem] lg:px-[7rem]  bg-text text-background ">
      <div className="contact-details flex flex-col gap-[2rem] md:pt-[4rem] max-md:mb-[7rem] md:max-w-[40%] tracking-widest leading-5">
           <div className="flex flex-col gap-[1.5rem]">
        <motion.h2 className="text-5xl font-medium" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: delays[0] }}>Let's talk</motion.h2>
        <motion.p className="text-sm font-thin tracking-widest leading-5" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: delays[1] }}>
          Looking to make a lasting impression with branded promotional products for your business? We're here to turn your ideas into reality. Get in touch with us today.
        </motion.p>
      </div>

      <div className="email flex flex-col gap-[1rem] ">
        <motion.h3 className="text-3xl font-medium" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: delays[2] }}>Email</motion.h3>
        <motion.a className="text-sm font-thin hover:cursor-pointer hover:text-white" href="mailto:kshemkariplastic@gmail.com" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: delays[3] }}>
          kshemkariplastic@gmail.com
        </motion.a>
      </div>

        <div className="phone flex flex-col gap-[1rem]">
          <motion.h3 className="text-3xl font-medium" {...fadeInFromLeft}>Phone</motion.h3>
          <div className="flex flex-col text-sm font-thin">
            <motion.a className="hover:cursor-pointer hover:text-white" href="tel:9892552558" {...fadeInFromLeft}>
              <span className="font-light">Office</span> - 9892552558
            </motion.a>
            <motion.a className="hover:cursor-pointer hover:text-white" href="tel:8104780513" {...fadeInFromLeft}>
              <span className="font-light">Phone</span> - 8104780513
            </motion.a>
          </div>
        </div>
      </div>
      <div className="form relative md:max-w-[45%] md:flex-end md:pt-[8rem] w-full flex justify-center flex-col gap-[1rem] md:gap-[0.5rem]">
        {modalVisible && formSubmitted &&
          <Modal
            message={modalMessage}
            onClose={() => setModalVisible(false)}
            className="w-[20rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />}
        <form onSubmit={handleSubmit} className="flex flex-col gap-[1.5rem]">
          <div className="flex flex-col ">
            <Input className="text-sm font-extralight" label="Name" handleInputChange={handleInputChange} name="name" />
            <Input className="text-sm font-extralight" label="Email" handleInputChange={handleInputChange} name="email" />
            <Input className="text-sm font-extralight" label="Phone" handleInputChange={handleInputChange} name="phone" />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              className="hide-scrollbar border-b-2 w-full text-secondary font-light bg-transparent border-[#7a7a7a] focus:border-[#d5d5d5] focus:outline-none overflow-y-aut0 py-1 h-20 md:h-30 transition-all duration-300 hover:outline-none"
              onChange={handleInputChange}
              placeholder="Type your message here"
              required
            ></textarea>
          </div>

          <div className="w-full  md:flex md:justify-end relative">
            <button
              type="submit"
              className="bg-white hover:opacity-70 md:w-max max-md:w-full md:px-12  duration-300 transition-opacity text-text text-xl font-extralight py-2 px-4  focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>

      </div>
      {/* <Image
        priority={1}
        className={`${styles.bg} select-none`}
        alt="background polygons"
        src={bgContact}
      />
      <Image
        priority={1}
        className={`${styles.bgRight} md:block hidden select-none`}
        alt="background polygons"
        src={bgContact}
      /> */}
    </section>
  );
}

export default ContactPage