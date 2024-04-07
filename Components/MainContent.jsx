import React from 'react'
import Image from "next/image";

const MainContent = () => {
    return (
        <div className="flex justify-center items-center h-screen">
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
                    <p className="py-1">Hello,i'm </p>
                    <h3 className="py-1">Muhammad Nafees</h3>
                    <h4 className="py-1">Mobile Application developer</h4>

                    <div className="flex space-x-4">
                        <button className="rounded-3xl text-white bg-slate-400 py-2 px-4">
                            Download Cv
                        </button>
                        <button className="rounded-3xl text-white bg-slate-400 py-2 px-4">
                            Contact Info
                        </button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default MainContent
