export default function Skillz({ skills }) {
  return (
    <div>
      {skills.map((item, index) => {
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
