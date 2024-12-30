

const Navbar = () => {
  return (
    <nav className=" shadow-lg shadow-black fixed top-0 left-0 w-full bg-zinc-600 text-white z-50  scroll-pt-px">
      <div className="container mx-auto flex justify-between items-center p-4">
<img className="w-10 h-10 rounded-full border-white border-solid " src="src/assets/images (1).jpeg" alt="test" />
        <ul className=" flex space-x-10">
          <li>
            <a href="#hero" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
