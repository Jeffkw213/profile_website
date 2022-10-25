export default function Skillz(props) {
  return (
    <div id="skill" className="h-screen w-full m-20">
      {/* <div>
        {props.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </div> */}
      <div className="border-4">
        <header>Languages</header>
        {props.Languages.map((item, i) => {
          return <li key={`1${i}`}>{item}</li>;
        })}
      </div>
      <div>
        <header>Framework</header>
        {props.Framework.map((item, i) => {
          return <li key={`1${i}`}>{item}</li>;
        })}
      </div>
      <div>
        <header>Platform</header>
        {props.Platform.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </div>
      <div>
        <header>Techniques</header>
        {props.Techniques.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </div>
    </div>
  );
}
