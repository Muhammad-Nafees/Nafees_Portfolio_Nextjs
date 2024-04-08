import React from 'react'
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";



const MainContentAbout = () => {

    return (
        <div className='py-20 flex flex-col justify-center items-center'>
            <div className='w-full lg:flex justify-between items-center lg:w-11/12'>
                <div className="w-250 h-250 flex items-center justify-center">
                    <Image
                        src="/Nafees_Image.jpg"
                        alt="Nafees Image"
                        width={400}
                        height={400}
                        className="rounded-xl"
                    />
                </div>

                <div className='px-8 lg:w-8/12'>
                    <div className='py-4 flex flex-col md:flex-row lg:space-y-4 space-y-4 md:space-x-4 items-center justify-center'>

                        <div className='bg-white border w-11/12 lg:w-7/12 sm:w-5/12 h-32 rounded-3xl flex flex-col justify-center items-center'>
                            <BsLinkedin />
                            <p className='text-black font-bold'>Experience</p>
                            <p className='text-black'>1 year</p>
                            <p className='text-black'>Mobile Application development</p>
                        </div>

                        <div className='bg-white border w-11/12 sm:w-5/12 lg:w-7/12 h-32 rounded-3xl flex flex-col justify-center items-center'>
                            <BsLinkedin />
                            <p className='text-black font-bold'>Education</p>
                            <p>Intermediate Degree</p>
                        </div>

                    </div>

                    <div className='bg-red-900'>
                        <p className='text-white w-11/12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>

                </div>

            </div>
        </div>
    )
};

export default MainContentAbout;
