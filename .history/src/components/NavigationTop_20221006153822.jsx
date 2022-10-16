import { RiContactsLine } from 'react-icons/ri';
import 'aos/dist/aos.css';

export default function ButtonNavi() {
  return (
    <header className="fixed flex w-full justify-end item-center h-20">
      <nav className="p-3 text-center">
        <div className='container flex justify-between items-center mx-auto'>
        <a href="#home">
          <button
            className="flex m-2 p-2 px-3 text-white 
      transition delay-150 duration-300 ease-in-out hover:scale-110"
          >
            Home
          </button>
        </a>

        <a href="#education">
          <button
            className="flex m-2 p-2 px-3 bg-transparent text-white 
      transition delay-150 duration-300 ease-in-out hover:scale-110"
          >
            Education
          </button>
        </a>
        <a href="#work">
          <button
            className="flex m-2 p-2 px-3 bg-transparent text-white 
      transition delay-150 duration-300 ease-in-out hover:scale-110"
          >
            Work Experience
          </button>
        </a>
        <a href="#contacts">
          <button
            className="flex items-center justify-center m-2 p-2 px-3 bg-transparent text-white 
        transition delay-150 duration-300 ease-in-out hover:scale-110 border border-slate-300 hover:rotate-y-360"
          >
            <RiContactsLine className=" text-white mr-2" />
            Contact
          </button>
        </a>
        </div>
      </nav>
    </header>
  );
}
