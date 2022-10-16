import Education from './components/Education';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Title from './components/Title';
import Work from './components/Work';
import records from './data/records.json';
import navitop from 
const App = () => {
  return (
    <div className="m-0 p-0 box-border relative font-Exo min-w-[800]">
      <Title {...records.Who} />
      <Education {...records.Education} />
      <Work employ={records.Employment} />
      <Projects />
      <Nav {...records.Social} />
    </div>
  );
};

export default App;
