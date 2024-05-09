
import MainContent from "../Components/home/MainContent";
import HeaderAbout from "../Components/about/HeaderAbout";
import MainContentAbout from "../Components/about/MainContentAbout";
import MainContentExperience from "../Components/experience/MainContentExperience";
import MainContentContact from "../Components/contact/MainContentContact";
import MainContentProject from "../Components/projects/MainContentProject";



const Home= ()=> {
  
  return (
    <>
      <main className="h-screen " >
        <section id="/" className="sm:flex sm:flex-col justify-center bg-[#FBFBFB]">
          <MainContent />
        </section>
        <section id="about" className="bg-[#FBFBFB]">
          <HeaderAbout />
          <MainContentAbout />
        </section>
        <section id="experience" className=" bg-[#FBFBFB]">
          <MainContentExperience />
        </section>
        <section id="project" className="bg-[#FBFBFB]">
           <MainContentProject/>
        </section>
        <section id="contact" className="bg-[#FBFBFB]">
          <MainContentContact />
        </section>
      </main>
    </>
  );
};

export default Home;