import {RiContactsLine} from 'react-icons/ri'

export default function ButtonNavi() {
  return (
    <header className="fixed w-full justify-between item-center px-4 md:px-12 h-20">
      <nav className="p-3 text-center fixed left-0 right-0">
        <a href="#home">
          <button
            className="m-2 p-2 px-3 bg-indigo-400 text-white 
      transition delay-150 duration-300 ease-in-out hover:scale-110"
          >
            HOME
          </button>
        </a>

        <a href="#education">
          <button
            className="m-2 p-2 px-3 bg-transparent text-white 
      transition delay-150 duration-300 ease-in-out hover:scale-110"
          >
            Education
          </button>
        </a>
        <a href="#work">
          <button
            className="m-2 p-2 px-3 bg-transparent text-white 
      transition delay-150 duration-300 ease-in-out hover:scale-110"
          >
            Work Experience
          </button>
        </a>
        <a href="#project">
          <button
            className="m-2 p-2 px-3 bg-transparent text-white 
      transition delay-150 duration-300 ease-in-out hover:scale-110"
          >
            Projects
          </button>
        </a>
        <a href="#contacts">
          <button
            className="m-2 p-2 px-3 bg-transparent text-white 
        transition delay-150 duration-300 ease-in-out hover:scale-110 border border-slate-300 hover:border-slate-400"
          >
            <RiContactsLine className=" text-white mr-2"/>
            Contact
          </button>
        </a>
      </nav>
    </header>
  );
}
