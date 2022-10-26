import { HiChevronDoubleDown } from 'react-icons/hi';
export default function Work({ employ }) {
  return (
    <div className="h-screen w-full max-w-1/2 bg-black">
      <div className="flex items-center justify-center " id="work">
        <div className="bg-violet-700">
          <h2 className="font-Nexa text-4xl sm:text-7xl text-center font-bold pt-4 pb-2 text-white">
            {' '}
            Work Experience{' '}
          </h2>
          {employ.map((item, index) => {
            return (
              <div key={index} className="text-white border-2 border-white w-132 m-4">
                <p className="">{item.Role}</p>
                <p className="w-128">{item.Description}</p>
                <p>{item.Date}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <a href="#project" className="text-center items-center">
          <HiChevronDoubleDown className="text-white bg-red-700 mt-auto h-10 w-10 rounded-full animate-bounce flex justify-start items-center" />
        </a>
      </div>
    </div>
  );
}
