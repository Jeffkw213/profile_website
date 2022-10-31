// This is the title of the website
// There would be a breif discription of who I am
// And there would be a navigation button to scroll to a certain section of the page
import { FaProjectDiagram } from 'react-icons/fa';
import { BiArrowToBottom } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js'; //https://www.npmjs.com/package/animejs

export default function Title({ Name, Description }) {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  function handleResize() {
    setDimensions({
      height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
      width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    });
  }

  useEffect(() => {
    // Update the document title using the browser API
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let columns = Math.floor(dimensions.width / 50),
    rows = Math.floor(dimensions.height / 50);
  let toggled = false;

  const visible = ({ toggled }) => {
    var x = document.getElementById('myDIV');
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }
  }

  const ripple = (index) => {
    toggled = !toggled;
    console.log(index)
    anime({
      targets: '#tiles',
      opacity: toggled ? 0 : 1,
      delay: anime.stagger(50, {
        grid: [columns, rows], 
        from: index
      })
    });
    console.log('ripple');
  };


  const Tiles = ({ index }) => (
    <button
      id="tiles"
      className="h-[50px] w-[50px] relative m-[1px] bg-stone-900 inline-block rounded-md"
      onClick={() =>ripple(index)}
    ></button>
  );
  const CreateTiles = ({ num }) => {
    var array = [];
    for (let i = 0; i < num; i++) {
      array.push(<Tiles key={i} index={i}/>);
    }
    return array;
  };

  const SomeButtons = () => (
    <div className="flex items-center justify-center py-2">
      <a href="#project" className="px-2">
        <button className="flex items-center justify-center p-2 px-3 bg-transparent text-white transition delay-150 duration-300 ease-in-out hover:scale-110 shadow-2xl">
          <FaProjectDiagram className="text-white mr-2" /> Projects
        </button>
      </a>
      <a href="/Resume.pdf" target="_blank" className="px-2">
        <button className="flex items-center justify-center p-2 px-3 bg-transparent border-2 border-indigo-100 text-white transition delay-150 duration-300 ease-in-out hover:rotate-y-360">
          <BiArrowToBottom className=" text-white mr-2" />
          Resume
        </button>
      </a>
    </div>
  );

  const About = () => (
    <div>
      <h1 className="font-Nexa text-4xl sm:text-7xl text-shadow-md text-center pt-4 pb-2">{Name}</h1>
      <p className="p-4 mx-0 sm:mx-14 max-w-screen-lg text-shadow-md min-w-[50%]">{Description}</p>
    </div>
  );

  const Body = () => (
    <div className="relative max-w-[880px]">
      <div className="relative m-2 py-12 text-white ">
        <About />
        <SomeButtons />
      </div>
    </div>
  );

  const ClickMe = () => (
    <div className='text-9xl absolute uppercase bg-transparent'>CLICK ANYWHERE</div>
  );

  return (
    <div id="home">
      <div className="flex items-center justify-center h-screen min-h-max">
        <Body />
        <div style={{ '--columns': columns }} className={`custom-cols w-full max-w-full overflow-clip grid absolute`}>
          <CreateTiles num={columns * rows} />
        </div>
        <ClickMe />

      </div>
    </div>
  );
}
