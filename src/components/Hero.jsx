const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-gray-200 to-gray-200 text-black flex flex-col items-center justify-center px-6"
    >
      <img
        className="w-16 h-16 fixed top-8 left-0 rounded-full border-4 border-blue-600 shadow-lg z-50"
        src="public/images/images (1).jpeg" 
        alt="Logo"
      />

      <div className="flex flex-col items-center">
        <div className="rounded-full border-4 mt-16 border-blue-600 shadow-xl overflow-hidden w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64">
          <img
            className="w-full h-full object-cover"
            src="public/images/171128359.jpeg" 
            alt="Niyonsenga Emmanuel"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-6 text-center text-blue-600 hover:text-blue-700 transition-all duration-300">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl mt-4 text-teal-900 italic hover:text-teal-700">
          Hi, I m <span className="font-semibold">Emmanuel Niyonsenga</span>
        </p>
        <p className="text-lg sm:text-xl mt-6 max-w-2xl text-center leading-relaxed text-gray-700">
          I am a passionate front-end developer with a love for building 
          creative, user-friendly, and responsive websites. My work combines 
          the power of modern technologies like <span className="font-bold">React</span> and 
          <span className="font-bold"> JavaScript</span> with an eye for design using tools like 
          <span className="font-bold"> Figma</span>.
        </p>
        <div className="mt-0 flex space-x-4">
          <a
            href="#about"
            className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            Learn More About Me
          </a>
          <a
            href="#contact"
            className="bg-teal-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-teal-700 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
