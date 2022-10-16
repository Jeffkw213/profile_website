export default function Skillz(props) {
  return (
    <div>
      {props.Languages.map((item) => {
        return (
          <li></li>
        );
      })}
      <p>{props.Languages}</p>
    </div>
  );
}
