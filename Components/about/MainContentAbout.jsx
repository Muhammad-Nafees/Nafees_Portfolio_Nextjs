import React from "react";
import Image from "next/image";

const MainContentAbout = () => {
  return (
    <div className="">
      <div className="py-20 w-full m-auto lg:flex justify-between items-center lg:w-10/12">
        <div className="w-4/5 h-4/5 sm:w-2/5 m-auto flex items-center justify-center">
          <Image
            src="/Nafees_Image.jpg"
            alt="Nafees Image"
            width={400}
            height={400}
            className="rounded-xl"
          />
        </div>
    
        <div className="px-8 lg:w-10/12">
          <div className="py-10 pb-10 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center">
        
            <div className="border px-12 h-36 rounded-3xl flex flex-col justify-center items-center">
              <Image
                width={25}
                alt="experience img"
                height={25}
                src={require("../../public/experience.png")}
              />
              <p className="text-black font-bold">Experience</p>
              <p className="text-black">1+ year</p>
              <p className="text-black lg:text-sm xl:text-base text-center">
                Mobile Application development
              </p>
            </div>
            {/* w-11/12 sm:w-7/12 lg:w-7/12 */}
            <div className="border px-20 h-36 rounded-3xl flex flex-col justify-center items-center">
              <Image
                width={25}
                alt="experience img"
                height={25}
                src={require("../../public/education.png")}
              />
              <p className="text-black font-bold">Education</p>
              <p className="text-center">Bachelor Bscs continue</p>
            </div>
          </div>
    
          <div className="w-6/6flex justify-center items-center sm:block">
            <p className="text-black text-sm lg:text-sm xl:text-base">
              I am well-known for my great problem-solving abilities and
              commitment to client satisfaction, and I have proficiency in
              JavaScript, Node JS, React JS, and React Native. I am devoted to
              providing highquality software solutions that surpass
              expectations, and I have a track record of effectively managing
              projects under tight deadlines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentAbout;
