"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Input from "../Input";
import Modal from "../Modal";
import ButtonWave from "../productpage/ButtonWave";
import AOS from "aos";
import "aos/dist/aos.css";
import BgAnimation from "./BgAnimationSquare";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    // Clear cart items on page load/refresh
    const handlePageRefresh = () => {
      localStorage.removeItem("cartItems");
      setCartItems([]);
    };

    handlePageRefresh();

    // Add beforeunload event listener
    window.addEventListener("beforeunload", handlePageRefresh);

    // Load initial cart items and set up listener
    const handleCartUpdate = (event) => {
      console.log("Cart update event received:", event.detail);
      const items = localStorage.getItem("cartItems");
      if (items) {
        setCartItems(JSON.parse(items));
      }
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("beforeunload", handlePageRefresh);
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = document.getElementById("sheetdb-form");
    const formdata = new FormData(form);

    cartItems.forEach(item => {
        formdata.append("items", item.title); 
    });

    fetch("https://sheetdb.io/api/v1/lxgxqk4f57be4", {
      method: "POST",
      body: formdata,
    })
      .then((response) => response.json())
      .then(() => {
        setFormSubmitted(true);
        setModalMessage(
          "Thank you for contacting us. We will get back to you shortly."
        );
        setModalVisible(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("Error submitting form", error);
      });
  };

  return (
    <section
      id="contact"
      className="h-[100vh] relative max-md:h-max max-md:pb-[5rem] w-full md:flex md:justify-between max-md:pt-[4rem] md:pt-[8rem] px-[3rem] max-sm:px-[2rem] lg:px-[7rem] bg-transparent text-white overflow-hidden"
    >
      <BgAnimation className="bg-text"></BgAnimation>
      <div className="contact-details flex flex-col gap-[2rem] md:pt-[4rem] max-md:mb-[7rem] md:max-w-[40%] tracking-widest leading-5">
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
          className="email flex flex-col gap-[1rem]"
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
            className="w-[20rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black"
          />
        )}
        <form
          id="sheetdb-form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-[1.5rem]"
        >
          <div className="flex flex-col">
            <Input
              className="text-sm font-extralight"
              label="Name"
              handleInputChange={handleInputChange}
              name="name"
              value={formData.name}
            />
            <Input
              className="text-sm font-extralight"
              label="Email"
              handleInputChange={handleInputChange}
              name="email"
              value={formData.email}
            />
            <Input
              className="text-sm font-extralight"
              label="Phone"
              handleInputChange={handleInputChange}
              name="phone"
              value={formData.phone}
            />
          </div>
          <p className="text-sm font-extralight">Your Quotation</p>
          <div className="flex flex-wrap gap-4 p-4 border-2 border-[#7a7a7a] rounded-lg min-h-[100px]">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="w-[10vb] group relative flex flex-col items-center"
              >
                <div className="relative w-20 h-20">
                  <Image
                    src={item.imagePath}
                    alt={item.title}
                    fill
                    className="object-contain pl-[7px]"
                  />
                  <button
                    onClick={() => {
                      const updatedCart = cartItems.filter(
                        (_, i) => i !== index
                      );
                      setCartItems(updatedCart);
                      localStorage.setItem(
                        "cartItems",
                        JSON.stringify(updatedCart)
                      );
                      const event = new CustomEvent("cartUpdated", {
                        detail: updatedCart,
                      });
                      window.dispatchEvent(event);
                    }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ×
                  </button>
                </div>
                <p className="text-sm mt-2 break-words flex justify-center text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              className="hide-scrollbar border-b-2 w-full text-secondary font-light bg-transparent border-[#7a7a7a] focus:border-[#d5d5d5] focus:outline-none overflow-y-auto py-1 h-20 md:h-30 transition-all duration-300"
              onChange={handleInputChange}
              placeholder="Type your message here"
              value={formData.message}
              required
            ></textarea>
          </div>
          <div className="w-full md:flex md:justify-end relative">
            <ButtonWave title={"Submit"} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
