import Image from "next/image";
import CustomLinkButton from "../reusable_components/CustomLinkButton";

const MainContentProject = () => {
  // rgb(163, 163, 163)  border color
  // rgb(250, 250, 250)  background Color

  return (
    <>
      <div>
        <div className="border-borderProjectsColor bg-red-300 h-[85vh] w-[55vh] rounded-xl text-center ">
          <div className="flex justify-center items-center p-4">
            <Image
              alt="Feeda Gpt"
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
              objectFit="cover"
              src={require("../../public/feedaGptCrop.jpg")}
              className="rounded-2xl bg-slate-500"
            />
          </div>

          <div>
            <p className="py-4 text-black font-bold text-2xl">Project One</p>
            <CustomLinkButton
              target={"_blank"}
              text={"Live Demo"}
              href={
                "https://play.google.com/store/apps/details?id=com.smaz.kaigpt"
              }
              extraStyle={
                "hover:bg-black hover:text-white border text-black border-black w-36 h-12 text-center justify-center items-center flex  m-auto py-2 px-4  rounded-full"
              }
            />
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default MainContentProject;
