import img1 from "../../assets/1.webp";
import img2 from "../../assets/2.webp";
import img3 from "../../assets/3.webp";
import img4 from "../../assets/4.webp";
import img5 from "../../assets/5.webp";
import img6 from "../../assets/6.webp";
import img7 from "../../assets/7.webp";
import img8 from "../../assets/8.webp";
import bannerImg from "../../assets/hero-banner.webp";
import TypewriterText from "../shared/TypewriterText";

const Banner = () => {
  return (
    <section className="container mx-auto py-10 text-white">
      <div className="grid grid-cols-3 gap-5 grid-rows-3 md:grid-cols-8 md:grid-rows-4">
        <div
          style={{ backgroundImage: `url(${bannerImg})` }}
          className="relative col-span-2 banner row-span-3 md:col-span-6 md:row-span-3 rounded-xl"
        >
          <div className="absolute w-full h-full bg-black opacity-50 z-10"></div>
          <div className="flex items-start m-10 justify-between flex-col xl:flex-row z-50 relative">
            <div>
              <h2 className="lg:text-5xl font-bold font-Audiowide bg-gradient-to-r from-green-400 via-green-100 to-white bg-clip-text text-transparent">
                We provide Services
              </h2>
              <TypewriterText />
            </div>
            <a className="relative inline-block uppercase cursor-pointer mt-5 md:mt-0 px-2 py-1 md:px-8 md:py-4 md:text-2xl font-light text-yellow-500 border-2 border-current rounded-full overflow-hidden transition-transform duration-200 ease-in-out will-change-transform z-0 cool-beans">
              get started
              <span className="absolute inset-0 transform translate-x-[-100%] rotate-12 bg-yellow-500 rounded-full transition-transform duration-200 ease-out will-change-transform z-[-1]"></span>
            </a>
          </div>
        </div>
        <div className="md:col-span-2 md:row-span-2 rounded-xl">
          <img
            src={img1}
            alt="game"
            className="w-full h-full object-cover rounded-xl cursor-pointer hover:scale-105 duration-500"
          />
        </div>
        <div className="md:col-span-2 md:row-span-2 rounded-xl">
          <img
            src={img2}
            alt="game"
            className="w-full h-full object-cover rounded-xl cursor-pointer hover:scale-105 duration-500"
          />
        </div>
        <div className="rounded-xl">
          <img
            src={img3}
            alt="game"
            className="w-full h-full object-cover rounded-xl cursor-pointer hover:scale-105 duration-500"
          />
        </div>
        <div className="rounded-xl">
          <img
            src={img4}
            alt="game"
            className="w-full h-full object-cover rounded-xl cursor-pointer hover:scale-105 duration-500"
          />
        </div>
        <div className="rounded-xl">
          <img
            src={img5}
            alt="game"
            className="w-full h-full object-cover rounded-xl cursor-pointer hover:scale-105 duration-500"
          />
        </div>
        <div className="rounded-xl">
          <img
            src={img6}
            alt="game"
            className="w-full h-full object-cover rounded-xl cursor-pointer hover:scale-105 duration-500"
          />
        </div>
        <div className="rounded-xl">
          <img
            src={img7}
            alt="game"
            className="w-full h-full object-cover rounded-xl cursor-pointer hover:scale-105 duration-500"
          />
        </div>
        <div className="rounded-xl">
          <img
            src={img8}
            alt="game"
            className="w-full h-full object-cover rounded-xl cursor-pointer hover:scale-105 duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
