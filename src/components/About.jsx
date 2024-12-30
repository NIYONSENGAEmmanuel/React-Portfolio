import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const About = () => (
    <section id="about" className="p-8 bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700">
          I am a passionate developer with experience in React and modern web technologies.
          </p>
          <div className="flex justify-center  text-3xl space-x-9 py-6">
            
          <FaSquareInstagram className="text-red-700"/>
          
          <FaFacebookSquare className="text-blue-950"/>
          <FaWhatsappSquare className=" text-green-950"/>
          <FaXTwitter className="text-black" />
          </div>
          <div className=" justify-center items-center">
        <h1 className="text-3xl font-bold">What defines me at work</h1>
      </div>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start justify-start ">
 <div className="bg-gray-200 p-4  py-14 rounded shadow hover:bg-slate-300"> Creative Thinker
  <img className="w-40 hover:border-2 border-red-800 h-40 rounded-full" src="src/assets/images.jpeg" alt="test" />
 </div>
<div className="bg-gray-200 p-4 py-14 rounded shadow hover:bg-slate-300">Problem Solver 
  <img  className="w-40 h-40 rounded-full hover:border-2 border-red-800" src="src/assets/download.png" alt="test" />
</div>
 <div className="bg-gray-200 p-4 py-14 rounded shadow hover:bg-slate-300">Innovative
  <img className="w-40 h-40 rounded-full hover:border-2 border-red-800" src="src/assets/download (2).jpeg" alt="test" />
 </div>
 <div className="bg-gray-200 p-4 py-14 rounded shadow hover:bg-slate-300">Self-Motivate
  <img className="w-40 h-40 rounded-full hover:border-2 border-red-800" src="src/assets/download.jpeg" alt="test" />
 </div>
 <div className="bg-gray-200 p-4 py-14 rounded shadow hover:bg-slate-300">Team Player
  <img className="w-40 h-40 rounded-full hover:border-2 border-red-800" src="src/assets/download (1).jpeg" alt="test" />
 </div>
        </div>
    
    </section>
  );
  
  export default About;
  