import Education from './components/Education';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Title from './components/Title';
import Work from './components/Work';
import records from './data/records.json';
import Navitop from './components/NavigationTop';
const App = () => {
  return (
    <div className="scroll-smooth m-0 p-0 box-border relative font-Exo min-w-[800]">
      <header className="fixed flex w-full justify-between item-center px-4 md:px-12 h-20">
        <nav className="p-3 text-center fixed left-0 right-0 min-h-screen">
          <a href="#education">
            <button
              className="m-2 p-2 px-3 bg-transparent text-white rounded-full 
      transition delay-150 duration-300 ease-in-out hover:scale-110"
            >
              Education
            </button>
          </a>
          <a href="#work">
            <button
              className="m-2 p-2 px-3 bg-transparent text-white rounded-full 
      transition delay-150 duration-300 ease-in-out hover:scale-110"
            >
              Work Experience
            </button>
          </a>
          <a href="#project">
            <button
              className="m-2 p-2 px-3 bg-transparent text-white rounded-full 
      transition delay-150 duration-300 ease-in-out hover:scale-110"
            >
              Projects
            </button>
          </a>
          <a href="/Resume.pdf" target="_blank">
            <button
              className="m-2 p-2 px-3 bg-transparent text-white rounded-full
        transition delay-150 duration-300 ease-in-out hover:scale-110"
            >
              Resume
            </button>
          </a>
        </nav>
      </header>{' '}
      <Title {...records.Who} />
      <Education {...records.Education} id="education" />
      <Work employ={records.Employment} id="work" />
      <Projects id="project" />
      <Nav {...records.Social} />
    </div>
  );
};

export default App;
