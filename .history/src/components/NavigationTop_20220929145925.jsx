import React, {useState} from "react";
import {Link} from 'react-scroll'

export default function ButtonNavi() {
  // changing color while scrolling
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >=90){
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);


  return (
    <header className="fixed flex w-full justify-between item-center px-4 md:px-12 h-20">
      <nav className="p-3 text-center fixed left-0 right-0 min-h-screen">
        <Linkto="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}
          className="m-2 p-2 px-3 bg-transparent text-white rounded-full 
      transition delay-150 duration-300 ease-in-out hover:scale-110"
        >
          Education
        </Linkto=>
        <button
          className="m-2 p-2 px-3 bg-transparent text-white rounded-full 
      transition delay-150 duration-300 ease-in-out hover:scale-110"
        >
          Work Experience
        </button>
        <button
          className="m-2 p-2 px-3 bg-transparent text-white rounded-full 
      transition delay-150 duration-300 ease-in-out hover:scale-110"
        >
          Projects
        </button>
        <a href="/Resume.pdf" target="_blank">
          <button
            className="m-2 p-2 px-3 bg-transparent text-white rounded-full
        transition delay-150 duration-300 ease-in-out hover:scale-110"
          >
            Resume
          </button>
        </a>
      </nav>
    </header>
  );
}