export default function ButtonNavi() {
  // changing color while scrolling

  return (
    <header className="fixed flex w-full justify-between item-center px-4 md:px-12 h-20">
      <nav className="p-3 text-center fixed left-0 right-0 min-h-screen">
      <a href="#education"> 
        <button
          className="m-2 p-2 px-3 bg-transparent text-white rounded-full 
      transition delay-150 duration-300 ease-in-out hover:scale-110"
        >
          Education</a>
        </button>
        <a href="#work">
          <button
            className="m-2 p-2 px-3 bg-transparent text-white rounded-full 
      transition delay-150 duration-300 ease-in-out hover:scale-110"
          >
            Work Experience
          </button>
        </a>
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