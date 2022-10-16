export default function Skillz(props) {
  return (
    <div>
      {props.Languages.map((item) => {
        return (
          <li key={item.toString}>{item}</li>
        );
      })}
      {props.Framework.map((item) => {
        return (
          <li key={item.toString}>{item}</li>
        );
      })}
            {props.Framework.map((item) => {
        return (
          <li key={item.toString}>{item}</li>
        );
      })}
    </div>
  );
}
