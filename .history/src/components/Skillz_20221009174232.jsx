export default function Skillz(props) {
  return (
    <div>
      {props.Languages.map((item) => {
        return (
          <li key={item.toString}>{item}</li>
        );
      })}
            {props.Languages.map((item) => {
        return (
          <li key={item.toString}>{item}</li>
        );
      })}
    </div>
  );
}
