const GameCard = ({ name, img }) => {
  return (
    <div className="bg-zinc-950 text-center">
      <img src={img} alt={name} className="w-full h-72 rounded object-cover" />
      <h4 className="text-2xl my-3 font-Audiowide">{name}</h4>
      <button className="px-8 py-3 bg-blue-800 hover:bg-blue-600 duration-300 font-Roboto text-white rounded font-medium text-xl w-full">
        Buy Now
      </button>
    </div>
  );
};

export default GameCard;
