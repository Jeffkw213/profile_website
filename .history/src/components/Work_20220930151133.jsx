export default function Work({ employ }) {
  return (
    <div className="scroll-mt-10 h-screen p-2" id="work">
      <h1 className="font-Nexa text-4xl sm:text-7xl text-center pt-4 pb-2"> Work Experience </h1>
      {employ.map((item, index) => {
        return (
          <div key={index} className="">
            <div></div>
            <p>{item.Role}</p>
            <p>{item.Description}</p>
            <p>{item.Date}</p>
            <div className=""></div>
          </div>
        );
      })}
    </div>
  );
}
