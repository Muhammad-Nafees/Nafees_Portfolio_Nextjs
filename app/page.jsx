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
      <main className="bg-[#FBFBFB] overflow-x-hidden">
        <section
          className=""
        >
          <HeaderTop />
          <MainContent />
        </section>
        <section id="about" className="">
          <HeaderAbout />
          <MainContentAbout />
        </section>
        <section id="experience" className="">
          <MainContentExperience />
        </section>
        <section id="project" className="">
          <MainContentProject />
        </section>
        <section id="contact" className="">
          <MainContentContact />
        </section>
      </main>
    </>
  );
};

export default Home;
