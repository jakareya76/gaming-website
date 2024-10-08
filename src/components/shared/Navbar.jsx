import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { HiBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";

const navlinks = [
  { path: "/", name: "Home" },
  { path: "/", name: "About" },
  { path: "/", name: "Our Games" },
  { path: "/", name: "Training" },
  { path: "/", name: "FAQ" },
  { path: "/", name: "Contact Us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-900 p-4">
      <div className="flex items-center justify-between container mx-auto">
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" loading="lazy" className="w-36" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-100 focus:outline-none"
          >
            {/* Hamburger icon */}
            {isOpen ? (
              <LiaTimesSolid size={35} />
            ) : (
              <HiBars3BottomRight size={35} />
            )}
          </button>
        </div>

        {/* Links for Desktop */}
        <div
          className={`lg:flex ${
            isOpen ? "block" : "hidden"
          } w-full hidden lg:block lg:w-auto`}
        >
          <ul className="lg:flex items-center justify-center gap-12 text-xl text-gray-100 font-medium">
            {navlinks.map((link, idx) => {
              return (
                <li key={idx} className="relative group">
                  <Link
                    to={link.path}
                    className="hover:text-green-500 duration-300 block py-2 lg:py-0"
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

      {/*  Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 translate-y-0 mt-5"
            : "max-h-0 opacity-0 translate-y-[-20px]"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-xl text-gray-100 font-medium bg-zinc-900">
          {navlinks.map((link, idx) => (
            <li
              key={idx}
              className="border-b border-gray-600 w-full text-center p-3"
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
