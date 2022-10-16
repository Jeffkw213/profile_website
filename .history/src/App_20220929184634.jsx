import Education from './components/Education';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Title from './components/Title';
import Work from './components/Work';
import records from './data/records.json';
import Navitop from './components/NavigationTop'
const App = () => {
  return (
    <div className="scroll-smooth m-0 p-0 box-border relative font-Exo min-w-[800]">
      <Navitop />
      <Title {...records.Who}/>
      <Education {...records.Education} id="education"/>
      <Work employ={records.Employment} id="work"/>
      <Projects id="project"/>
      <Nav {...records.Social} />
    </div>
  );
};

export default App;
