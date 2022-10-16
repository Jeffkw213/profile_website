import Education from './components/Education';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Title from './components/Title';
import Work from './components/Work';
import records from './data/records.json';
import Navitop from './components/NavigationTop';
const App = () => {
  return (
    <div className="snap-y m-0 p-0 box-border relative font-Exo min-w-[800] overflow-scroll">
      <div className='snap-start bg-am'></div>
      {/* <Navitop /> */}
      {/* <Title {...records.Who} />
      <Education {...records.Education} />
      <Work employ={records.Employment} />
      <Projects />
      <Nav {...records.Social} /> */}
    </div>
  );
};

export default App;
