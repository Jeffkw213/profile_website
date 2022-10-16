export default function Skillz({ Skills }) {
  return (
    <div>
      {employ.map((item, index) => {
        return (
          <div key={index} className="">
            <p>{item.Role}</p>
            <p>{item.Description}</p>
            <p>{item.Date}</p>
          </div>
        );
      })}
    </div>
  );
}
