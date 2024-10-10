import { gamesData } from "../../data";
import GameCard from "./GameCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Games = () => {
  return (
    <section className="container mx-auto py-20">
      <AnimatedHeading />
      <div className="flex items-center justify-center mt-10">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {gamesData.map((game, index) => (
            <AnimatedGameCard key={game.id} {...game} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// AnimatedHeading Component
const AnimatedHeading = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="text-2xl text-center font-bold font-Audiowide md:text-left md:text-5xl"
    >
      Buy HTML5 Games
    </motion.h2>
  );
};

// AnimatedGameCard Component
const AnimatedGameCard = ({ index, ...game }) => {
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
      <GameCard {...game} />
    </motion.div>
  );
};

export default Games;
