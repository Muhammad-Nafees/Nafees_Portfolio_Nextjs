import MainContent from "../Components/home/MainContent";
import HeaderAbout from "../Components/about/HeaderAbout";
import MainContentAbout from "../Components/about/MainContentAbout";
import MainContentExperience from "../Components/experience/MainContentExperience";
import MainContentContact from "../Components/contact/MainContentContact";
import MainContentProject from "../Components/projects/MainContentProject";
import HeaderTop from "../Components/home/HeaderTop";

const Home = () => {


  
  return (
    <>
      <main className="bg-[#FBFBFB]">
        <section className="min-h-screen ">
          <HeaderTop />
          <MainContent />
        </section>
        <section id="about" className="min-h-screen">
          <HeaderAbout />
          <MainContentAbout />
        </section>
        <section id="experience" className="min-h-screen">
          <MainContentExperience />
        </section>
        <section id="project" className="min-h-screen">
          <MainContentProject />
        </section>
        <section id="contact" className="pb-8">
          <MainContentContact />
        </section>
      </main>
    </>
  );
};

export default Home;
