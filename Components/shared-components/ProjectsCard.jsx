import Image from "next/image";
import CustomLinkButton from "../reusable_components/CustomLinkButton";


const ProjectsCard=({text,source,alt,hrefParent}) =>{
     
    return(
        <div className="border-borderProjectsColor border-[1px]  h-[86vh] w-[50vh] rounded-xl text-center ">
        <div className="w-5/5 h-5/5 flex justify-center items-center p-4 ">
          <Image
            alt={alt}
            width={180}
            height={180}
            style={{ objectFit: "cover" }}
            objectFit="cover"
            src={source}
            className="rounded-2xl bg-slate-500"
          />
        </div>

        <div>
          <p className="py-4 text-black font-bold text-2xl">{text}</p>
          <CustomLinkButton
            target={"_blank"}
            text={"Live Demo"}
            href={
              hrefParent
            }
            extraStyle={
              "hover:bg-black hover:text-white border text-black border-black w-36 h-12 text-center justify-center items-center flex  m-auto py-2 px-4  rounded-full"
            }
          />
        </div>
      </div>
    )
}

export default ProjectsCard;