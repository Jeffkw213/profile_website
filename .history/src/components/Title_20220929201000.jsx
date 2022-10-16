// This is the title of the website
// There would be a breif discription of who I am
// And there would be a navigation button to scroll to a certain section of the page
import { FaProjectDiagram } from 'react-icons/fa';
import { GrResume } from 'react-icons/gr';

export default function Title({ Name, Description }) {
  return (
    <div className="px-8 min-w-[780px] min-h-screen max-h-screen bg-black flex items-center justify-center" id="home">
      <div className="relative max-h-full bg-gradient-to-r from-indigo-800 rounded-full py-10 text-gray-300 opacity-100">
        <h1 className="font-Nexa text-8xl text-center pt-4 pb-2">{Name}</h1>
        <p className="p-4 mx-14 max-w-screen-lg min-w-[50%]">{Description}</p>
        <div className='flex items-center justify-center'>
          <button className='flex items-center justify-center m-2 p-2 px-3 bg-transparent text-white 
        transition delay-150 duration-300 ease-in-out hover:scale-110'>
            <FaProjectDiagram /> Projects
          </button>
          <a href="/Resume.pdf" target="_blank">
            <button
              className="flex items-center justify-center m-2 p-2 px-3 bg-transparent text-white 
        transition delay-150 duration-300 ease-in-out hover:scale-110"
            >
              <GrResume color=''="white"/>
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
