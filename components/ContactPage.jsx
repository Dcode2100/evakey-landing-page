"use client"
import { useEffect, useRef } from "react";
import styles from "@styles/contact.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import Mail from "./icons/mail";
import Image from "next/image";
import bgContact from "@public/bg-contact.webp";
gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el,
      { y: "-200px", opacity: 0, scale: 2.5 },
      {
        y: "0px",
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          end: "bottom 90%",
          scrub: true,
          toggleAction: "restart pause resume pause",
        },
      }
    );
  }, []);

  return (
    <section id="contact" className="mt-72 pt-20 relative md:pb-40 pb-20">
      <div
        className="md:px-20 px-4 mx-auto text-center relative z-20"
        ref={ref}
      >
        <h3 className="text-tertiary text-lg">Are you interested advertising your product the right way</h3>
        <h2 className="md:text-5xl text-4xl text-center text-blue-600 font-bold mt-4">
          Contact Us.
        </h2>
        <p className="md:my-10 my-6 max-w-xl mx-auto text-secondary leading-relaxed">
          We are open to partnerships, projects, {"  "}
          <span className="text-primary"> { }contracts</span>
          <span> </span>
          or even something more! You can get in touch with me through my
          <a
            className="hover:text-tertiary hover:underline ml-2"
            href="mailto:gokuladhikari2000@gmail.com"
          >
            Email
          </a>
          ,
          <a
            className="hover:text-tertiary hover:underline mx-2"
            href="https://www.linkedin.com/in/dikshantsolanki214/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          or
          <a
            className="text-tertiary hover:underline ml-2"
            href="tel:8097226289"
          >
            phone
          </a>
        </p>
        <a
          className="button mt-20 mx-auto cursor-pointer"
          href="mailto:gokuladhikari2000@gmail.com"
        >
          {" "}
          {/* <Mail />  */}
          Contact Us
        </a>
      </div>
      <Image
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
      />
    </section>
  );
}
