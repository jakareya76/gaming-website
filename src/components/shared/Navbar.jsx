import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const navlinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/",
    name: "About",
  },
  {
    path: "/",
    name: "Our Games",
  },
  {
    path: "/",
    name: "Training",
  },
  {
    path: "/",
    name: "FAQ",
  },
  {
    path: "/",
    name: "Contact Us",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-zinc-900 p-4">
      <div className="flex items-center justify-between container mx-auto">
        <div>
          <img src={logo} alt="logo" loading="lazy" className="w-36" />
        </div>
        <div>
          <ul className="flex items-center justify-center gap-12 text-xl text-gray-100 font-medium">
            {navlinks.map((link, idx) => {
              return (
                <li key={idx} className="relative group">
                  <Link
                    to={link.path}
                    className="hover:text-green-500 duration-300"
                  >
                    {link.name}
                  </Link>
                  <span className="absolute left-0 bottom-[-5px] w-full h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
