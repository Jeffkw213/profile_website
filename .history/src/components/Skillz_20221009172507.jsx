export default function Skillz(props) {
  return (
    <div>
      {props.Languages.map((item, index) => {
        return (
          <div className="">
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
