export default function Work({ employ }) {
  return (
    <div className="h-screen p-2">
      <h1 className="font-Nexa text-7xl"> Work Experience </h1>
      {employ.map((item, index) => {
        return (
          <div key={index} className="">
            <div></div>
            <p>{item.Role}</p>
            <p>{item.Description}</p>
            <p>{item.Date}</p>
          </div>
        );
      })}
    </div>
  );
}
