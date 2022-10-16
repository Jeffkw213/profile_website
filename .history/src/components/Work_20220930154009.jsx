export default function Work({ employ }) {
  return (
    <div className="scroll-mt-10 h-screen flex flex-col p-2" id="work">
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
    <div className="bg-black  h-3 w-3 bottom-0 rounded-full"></div>
    </div>
  );
}
