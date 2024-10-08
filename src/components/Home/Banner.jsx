import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import bannerImg from "../../assets/hero-banner.jpg";
import TypewriterText from "../shared/TypewriterText";

const Banner = () => {
  return (
    <section className="container mx-auto py-10 text-white">
      <div className="grid grid-cols-3 gap-5 grid-rows-3 md:grid-cols-8 md:grid-rows-4">
        <div
          style={{ backgroundImage: `url(${bannerImg})` }}
          className="col-span-2 row-span-3 md:col-span-6 md:row-span-3 rounded-xl"
        >
          <div className="flex items-start m-10 justify-between">
            <div>
              <h2 className="text-5xl font-bold font-Audiowide bg-gradient-to-r from-green-400 via-green-100 to-white bg-clip-text text-transparent">
                We provide Services
              </h2>
              <TypewriterText />
            </div>
            <a className="relative inline-block uppercase cursor-pointer px-8 py-4 text-2xl font-light text-yellow-500 border-2 border-current rounded-full overflow-hidden transition-transform duration-200 ease-in-out will-change-transform z-0 cool-beans">
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
