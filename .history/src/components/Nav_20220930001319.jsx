//This is gonna be the navigation bar
//Need to create a list of
import Git from '../data/GitHub-Mark-64px.png';
import Linkedin from '../data/LI-In-Bug.png';
import Gmail from '../data/Gmail_Logo_64px.png';
export const List = (props) => (
  <nav className="flex justify-center">
    <ul className="">
      <li className="inline-block">
        <a href={props.Linkedin} target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} alt="Linkedin Logo" className="h-16 opacity-[.25]" />
        </a>
      </li>
      <li className="inline-block">
        <a href={props.Github} target="_blank" rel="noopener noreferrer">
          <img src={Git} alt="Git Logo" className="h-16 opacity-[.25]" />
        </a>
      </li>
      <li className="inline-block ml-2">
        <a href={`mailto:${props.Email}?subject=Hi%20I'm%20Stupid`}>
          <img src={Gmail} alt="Gmail Logo" className="h-16 opacity-[.25]" />
        </a>
      </li>
    </ul>
  </nav>
);

export default function Nav(props) {
  return (
    <div className="h-20 relative w-full py-2 text-center bg-" id='contacts'>
      <List {...props} />
    </div>
  );
}
