// This is the title of the website
// There would be a breif discription of who I am
// And there would be a navigation button to scroll to a certain section of the page
import { FaProjectDiagram } from 'react-icons/fa';
import { BiArrowToBottom } from 'react-icons/bi';

export default function Title({ Name, Description }) {
  return (
    <div className="px-8 min-h-screen max-h-screen bg-black flex items-center justify-center" id="home">
      {/* background blur */}

      <div className="relative w-full max-w-lg">
        <div className='absolute top-0 -left-4 w-72 '></div>
        <div className="relative max-h-full bg-gradient-to-r from-indigo-800 rounded-full py-10 text-gray-300 opacity-100">
          <h1 className="font-Nexa text-8xl text-center pt-4 pb-2">{Name}</h1>
          <p className="p-4 mx-14 max-w-screen-lg min-w-[50%]">{Description}</p>

          {/* Buttons */}
          <div className="flex items-center justify-center py-2">
            <a href="#project" className="px-2">
              <button
                className="flex items-center justify-center p-2 px-3 bg-transparent text-white 
        transition delay-150 duration-300 ease-in-out hover:scale-110"
              >
                <FaProjectDiagram className="text-white mr-2" /> Projects
              </button>
            </a>
            <a href="/Resume.pdf" target="_blank" className="px-2">
              <button
                className="flex items-center justify-center p-2 px-3 bg-transparent border-2 border-indigo-100 text-white 
        transition delay-150 duration-300 ease-in-out hover:bg-indigo-300 "
              >
                <BiArrowToBottom className=" text-white mr-2" />
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
