"use client"
import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Input from "../Input";
import Modal from "../Modal";
import ButtonWave from "../productpage/ButtonWave";
import AOS from "aos";
import "aos/dist/aos.css";
import BgAnimation from "./BgAnimationSquare";

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

  useEffect(() => {
    AOS.init();
  }, []);

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




  return (
    <section
      id="contact"
      className=" h-[100vh]  relative max-md:h-max max-md:pb-[5rem] w-full  md:flex md:justify-between max-md:pt-[4rem] md:pt-[8rem]  px-[3rem] max-sm:px-[2rem] lg:px-[7rem] bg-transparent text-white overflow-hidden "
    >
      <BgAnimation className="bg-text"></BgAnimation>
      <div className="contact-details flex flex-col gap-[2rem] md:pt-[4rem] max-md:mb-[7rem] md:max-w-[40%] tracking-widest leading-5 ">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          className="flex flex-col gap-[1.5rem]"
        >
          <h2 className="text-5xl font-medium">Let&apos;s talk</h2>
          <p className="text-sm font-thin tracking-widest leading-5">
            Looking to make a lasting impression with branded promotional
            products for your business? We&apos;re here to turn your ideas into
            reality. Get in touch with us today.
          </p>
        </div>

        <div
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1700"
          className="email flex flex-col gap-[1rem] "
        >
          <h3 className="text-3xl font-medium">Email</h3>
          <a
            className="text-sm font-thin hover:cursor-pointer hover:text-white"
            href="mailto:kshemkariplastic@gmail.com"
          >
            kshemkariplastic@gmail.com
          </a>
        </div>

        <div
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2500"
          className="phone flex flex-col gap-[1rem]"
        >
          <h3 className="text-3xl font-medium">Phone</h3>
          <div className="flex flex-col text-sm font-thin">
            <a
              className="hover:cursor-pointer hover:text-white"
              href="tel:9892552558"
            >
              <span className="font-light">Office</span> - 9892552558
            </a>
            <a
              className="hover:cursor-pointer hover:text-white"
              href="tel:8104780513"
            >
              <span className="font-light">Phone</span> - 8104780513
            </a>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-out"
        data-aos-duration="2000"
        className="form relative md:max-w-[45%] md:flex-end md:pt-[5rem] w-full flex justify-center flex-col gap-[1rem] md:gap-[0.5rem] overflow-hidden"
      >
        {modalVisible && formSubmitted && (
          <Modal
            message={modalMessage}
            onClose={() => setModalVisible(false)}
            className="w-[20rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-[1.5rem]">
          <div className="flex flex-col ">
            <Input
              className="text-sm font-extralight"
              label="Name"
              handleInputChange={handleInputChange}
              name="name"
            />
            <Input
              className="text-sm font-extralight"
              label="Email"
              handleInputChange={handleInputChange}
              name="email"
            />
            <Input
              className="text-sm font-extralight"
              label="Phone"
              handleInputChange={handleInputChange}
              name="phone"
            />
          </div>

          {/* Quotation */}
          <p className="text-sm font-extralight">Your Quotation</p>
          

          <div className="mb-4">
            <textarea
              name="message"
              className="hide-scrollbar border-b-2 w-full text-secondary font-light bg-transparent border-[#7a7a7a] focus:border-[#d5d5d5] focus:outline-none overflow-y-aut0 py-1 h-20 md:h-30 transition-all duration-300 hover:outline-none"
              onChange={handleInputChange}
              placeholder="Type your message here"
              required
            ></textarea>
          </div>

          <div className="w-full md:flex md:justify-end relative">
            <ButtonWave title={"Submit"} />
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