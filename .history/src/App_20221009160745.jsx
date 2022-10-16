import Education from './components/Education';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Title from './components/Title';
import Work from './components/Work';
import records from './data/records.json';
import Navitop from './components/NavigationTop';
import Skillz from './components/Skillz';

const App = () => {
  return (
    <div className="scroll-smooth w-full box-border relative font-Exo min-w-[800]">
      <Navitop />
      <Title {...records.Who} />
      <Education {...records.Education} />
      <Work employ={records.Employment} />
      <Projects />
      <Skillz skills={..records.Who}/>
      <Nav {...records.Social} />
    </div>
  );
};

export default App;
