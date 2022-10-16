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
      transition delay-150 duration-300 ease-in-out hover:scale-110 hover:bg-ind-900"
      >
        Resume
      </button>
    </a>
  </nav>
);

export default function Title({ Name, Description }) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="relative">
        <div className="absolute top-0 -left-0 w-72 h-72 bg-purple-300 filter rounded-full blur-xl opacity-70"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 filter rounded-full blur-xl opacity-70"></div>

        <div className="relative bg-gradient-to-r from-indigo-900 to-indigo-500 rounded-full py-10 text-gray-300 opacity-100">
          <h1 className="font-Nexa text-8xl text-center pt-4 pb-2 ">{Name}</h1>
          <p className="p-4 mx-14 w-[1100px]">{Description}</p>
          <ButtonNavi />
        </div>
      </div>
    </div>
  );
}
