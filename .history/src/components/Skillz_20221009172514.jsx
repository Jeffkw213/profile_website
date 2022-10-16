export default function Skillz(props) {
  return (
    <div>
      {props.Languages.map((item) => {
        return (
          <div key={index} className="">
            <p>{item.Role}</p>
            <p>{item.Description}</p>
            <p>{item.Date}</p>
          </div>
        );
      })}
      <p>{props.Languages}</p>
    </div>
  );
}
