import { RiContactsLine } from 'react-icons/ri';
import 'aos/dist/aos.css';

export default function ButtonNavi() {
  const Button = ({ name }) => (
    <button className="flex m-2 p-2 px-3 text-white transition delay-150 duration-300 ease-in-out hover:scale-110">
      {name}
    </button>
  );

  const SpecialButton = ({ name }) => (
    <button className="flex items-center justify-center m-2 p-2 px-3 bg-transparent text-white border border-slate-300 transition delay-150 duration-300 ease-in-out  hover:rotate-x-360">
      <RiContactsLine className=" text-white mr-2" />
      {name}
    </button>
  );

  const NavButtons = () => (
    <div className="container flex justify-between items-center mx-auto">
      <a href="#home">
        <Button name="Home" />
      </a>
      <a href="#education">
        <Button name="Education" />
      </a>
      <a href="#work">
        <Button name="Work Experience" />
      </a>
      <a href="#contacts">
        <SpecialButton name="Contact" />
      </a>
    </div>
  );

  return (
    <header className="fixed flex w-full justify-end item-center h-20">
      <nav className="p-3 text-center">
        <NavButtons />
      </nav>
    </header>
  );
}
