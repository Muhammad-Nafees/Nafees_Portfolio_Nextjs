import MainContent from "@/Components/home/MainContent";
import HeaderAbout from "@/Components/about/HeaderAbout";
import MainContentAbout from "@/Components/about/MainContentAbout";
import MainContentExperience from "@/Components/experience/MainContentExperience";
import MainContentContact from "@/Components/contact/MainContentContact";

function Home() {

  return (
    <>
      <main className="h-screen " >
        <section id="/" className="sm:flex sm:flex-col justify-center bg-gradient-to-r from-purple-500 to-cyan-500">
          <MainContent />
        </section>
        <section id="about" className="bg-gradient-to-r from-purple-500 to-cyan-500">
          <HeaderAbout />
          <MainContentAbout />
        </section>
        <section id="experience" className="bg-gradient-to-r from-purple-500 to-cyan-500">
          <MainContentExperience />
        </section>
        <section id="project" className="bg-gradient-to-r from-purple-500 to-cyan-500">
          <MainContentExperience />
        </section>
        <section id="contact" className="bg-gradient-to-r from-purple-500 to-cyan-500">
          <MainContentContact />
        </section>
      </main>
    </>
  );
};

export default Home;
