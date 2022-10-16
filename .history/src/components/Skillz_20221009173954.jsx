export default function Skillz(props) {
  return (
    <div>
      {props.Languages.map((item) => {
        return (
          <li key={}>item</li>
        );
      })}
      <p>{props.Languages}</p>
    </div>
  );
}
