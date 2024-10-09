import About from "../components/Home/About";
import Banner from "../components/Home/Banner";
import Services from "../components/Home/Services";

const Home = () => {
  return (
    <main className="bg-[#000000] text-white px-5">
      <Banner />
      <About />
      <Services />
    </main>
  );
};

export default Home;
