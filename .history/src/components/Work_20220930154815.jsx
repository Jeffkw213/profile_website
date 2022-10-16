export default function Work({ employ }) {
  return (
    <div className="h-screen max-w-1/2 flex flex-col justify-center items-center p-2" id="work">
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
            <div className="m-10 bg-black mt-auto h-10 w-10 rounded-full"></div>

    </div>
  );
}
