"use client";
// import libraries
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { easeIn, easeInOut, motion } from "framer-motion";
import CustomlinkButton from "../reusable_components/CustomLinkButton";

const MainContent = () => {
  // const handleDownload = () => {
  //   const applySlice = {
  //     one: 1,
  //     two: 2,
  //     three: 3,
  //     four: 4,
  //     five: 5,
  //     six: 6,
  //     seven: 7,
  //     eight: 8,
  //     nine: 9,
  //   };

  //   for (const value in applySlice) {
  //     if (applySlice.hasOwnProperty(value)) {
  //       if (value === 1) {
  //         console.log("ONE PROPERTY_______");
  //       }
  //       console.log("VALUE__________", applySlice[value]);
  //     }
  //   }
  // };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  };
  // xl:w-9/12 lg:w-8/12 md:w-11/12
  return (
    <div className="flex justify-center items-center py-32">
      <div className="px-10 md:flex items-center justify-between lg:space-x-16">
        <motion.div 
          whileHover={{ scale: 1.05, }}
          className="w-250 h-250 flex items-center justify-center"
        >
          <Image
            src="/Nafees_Image.jpg"
            alt="Nafees Image"
            width={320}
            height={320}
            className="rounded-full"
          />
        </motion.div>

        <div className="lg:pt-0 pt-8 px-4 flex flex-col justify-center items-center">
          <p className="py-1 sm:text-0x1 font-semibold text-greyMain">Hello,i'm </p>
          <h3 className="py-1 font-bold sm:text-2xl text-[#000000]">
            Muhammad Nafees
          </h3>
          <h4 className="py-1 sm:text-3xl text-greyMain md:text-center text-center">
            Mobile Application developer
          </h4>

          <div className="flex py-4 space-x-4">
            <CustomlinkButton
              href={"./MuhammadResume-upd.pdf"}
              alt={"my cv"}
              target={"_blank"}
              extraStyle={
                "w-36 h-12 m-auto py-2 px-4 rounded-full flex items-center justify-center border border-black text-black hover:bg-black hover:text-white transition duration-200 ease-in"
              }
              text={"Download Cv"}
            />
            <CustomlinkButton
              href={"#contact"}
              onClickAction={() => scrollToSection("contact")}
              extraStyle={
                " hover:bg-black hover:text-white border text-white border-black w-32 h-12 text-center justify-center items-center flex  m-auto py-2 px-4 rounded-full bg-[#353535] transition duration-300 ease-in"
              }
              text={"Contact info"}
            />
          </div>

          <div className="flex pt-4 space-x-4">
            <Link target="_blank" href="https://www.linkedin.com/in/muhammad-nafees2002">
              <BsLinkedin fontSize={24} />
            </Link>
            <Link target="_blank" href={"https://github.com/Muhammad-Nafees"}>
              <BsGithub fontSize={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
