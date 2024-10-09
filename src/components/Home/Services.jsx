import Card from "./Card";
import { servicesData } from "../../data";
import eduBg from "../../assets/edu-bg.png";

const Services = () => {
  return (
    <section className="container mx-auto py-20">
      <h2 className="text-4xl font-bold text-center font-Audiowide">
        What We Offer
      </h2>
      <div className="flex items-center justify-center mt-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => {
            return <Card key={service.id} {...service} />;
          })}
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${eduBg})` }}
        className="w-full mx-auto rounded-xl py-32 relative mt-20"
      >
        <div className="absolute w-full h-full top-0 z-10 bg-gradient-to-r  from-[#190a24] to-transparent rounded-xl"></div>
        <div className="relative z-20 px-5 text-center md:text-left lg:px-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            Educational
          </h2>
          <h3 className="text-xl font-semibold mt-2 md:text-4xl lg:text-5xl xl:text-6xl">
            Games Development
          </h3>
          <p className="max-w-2xl mt-5 text-sm sm:text-lg font-Roboto font-medium">
            We developed educational games for kids that make learning fun and
            engaging. Our games cover various subjects and help children develop
            essential skills in a safe online environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
