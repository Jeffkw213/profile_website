import { HiChevronDoubleDown } from 'react-icons/hi';
export default function Work({ employ }) {
  function Employ() {
    return employ.map((item, index) => {
      return (
        <div key={index} className='flex items-center justify-center'>
        <div className="text-light border-2 border-light w-132 m-4 p-2 rounded-md">
          <p><strong className='text-idk text-xl'> Role</strong>{' '} : {item.Role}</p>
          <p><strong className='text-idk text-xl'>Description </strong> {' '} : {item.Description}</p>
          <p><strong className='text-idk text-xl'> Date</strong>{' '} : {item.Date}</p>
        </div>
        </div>
      );
    });
  }

  const Body = () => (
    <div className="bg-something rounded-2xl p-12">
      <h2 className="font-Nexa text-4xl sm:text-6xl text-center font-bold text-idk uppercase">Coding Experience</h2>
      {Employ()}
    </div>
  );

  return (
    <div className="bg-dark max-w-1/2 w-full h-screen" id="work">
      <div className="grid place-items-start p-16">
        <Body />
        <a href="#project" className="text-center items-center m-6">
          <HiChevronDoubleDown className="text-light transparent mt-auto h-10 w-32 rounded-full animate-bounce flex justify-start items-center" />
        </a>
      </div>
    </div>
  );
}
