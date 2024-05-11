import ProjectsCard from "../shared-components/ProjectsCard"

const MainContentProject = () => {

  // rgb(163, 163, 163)  border color
  // rgb(250, 250, 250)  background Color

  return (
    <>

      <div className="lg:flex w-7/12 lg:w-4/5 lg:space-x-8 justify-around items-center m-auto">      
       <ProjectsCard
          source={require("../../public/feedaGpt.webp")}
          alt={"Feeda GPT"}
          text={"Project One"}
          hrefParent={"https://play.google.com/store/apps/details?id=com.smaz.feedagpt"}
        />
         <ProjectsCard
          source={require("../../public/kaiGpt.webp")}
          alt={"kai GPT"}
          text={"Project Two"}
          hrefParent={"https://play.google.com/store/apps/details?id=com.smaz.kaigpt"}

        />
          <ProjectsCard
          source={require("../../public/peacemakerimage.webp")}
          alt={"Peace Maker"}
          text={"Project Three"}
          hrefParent={"https://play.google.com/store/apps/details?id=com.softwareAlliance.peaceMaker&hl=en&gl=US"}

        />

      </div>
    </>
  );
};

export default MainContentProject;
