export default function Skillz(props) {
  return (
    <div>
      <div>
      {props.Languages.map((item) => {
        return <li key={item.toString}>{item}</li>;
      })}
      </div>
      <d></>
      {props.Framework.map((item) => {
        return <li key={item.toString}>{item}</li>;
      })}
      {props.Platform.map((item) => {
        return <li key={item.toString}>{item}</li>;
      })}
      {props.Techniques.map((item) => {
        return <li key={item.toString}>{item}</li>;
      })}
    </div>
  );
}