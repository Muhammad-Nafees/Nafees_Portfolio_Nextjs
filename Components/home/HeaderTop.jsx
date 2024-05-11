"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navbarData } from "./../../app/data/navbardata";
import { motion } from "framer-motion";

const HeaderTop = () => {
  const [nav, setNav] = useState(false);

  const navbarHandle = () => {
    setNav(!nav);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-8  bg-[#FBFBFB] justify-center flex pt-5">
      <div className="header_top">
        <div className="flex items-center">
          <div className="w-8 h-8 mx-2.5 bg-blackMain flex justify-center items-center">
            <h2 className="font-serif text-white">N</h2>
          </div>
          <div>
            <h3 className="text-black font-bold text-lg">Muhammad Nafees</h3>
          </div>
        </div>

        <nav>
          <ul className="hidden md:flex items-center space-x-4">
            {navbarData.map((value) => (
              <li className="text-blackMain text-lg rounded-md px-4 py-2">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <Link
                    onClick={() => scrollToSection(value.scrollSectionName)}
                    href={value.href}
                  >
                    {value.name}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </nav>

        <div onClick={navbarHandle} className="md:hidden z-10">
          {nav ? (
            <AiOutlineClose color="white" />
          ) : (
            <AiOutlineMenu color="black" />
          )}
        </div>

        {/* Mobile Menu */}

        <ul
          className={
            nav
              ? "md:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col ease-in duration-300 bg-black h-screen w-full justify-center items-center"
              : "md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col ease-in duration-300 bg-black h-screen w-full justify-center items-center"
          }
        >
          <li className="text-white  px-4 py-2">
            <Link onClick={() => scrollToSection("/")} href="#/">
              About
            </Link>
          </li>
          <li className="text-white  px-4 py-2">
            <Link
              onClick={() => scrollToSection("experience")}
              href="#exprience"
            >
              Experience
            </Link>
          </li>
          <li className="text-white px-4 py-2">
            <Link onClick={() => scrollToSection("project")} href="#project">
              projects
            </Link>
          </li>
          <li className="text-white px-4 py-2">
            <Link onClick={() => scrollToSection("contact")} href="#contacts">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;