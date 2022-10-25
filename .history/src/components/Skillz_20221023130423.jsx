export default function Skillz(props) {
  return (
    <div id="skill" className="h-screen">
      {/* <div>
        {props.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </div> */}
      <div>
        {props.Languages.map((item, i) => {
          return <li key={`1${i}`}>{item}</li>;
        })}
      </div>
      <div>
        {props.Framework.map((item, i) => {
          return <li key={`1${i}`}>{item}</li>;
        })}
      </div>
      <div>
        {props.Platform.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </div>
      <div>
        {props.Techniques.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </div>
    </div>
  );
}
