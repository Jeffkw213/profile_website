// This is the title of the website
// There would be a breif discription of who I am
// And there would be a navigation button to scroll to a certain section of the page
const ButtonNavi = () => (
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
      transition delay-150 duration-300 ease-in-out hover:scale-110 hover:bg-rose-900"
      >
        Resume
      </button>
    </a>
  </nav>
);

export default function Title({ Name, Description }) {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-gradient-to-r from-indigo-900 rounded-full py-10 text-gray-300">
        <h1 className="font-Nexa text-8xl text-center pt-4 pb-2 ">{Name}</h1>
        <p className="p-4 mx-14 w-[1100px]">{Description}</p>
        <ButtonNavi />
      </div>
      <svg className="svg-indicator">
        <circle className="svg-indicator-track" />
        <circle className="svg-indicator-indication" />
      </svg>
    </div>
  );
}
