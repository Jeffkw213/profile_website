export default function ButtonNavi() {
  return (
    <header className="fixed flex w-full justify-between item-center px-4 md:px-12 h-24">
      <nav className="p-3 text-center fixed left-0">
        <button
          className="m-2 p-2 px-3 bg-black text-white rounded-full 
      transition delay-150 duration-300 ease-in-out hover:scale-110"
        >
          Education
        </button>
        <button
          className="m-2 p-2 px-3 bg-black text-white rounded-full 
      transition delay-150 duration-300 ease-in-out hover:scale-110"
        >
          Work Experience
        </button>
        <button
          className="m-2 p-2 px-3 bg-black text-white rounded-full 
      transition delay-150 duration-300 ease-in-out hover:scale-110"
        >
          Projects
        </button>
        <a href="/Resume.pdf" target="_blank">
          <button
            className="m-2 p-2 px-3 bg-black text-white rounded-full
        transition delay-150 duration-300 ease-in-out hover:scale-110 hover:bg-indigo-900"
          >
            Resume
          </button>
        </a>
      </nav>
    </header>
  );
}
