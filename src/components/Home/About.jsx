import aboutImg from "../../assets/about.png";

const About = () => {
  return (
    <section className="container mx-auto py-20">
      <div className="flex items-center justify-around gap-10 flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <h2 className="md:text-7xl text-3xl font-bold font-Audiowide bg-gradient-to-r from-green-700 via-green-100 to-white bg-clip-text text-transparent">
            NapTech Labs
          </h2>
          <h4 className="md:text-4xl text-xl font-bold font-Audiowide bg-gradient-to-r from-white via-green-300 to-green-700 bg-clip-text text-transparent my-4 md:leading-normal">
            Game Development <br /> Company In Bangladesh
          </h4>
          <p className="text-gray-300 md:text-justify font-Roboto md:text-lg">
            NapTech Labs is a game development and publishing company based in
            Bangladesh, specializing in innovative gaming solutions to enhance
            brand engagement. We offer game development, app development, web
            development, and digital marketing services. Our team crafts custom
            gaming solutions that align with your brand's identity and goals.
            Whether you need white-label games, branded experiences, or
            localized adaptations, we provide end-to-end support from concept to
            launch. As a leading HTML5 game publisher, we create engaging
            web-based games for a wider audience. At NapTech Labs, we push the
            boundaries of digital innovation to elevate your brand and drive
            engagement.
          </p>
        </div>
        <div className="w-full xl:w-[30%] lg:w-[50%]">
          <img src={aboutImg} alt="about_img" className="w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default About;
