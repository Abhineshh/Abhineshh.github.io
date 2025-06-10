"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className=" sm:bg-[url('/images/hero-background.png')] bg-[url('/images/hero-background-mobile.png')] h-screen mt-8 p-11 bg-no-repeat bg-cover">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-red-700 ">Hello, I am </span>
            <br></br>
            <TypeAnimation
              sequence={["Abhinesh V", 1000, "ML Engineer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p> */}
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br bg-red-700 hover:bg-blue-700 text-black"
            >
              Hire Me
            </Link>
            <div className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br bg-red-700 hover:bg-blue-700 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                <a href="/AbhineshResume.pdf" download="AbhineshResume.pdf">
                  Download Resume
                </a>
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 border-2"
        >
       
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
