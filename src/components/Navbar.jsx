
import  { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <nav className="shadow-lg flex justify-between  shadow-black fixed top-0 left-0 w-full bg-blue-200 text-black z-50">
       {/* Logo */}
       <img
          className="w-10 h-10 mt-2 ml-4 rounded-full border-white border-solid"
          src="src/assets/images (1).jpeg"
          alt="Logo"
        />

      <div className="container mx-auto flex justify-between items-center p-4">
       
        {/* Flex Spacer */}
        <div className="flex-grow"></div>

        {/* Navigation Links */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          }  absolute top-14 right-0 flex  bg-blue-100 md:static md:flex  md:space-x-9 md:bg-transparent`}
        >
           <li className="p-4 md:p-0 text-right md:text-left">
            <a href="#hero" className="font-extrabold block hover:text-red-700">
             Home
            </a>
          </li>
          <li className="p-4 md:p-0 text-right md:text-left">
            <a href="#about" className="font-extrabold block hover:text-red-700">
              About
            </a>
          </li>
          <li className="p-4 md:p-0 text-right md:text-left">
            <a href="#skills" className="font-extrabold block hover:text-red-700">
              Skills
            </a>
          </li>
          <li className="p-4 md:p-0 text-right md:text-left">
            <a href="#contact" className="font-extrabold block hover:text-red-700">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    
  );
};

export default Navbar;
