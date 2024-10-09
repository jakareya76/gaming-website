import logo from "../../assets/logo.png";
import footer1 from "../../assets/footer1.png";
import footer2 from "../../assets/footer2.png";
import footer3 from "../../assets/footer3.png";

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-950 py-20">
      <div className="container mx-auto px-5">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2">
            <img src={logo} alt="logo" className="w-40" />
            <p className="text-gray-200 mt-5 text-justify font-Roboto">
              NapTech Labs in Bangladesh specializes in game, web, and app
              development, focusing on mobile and web technologies like Android,
              IOS, HTML5. We innovate for various platforms, emphasizing
              Android, IOS, HTML5 Game, Facebook Instant Game, etc.
            </p>
          </div>
          <div className="col-span-1">
            <h2 className="text-green-500 text-2xl font-semibold">
              Quick Navigation
            </h2>
            <ul className="mt-5 text-white font-semibold space-y-3">
              <li>Who We Are</li>
              <li>Services</li>
              <li>Our Games</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-green-500 text-2xl font-semibold">Service</h2>
            <ul className="mt-5 text-white font-semibold space-y-3">
              <li>White Label Games</li>
              <li>Branded Game</li>
              <li>Game& Reskin</li>
              <li>Custom Game</li>
              <li>Game Localization</li>
            </ul>
          </div>
          <div className="col-span-1 space-y-5">
            <img src={footer1} alt="" className="w-40" />
            <img src={footer2} alt="" className="w-40" />
            <img src={footer3} alt="" className="w-40" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
