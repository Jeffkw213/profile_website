import { HiChevronDoubleDown } from 'react-icons/hi';
import anime from 'animejs/lib/anime.es.js'; //https://www.npmjs.com/package/animejs




export default function Work({ employ }) {
  function Employ() {
    return employ.map((item, index) => {
      return (
        <div key={index} className="flex items-center justify-center">
          <div className="text-light border-2 border-light w-132 m-4 p-2 rounded-md">
            <p>
              <strong className="text-idk text-xl"> Role</strong> : {item.Role}
            </p>
            <p>
              <strong className="text-idk text-xl">Description </strong> : {item.Description}
            </p>
            <p>
              <strong className="text-idk text-xl"> Date</strong> : {item.Date}
            </p>
          </div>
        </div>
      );
    });
  }
  const animation =() => {

    console.log("animation finished");
  }

  const Tile = () => {
    return(<button onClick={animation} className='h-[50px] w-[50px] bg-stone-500'></button>);
  }
  const Body = () => (
    <div className="bg-something rounded-2xl p-12 h-fit">
      <h2 className="font-Nexa text-4xl sm:text-6xl text-center font-bold text-nani uppercase">Coding Experience</h2>
      {Employ()}
    </div>
  );

  return (
    <div className="h-screen min-h-fit" id="work">
      <div className="flex justify-between p-16">
        <Body />
        <Tile />
        <div className="flex justify-center items-center">
          <div className="absolute right-24 h-[500px] w-[500px] bg-idk rounded-full blur-2xl opacity-70 mix-blend-multiply"/>
          <div className='absolute right-64 h-[500px] w-[500px] bg-something rounded-full blur-2xl opacity-70 mix-blend-multiply'/>
          <div className='absolute right-36 h-[500px] w-[500px] bg-light rounded-full blur-2xl mix-blend-multiply'/>
        </div>
      </div>
      <div className="flex justify-center">
        <a href="#project" className=" text-center m-6">
          <HiChevronDoubleDown className="text-light transparent mt-auto h-10 w-32 rounded-full animate-bounce flex justify-start items-center" />
        </a>
      </div>
    </div>
  );
}
