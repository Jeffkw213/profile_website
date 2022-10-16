import { HiChevronDoubleDown } from 'react-icons/hi';
export default function Work({ employ }) {
  return (
    <div className="scroll-mt-20 h-screen max-w-1/2 flex flex-col justify-center items-center p-2" id="work">
      <h1 className="font-Nexa text-4xl sm:text-7xl text-center pt-4 pb-2"> Work Experience </h1>
      {employ.map((item, index) => {
        return (
          <div key={index} className="">
            <p>{item.Role}</p>
            <p>{item.Description}</p>
            <p>{item.Date}</p>
          </div>
        );
      })}
      <a href='#'></a>
      <HiChevronDoubleDown className="text-white m-32 bg-black mt-auto h-10 w-10 rounded-full animate-bounce flex justify-start items-center" />
    </div>
  );
}
