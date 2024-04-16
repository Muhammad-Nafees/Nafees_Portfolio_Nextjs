import MainContent from "@/Components/home/MainContent";
import HeaderAbout from "@/Components/about/HeaderAbout";
import MainContentAbout from "@/Components/about/MainContentAbout";
import MainContentExperience from "@/Components/experience/MainContentExperience";

function Home() {

  return (
    <>
      <main className="h-screen " >
        <section className="min-h-screen sm:flex sm:flex-col justify-center bg-gradient-to-r from-purple-500 to-cyan-500" id="/">
          <MainContent />
        </section>
        <section  id="about" className="min-h-screen bg-gradient-to-r from-purple-500 to-cyan-500">
          <HeaderAbout />
          <MainContentAbout />
        </section>
        <section id="experience" className=" min-h-screen bg-gradient-to-r from-purple-500 to-cyan-500">
          <MainContentExperience />
        </section>
        <section id="project" className=" min-h-screen bg-gradient-to-r from-purple-500 to-cyan-500">
          <MainContentExperience />
        </section>
        <section id="contact" className=" min-h-screen bg-gradient-to-r from-purple-500 to-cyan-500">
          <MainContentExperience />
        </section>

      </main>
    </>
  );
};

export default Home;
