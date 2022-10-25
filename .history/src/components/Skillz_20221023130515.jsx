export default function Skillz(props) {
  return (
    <div id="skill" className="h-screen">
      {/* <div>
        {props.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </div> */}
      <div>
        <header>Languages</header>
        {props.Languages.map((item, i) => {
          return <li key={`1${i}`}>{item}</li>;
        })}
      </div>
      <div>
      <header>Languages</header>
              {props.Framework.map((item, i) => {
          return <li key={`1${i}`}>{item}</li>;
        })}
      </div>
      <div>
      <header>Languages</header>
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