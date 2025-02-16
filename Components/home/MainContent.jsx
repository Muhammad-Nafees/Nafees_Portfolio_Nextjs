"use client";
// import libraries
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
// imports custom commponents
import CustomlinkButton from "../reusable_components/CustomLinkButton";

const MainContent = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="px-8 md:flex items-center justify-between  lg:gap-72">
        {/* <motion.div style={{ scaleX: scrollYProgress ,}} /> */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-250 h-250 flex items-center justify-center"
        >
          <Image
            src="/Nafees_Image.jpeg"
            alt="Nafees Image"
            width={320}
            height={320}
            className="rounded-full"
          />
        </motion.div>

        <div className="lg:pt-0 pt-8 flex flex-col justify-center items-center">
          <p className="py-1 sm:text-0x1 font-semibold text-greyMain">
            Hello,i'm{" "}
          </p>
          <h3 className="py-1 font-bold sm:text-2xl text-[#000000]">
            Muhammad Nafees
          </h3>
          <h4 className="py-1 sm:text-3xl text-greyMain md:text-center text-center">
            Mobile Application developer
          </h4>


          <div className="flex py-4 space-x-4">
            <CustomlinkButton
              href={"./MuhammadNafeesAhmed'sResume.pdf"}
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
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/muhammad-nafees2002"
            >
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
