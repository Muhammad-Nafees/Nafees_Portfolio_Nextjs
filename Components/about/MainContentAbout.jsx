import React from "react";
import Image from "next/image";

const MainContentAbout = () => {
  return (
    <div className="py-20 w-full mx-auto lg:flex items-center lg:w-[70%]">
      <div
        whileHover={{ scale: 1.05 }}
        className="hover:translate-y-1 transition duration-300 ease-in-out w-4/5 h-4/5 sm:w-2/5 m-auto flex items-center justify-center"
      >
        <Image
          src="/Nafees_Image.jpeg"
          alt="Nafees Image"
          width={400}
          height={400}
          className="rounded-xl"
        />
      </div>

      <div className="lg:w-[70%] flex flex-col px-10 ">
        <div className="py-12 flex flex-col md:flex-row items-center justify-center lg:justify-start lg:items-start space-y-4 md:space-y-0 md:space-x-4 ">

          <div className="hover:-translate-y-0.5 transition duration-300 ease-in-out border px-10 h-40 rounded-3xl flex flex-col justify-center items-center">
            <Image
              width={25}
              alt="experience img"
              height={25}
              src={require("../../public/experience.png")}
            />
            <p className="text-black font-bold">Experience</p>
            <p className="text-black">3+ years</p>
            <p className="text-black lg:text-sm xl:text-base text-sm text-center">
              Mobile Application development
            </p>
          </div>
          {/* w-11/12 sm:w-7/12 lg:w-7/12 */}
          <div className="hover:-translate-y-0.5 transition duration-300 ease-in-out border px-20 h-40 rounded-3xl flex flex-col justify-center items-center">
            <Image
              width={25}
              alt="experience img"
              height={25}
              src={require("../../public/education.png")}
            />
            <p className="text-black font-bold">Education</p>
            <p className="text-center text-sm sm:text-base">
              Graduation Bscs
            </p>
          </div>

        </div>

        <div className="w-[80%] sm:mx-auto lg:mx-0 flex items-center justify-center lg:justify-start lg:items-start sm:block">
          <p className="text-black font-medium text-sm lg:text-sm xl:text-base">
            I am a passionate React Native developer with over a year of
            experience in the field. I have successfully designed and developed
            several apps, with 2 to 3 of them currently live on the Play Store.
            My strong skills in both design and development enable me to create
            seamless, user-friendly mobile applications. I am dedicated to
            continuous learning and improvement, always striving to deliver
            high-quality results in every project I undertake
          </p>
        </div>

      </div>
    </div>
  );
};

export default MainContentAbout;
