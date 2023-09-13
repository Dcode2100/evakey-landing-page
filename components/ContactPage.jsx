"use client"

import { useState, useEffect, useRef } from "react";
import "@styles/contact.scss"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import Mail from "./icons/mail";
import Image from "next/image";
import bgContact from "@public/bg-contact.webp";
import Input from "./Input";
import Modal from "./Modal";

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


  // const ref = useRef(null);
  // useEffect(() => {
  //   const el = ref.current;
  //   gsap.fromTo(
  //     el,
  //     { y: "-200px", opacity: 0, scale: 2.5 },
  //     {
  //       y: "0px",
  //       scale: 1,
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: el,
  //         start: "top 100%",
  //         end: "bottom 90%",
  //         scrub: true,
  //         toggleAction: "restart pause resume pause",
  //       },
  //     }
  //   );
  // }, []);

  return (
    <section id="contact" className=" h-[100vh] max-md:h-full w-full  md:flex md:justify-between pt-[4rem] md:items-center  pb-[5rem] px-[3rem] md:px-[7rem]  bg-text text-background ">
      <div className="contact-details flex flex-col gap-[2rem] max-md:mb-[7rem] md:max-w-[40%] tracking-widest leading-5">
        <div className="flex flex-col gap-[1rem]">
          <h2 className="text-3xl font-medium">Let's talk</h2>
          <p className="text-sm font-thin tracking-widest leading-5">Looking to make a lasting impression with branded promotional products for your business? We're here to turn your ideas into reality. Get in touch with us today, and let's collaborate to bring your vision to life</p>
        </div>

        <div className="email flex flex-col gap-[1rem] ">
          <h3 className="text-3xl font-medium">Email</h3>
          <a className="text-sm font-thin hover:cursor-pointer hover:text-white" href="mailto:kshemkariplastic@gmail.com"> kshemkariplastic@gmail.com</a>
        </div>
        <div className="phone flex flex-col gap-[1rem]">
          <h3 className="text-3xl font-medium">Phone</h3>
          <div className="flex flex-col text-sm font-thin">
            <a className="hover:cursor-pointer hover:text-white" href="tel:9892552558"><span className="font-light">Office</span> - 9892552558</a>
            <a className="hover:cursor-pointer hover:text-white" href="tel:8104780513"><span className="font-light">Phone</span> - 8104780513</a>
          </div>
        </div>
      </div>
      <div className="form relative md:max-w-[50%] w-full flex justify-center flex-col gap-[1rem]">
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
              className="hide-scrollbar border-b-2 w-full text-secondary font-light bg-transparent border-[#7a7a7a] focus:border-[#d5d5d5] focus:outline-none overflow-y-aut0 py-1 h-20 transition-all duration-300 hover:outline-none"
              onChange={handleInputChange}
              placeholder="Type your message here"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white hover:opacity-70 duration-300 transition-opacity text-text text-xl font-extralight py-2 px-4  focus:outline-none"
          >
            Submit
          </button>
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