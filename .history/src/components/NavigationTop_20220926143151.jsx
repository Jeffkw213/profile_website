export default function ButtonNavi() {
  return (
    <header className="bg-amber-700 h-4">
      <nav className="p-3 text-center">
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
