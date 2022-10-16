import Education from './components/Education';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Title from './components/Title';
import Work from './components/Work';
import records from './data/records.json';
import Navitop from './components/NavigationTop';
const App = () => {
  return (
    <div className="snap-y h-screen w-screen font-Exo min-w-[800] overflow-scroll">
      <div className='snap-start bg-amber-400 w-screen h-screen flex items-center justify-center text-8xl'>1</div>
      <div className='snap-start bg-amber-400 w-screen h-screen flex items-center justify-center text-8xl'>2</div>
      <div className='snap-start bg-amber-400 w-screen h-screen flex items-center justify-center text-8xl'>3</div>
      <div className='snap-start bg-amber-400 w-screen h-screen flex items-center justify-center text-8xl'>4</div>
      <div className='snap-start bg-amber-400 w-screen h-screen flex items-center justify-center text-8xl'>5</div>

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
