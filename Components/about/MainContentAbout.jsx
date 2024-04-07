import React from 'react'
import Image from "next/image";
import { BsLinkedin, BsGithub } from "react-icons/bs";


const MainContentAbout = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex items-cente w-10/12'>
                <Image
                    src="/Nafees_Image.jpg"
                    alt="Nafees Image"
                    width={400}
                    height={400}
                    className="rounded-xl"
                />

                <div className='flex'>
                    <div className='border w-6/12 py-10 px-10 rounded-3xl flex flex-col justify-center h-2/6 items-center'>
                        <BsLinkedin />
                        <p>Experience</p>
                        <p>1 year</p>
                        <p>Mobile Application development</p>
                    </div>
                    <div className='border w-6/12 py-10 px-10 rounded-3xl flex flex-col justify-center items-center'>
                        <BsLinkedin />
                        <p>Education</p>
                        <p>Intermediate Degree</p>
                        {/* <p></p> */}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default MainContentAbout;
