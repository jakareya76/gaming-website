import { gamesData } from "../../data";
import GameCard from "./GameCard";

const Games = () => {
  return (
    <section className="container mx-auto py-20">
      <h2 className="text-2xl text-center font-bold font-Audiowide md:text-left md:text-5xl">
        Buy HTML5 Games
      </h2>
      <div className="flex items-center justify-center mt-10">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {gamesData.map((game) => {
            return <GameCard key={game.id} {...game} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Games;
