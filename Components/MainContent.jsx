import React from 'react'
import Image from "next/image";
import { BsLinkedin, BsGithub } from "react-icons/bs";
const MainContent = () => {

    return (
        <div className="flex justify-center items-center py-40">
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

                <div className="flex flex-col justify-center items-center">
                    <p className="py-1 text-0x1 ">Hello,i'm </p>
                    <h3 className="py-1 font-bold text-2xl">Muhammad Nafees</h3>
                    <h4 className="py-1 text-zinc-500 ">Mobile Application developer</h4>

                    <div className="flex py-2 space-x-4">
                        <button className="buttons_style">
                            Download Cv
                        </button>
                        <button className=" buttons_style">
                            Contact Info
                        </button>
                    </div>

                    <div className="flex pt-2 space-x-4">
                        <BsLinkedin fontSize={24} />
                        <BsGithub fontSize={24} />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default MainContent;
