import About from "../components/Home/About";
import Banner from "../components/Home/Banner";
import Contact from "../components/Home/Contact";
import FAQ from "../components/Home/FAQ";
import Games from "../components/Home/Games";
import Services from "../components/Home/Services";

const Home = () => {
  return (
    <main className="bg-[#000000] text-white px-2">
      <Banner />
      <About />
      <Services />
      <Games />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;
