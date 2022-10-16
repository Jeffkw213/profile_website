// This is the title of the website
// There would be a breif discription of who I am
// And there would be a navigation button to scroll to a certain section of the page
import { FaProjectDiagram } from 'react-icons/fa';
import { BiArrowToBottom } from 'react-icons/bi';
export default function Title({ Name, Description }) {
  var vw = window.innerWidth; //getting the width of the window
  var vh = window.innerHeight; //getting the height of the window
  const star = () => {
    for (var i = 0; i < 100; i++) {
      <div class="star m-0" style="animation: twinkle ' +
        (Math.random() * 5 + 5) +
        's linear ' +
        (Math.random() * 1 + 1) +
        's infinite; top: ' +
        Math.random() * vh +
        'px; left: ' +
        Math.random() * vw +
        'px;"></div>;
    }
  };

  return (
    <div className="bg-black max-w-1/2 w-full px-4" id="home">
      <div className="flex items-center justify-center h-screen">
        <div className="relative max-w-[880px]">
          <div className="absolute inset-0.5 bg-gradient-to-r from-red-600 to-blue-600 rounded-full blur-2xl opacity-80"></div>

          <div className="relative m-2 py-12 text-white ">
            <h1 className="font-Nexa text-4xl sm:text-7xl text-center pt-4 pb-2">{Name}</h1>
            <p className="p-4 mx-0 sm:mx-14 max-w-screen-lg min-w-[50%]">{Description}</p>

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
        transition delay-150 duration-300 ease-in-out hover:scale-110"
                >
                  <BiArrowToBottom className=" text-white mr-2" />
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
