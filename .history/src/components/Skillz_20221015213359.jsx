export default function Skillz(props) {
  return (
    <div id="">
      <div>
        {props.Languages.map((item) => {
          return <li key={item.toString}>{item}</li>;
        })}
      </div>
      <div>
        {props.Framework.map((item) => {
          return <li key={item.toString}>{item}</li>;
        })}
      </div>
      <div>
        {props.Platform.map((item) => {
          return <li key={item.toString}>{item}</li>;
        })}
      </div>
      <div>
        {props.Techniques.map((item) => {
          return <li key={item.toString}>{item}</li>;
        })}
      </div>
    </div>
  );
}
