const Card = ({ title, img, text }) => {
  return (
    <div className="max-w-sm text-center  p-5 rounded-xl bg-zinc-900 hover:bg-zinc-800 cursor-pointer duration-300 flex flex-col items-center  justify-center gap-2">
      <div className="bg-[#4263174b] p-5 border-4 border-green-700 rounded-full">
        <img src={img} alt="services_img" className="w-16 h-16" />
      </div>
      <h4 className="text-center text-2xl font-bold font-Roboto mt-5">
        {title}
      </h4>
      <p className="font-medium">{text}</p>
    </div>
  );
};

export default Card;
