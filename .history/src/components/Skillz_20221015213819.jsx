export default function Skillz(props) {
  return (
    <div id="skill">
      <div>
        <ul>
          {props.Languages.map((item) => {
            return <li key={item.toString}>{item}</li>;
          })}
        </ul>
      </div>

      <div>
        <ul>
          {props.Framework.map((item) => {
            return <li key={item.toString}>{item}</li>;
          })}
        </ul>
      </div>
      <div>
        <ul>
          {props.Platform.map((item) => {
            return <li key={item.toString}>{item}</li>;
          })}
        </ul>
      </div>
      <div>
        <ul>
          {props.Techniques.map((item) => {
            return <li key={item.toString}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
