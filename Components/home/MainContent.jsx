'use client';
// import libraries
import React from 'react'
import Image from "next/image";
import Link from "next/link"
import {motion} from "framer-motion"
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { sliceInFromTop } from '@/app/utils/motion';

// import commponents


const MainContent = () => {

    const handleDownload = () => {

        // const applySlice = {
        //     "one": 1,
        //     "two": 2,
        //     "three": 3,
        //     "four": 4,
        //     "five": 5,
        //     "six": 6,
        //     "seven": 7,
        //     "eight": 8,
        //     "nine": 9,
        // };

        // for (const value in applySlice) {
        //     if (applySlice.hasOwnProperty(value)) {
        //         if (value === "one") {
        //             console.log("HAS ONE PROPERTY_______", applySlice.one)
        //         }
        //         console.log("VALUE__________", applySlice[value]);
        //     }
        // }
    }

    
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
        });
      };

    

    return (
        <div className="flex justify-center items-center py-28">
            <div className="px-10 md:flex items-center justify-between xl:w-7/12 lg:w-8/12 md:w-10/12">
                <div className="overflow-hidden w-250 h-250 flex items-center justify-center">
                    <Image
                        src="/Nafees_Image.jpg"
                        alt="Nafees Image"
                        width={250}
                        height={250}
                        className="rounded-full"
                    />
                </div>

                <motion.div variants={sliceInFromTop} className="pt-4 flex flex-col justify-center items-center">
                    <p className="py-1 text-0x1 ">Hello,i'm </p>
                    <h3 className="py-1 font-bold text-2xl">Muhammad Nafees</h3>
                    <h4 className="py-1 text-zinc-500 ">Mobile Application developer</h4>

                    <div className="flex py-2 space-x-4">
                        <Link
                            href='./MuhammadResume-upd.pdf'
                            target='_blank'
                            alt="my cv"
                            rel='noopener noreferrer'
                            className="buttons_style">
                            Download Cv
                        </Link>
                        <Link onClick={() => scrollToSection('contact')} href="#contact"
                          className="buttons_style">
                            Contact Info
                        </Link>
                    </div>

                    <div className="flex pt-2 space-x-4">
                        <Link href="https://www.linkedin.com/in/muhammad-nafees2002">
                            <BsLinkedin fontSize={24} />
                        </Link>
                        <BsGithub fontSize={24} />
                    </div>

                </motion.div>
            </div>
        </div>

    )
}

export default MainContent;
