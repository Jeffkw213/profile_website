import Education from './components/Education';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Title from './components/Title';
import Work from './components/Work';
import records from './data/records.json';
import Navitop from './components/NavigationTop';
import Skillz from './components/Skillz';
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
  return (
    <ParallaxProvider>
      <div className="scroll-smooth w-full box-border relative font-Exo min-w-[800] bg-gradient-to-r from-indigo-500 via-red-500 to-indigo-500 background-animate max-w-1/2 text-white">
        <Navitop />
        <Title {...records.Who} />
        <Education {...records.Education} />
        <Work employ={records.Employment} />
        <Projects />
        <Skillz {...records.Skills} />
        <Nav {...records.Social} />
      </div>
    </ParallaxProvider>
  );
};

export default App;
