

const Hero = () => {
  
  return (
    
    <section id="hero" className="bg-white text-black h-screen flex items-center justify-center">
      <div className=" rounded-full border-2 border-black shadow-lg shadow-blue-500 hover:shadow-blue-100">
       <img className=" w-100 h-100 rounded-full border-lime-950 " src="src/assets/171128359.jpeg" alt="test" />
       </div>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 hover:text-teal-950">Welcome to My Portfolio</h1>
        <p className="text-teal-900 text-2xl hover:text-black">Niyonsenga Emmanuel</p>
        <p className="text-xl mb-8">I am a React Developer</p>
  
        <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">View My Work</a>
      </div>
    </section>
  );
};

export default Hero; 
