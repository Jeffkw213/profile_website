// This is the title of the website
// There would be a breif discription of who I am
// And there would be a navigation button to scroll to a certain section of the page
import { FaProjectDiagram } from 'react-icons/fa';
import { BiArrowToBottom } from 'react-icons/bi';
export default function Title({ Name, Description }) {
  // var vw = window.innerWidth; //getting the width of the window
  // var vh = window.innerHeight; //getting the height of the window
  function getRandomNumber(min, max) {
    
    return Math.random() * (max - min) + min;
      
  }
  function Stars() {
    const arr = [];
    var divs = document.getElementsByTagName('div');
    // get window width and height
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;

    for (let i = 0; i < 100; i++) {
      arr.push(<div className="bg-white w-1 h-1 rounded-full absolute" key={i}></div>);
    }
    for ( var i=0; i < divs.length; i++ ) {
 	
      // shortcut! the current div in the list
      var thisDiv = divs[i];
      
      // get random numbers for each element
      randomTop = getRandomNumber(0, winHeight);
      randomLeft = getRandomNumber(0, winWidth);
      
      // update top and left position
      thisDiv.style.top = randomTop +"px";
      thisDiv.style.left = randomLeft +"px";
      
  }
    return arr;
  }
  return (
    <div className="bg-black max-w-1/2 w-full px-4" id="home">
      <div>
        <Stars />
      </div>
      <div className="flex items-center justify-center h-screen">
        <div className="relative max-w-[880px]">
          <div className="absolute inset-0.5 bg-gradient-to-r from-red-600 to-blue-600 rounded-full blur-2xl bg-opacity-80"></div>

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
        transition delay-150 duration-300 ease-in-out hover:rotate-y-360"
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
