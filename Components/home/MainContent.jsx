"use client";
// import libraries
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";


const MainContent = () => {
  const handleDownload = () => {
    const applySlice = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    };

    for (const value in applySlice) {
      if (applySlice.hasOwnProperty(value)) {
        if (value === 1) {
          console.log("ONE PROPERTY_______");
        }
        console.log("VALUE__________", applySlice[value]);
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  };



  return (
    <div className="flex justify-center items-center py-32">
      <div className="px-10 md:flex items-center justify-between xl:w-8/12 lg:w-8/12 md:w-10/12">
        <motion.div
         whileHover={{scale:1.1}}          
         className="overflow-hidden w-250 h-250 flex items-center justify-center"
        >
          <Image
            src="/Nafees_Image.jpg"
            alt="Nafees Image"
            width={300}
            height={300}
            className="rounded-full"
          />
        </motion.div>

        <div className="pt-4 px-4 flex flex-col justify-center items-center">
          <p className="py-1 text-0x1 text-greyMain">Hello,i'm </p>
          <h3 className="py-1 font-bold text-2xl text-[#000000]">
            Muhammad Nafees
          </h3>
          <h4 className="py-1 text-3xl text-greyMain md:text-center">
            Mobile Application developer
          </h4>

          <div className="flex py-4 space-x-4">
            <Link
              href="./MuhammadResume-upd.pdf"
              target="_blank"
              alt="my cv"
              rel="noopener noreferrer"
              className="buttons_style"
            >
              Download Cv
            </Link>
            <Link
              onClick={() => scrollToSection("contact")}
              href="#contact"
              className="buttons_style"
            >
              Contact Info
            </Link>
          </div>

          <div className="flex pt-4 space-x-4">
            <Link href="https://www.linkedin.com/in/muhammad-nafees2002">
              <BsLinkedin fontSize={24} />
            </Link>
            <Link href={"https://www.github.com"}>
              <BsGithub fontSize={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
