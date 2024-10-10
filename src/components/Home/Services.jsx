import Card from "./Card";
import { servicesData } from "../../data";
import eduBg from "../../assets/edu-bg.webp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  return (
    <section className="container mx-auto py-20">
      {/* Animated Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="text-4xl font-bold text-center font-Audiowide"
      >
        What We Offer
      </motion.h2>

      <div className="flex items-center justify-center mt-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <AnimatedCard key={service.id} {...service} index={index} />
          ))}
        </div>
      </div>

      {/* Animated Background Section */}
      <AnimatedBackground />
    </section>
  );
};

// AnimatedCard Component
const AnimatedCard = ({ index, ...service }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.2,
      }}
    >
      <Card {...service} />
    </motion.div>
  );
};

// AnimatedBackground Component
const AnimatedBackground = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: 0.4,
      }}
      style={{ backgroundImage: `url(${eduBg})` }}
      className="w-full mx-auto rounded-xl py-32 relative mt-20"
    >
      <div className="absolute w-full h-full top-0 z-10 bg-gradient-to-r from-[#190a24] to-transparent rounded-xl"></div>
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
    </motion.div>
  );
};

export default Services;
