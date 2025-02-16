import React from "react";
import SkillsMention from "../reusable_components/SkillsMention";

const MainContentExperience = () => {
  return (
    <>
      <div className="pt-2 flex flex-col justify-center items-center">
        <p className="text-gray-500 text-sm py-2">Explore My</p>
        <h1 className="text-blackMain font-bold text-4xl">Experience</h1>
      </div>

      <div className="pt-14 m-auto flex flex-col md:flex-row md:w-[95%] w-[80%] lg:w-[90%] md:flex gap-10  justify-center items-center">
        <div className="hover:-translate-y-2 transition duration-300 ease-in-out rounded-xl border sm:w-[60%] md:w-[47%] lg:w-[45%] md:h-96">
          <h1 className="font-bold pt-3 text-xl text-center">
            Frontend development
          </h1>

          <div className="pt-4 sm:w-[90%] md:w-[96%] xl:w-[75%]   lg:w-[92%] flex-wrap m-auto flex items-center justify-between">
            <SkillsMention skill={"HTML"} experience={"Experienced"} />
            <SkillsMention skill={"CSS"} experience={"Experienced"} />
            <SkillsMention skill={"Javascript"} experience={"Experienced"} />
            <SkillsMention skill={"React JS"} experience={"Intermediate"} />
            <SkillsMention skill={"Next JS"} experience={"Intermediate"} />
            <SkillsMention skill={"Typesrcipt"} experience={"Intermediate"} />
            <SkillsMention skill={"React-Native"} experience={"Intermediate"} />
          </div>
        </div>

        <div className="hover:-translate-y-2 transition duration-300 ease-in-out rounded-xl my-4 md:my-0 border sm:w-[60%] md:w-[47%] h-72 md:h-96">
          <h1 className="font-bold text-xl pt-3 text-center">
            Backend development
          </h1>
          <div className="pt-5 sm:w-[90%] md:w-[96%] xl:w-[75%] lg:w-[92%] flex-wrap m-auto flex items-center justify-between">
            <SkillsMention skill={"Express JS"} experience={"basic"} />
            <SkillsMention skill={"Node JS"} experience={"basic"} />
            <SkillsMention skill={"Mongo DB"} experience={"basic"} />
            <SkillsMention skill={"Git"} experience={"Intermediate"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContentExperience;