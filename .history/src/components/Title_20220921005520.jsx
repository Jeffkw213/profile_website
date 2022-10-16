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
        className="m-2 p-2 px-3 bg-teal-300 rounded-full
      transition delay-150 duration-300 ease-in-out hover:scale-110"
      >
        Resume
      </button>
    </a>
  </nav>
);

export default function Title({ Name, Description }) {
  return (
    <div className="grid h-screen place-items-center">
      <h1 className="font-Nexa text-8xl text-center pt-4 pb-2 ">{Name}</h1>
      <div>
        <p className="p-4 mx-14">{Description}</p>
        <ButtonNavi />
      </div>
    </div>
  );
}
