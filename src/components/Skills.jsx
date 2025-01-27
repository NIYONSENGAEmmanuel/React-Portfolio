import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { GoDatabase } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";




const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 py-20 bg-gradient-to-r h-[100vh] from-gray-200 to-gray-200 text-gray-800"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-300">
        My Skills
      </h2>
      <ul className="grid   md:grid-cols-3 gap-6 items-center justify-center max-w-4xl mx-auto">
        <li className="bg-blue-50 p-1  rounded-lg text-black font-semibold text-center  hover:bg-blue-100 transition-transform transform hover:scale-105 shadow-lg">
        <FaHtml5 className="text-2xl ml-24  text-black   " />
          HTML
        </li>
        <li className="bg-blue-50 p-1  rounded-lg text-black font-semibold text-center  hover:bg-blue-100 transition-transform transform hover:scale-105 shadow-lg">
        <IoLogoCss3 className="text-2xl  text-black ml-24" />

          CSS
        </li>
        <li className="bg-blue-50 p-1  rounded-lg text-black font-semibold text-center  hover:bg-blue-100 transition-transform transform hover:scale-105 shadow-lg">
        <IoLogoJavascript className="text-2xl  text-black ml-24" />
          JavaScript
        </li>
        <li className="bg-blue-50 p-1  rounded-lg text-black font-semibold text-center  hover:bg-blue-100 transition-transform transform hover:scale-105 shadow-lg">
        <FaReact className="text-2xl animate-spin text-black ml-24" />

          React
        </li>
        <li className="bg-blue-50 p-1  rounded-lg text-black font-semibold text-center  hover:bg-blue-100 transition-transform transform hover:scale-105 shadow-lg">
        <FaFigma className="text-2xl  text-black ml-24" />
          Figma
        </li>
        <li className="bg-blue-50 p-1  rounded-lg text-black font-semibold text-center  hover:bg-blue-100 transition-transform transform hover:scale-105 shadow-lg">
        <GoDatabase className="text-2xl  text-black ml-24" />
          Database Management
        </li>
        <li className="bg-blue-50 p-1  rounded-lg text-black font-semibold text-center  hover:bg-blue-100 transition-transform transform hover:scale-105 shadow-lg">
        <FaGithub className="text-2xl  text-black ml-24"/>
          Github
        </li>
        <li className="bg-blue-50 p-1  rounded-lg text-black font-semibold text-center  hover:bg-blue-100 transition-transform transform hover:scale-105 shadow-lg">
        <RiTailwindCssFill className="text-2xl text-black ml-24" />
          Tailwind CSS
        </li>

        <li className="bg-blue-50 p-1  rounded-lg text-black font-semibold text-center  hover:bg-blue-100 transition-transform transform hover:scale-105 shadow-lg">
        <FaGitAlt className="text-2xl  text-black ml-24" />
        Git
        </li>
      </ul>
    </section>
  );
};

export default Skills;
