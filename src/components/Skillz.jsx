export default function Skillz({Languages, Framework, Platform, Techniques}) {
  return (
    <div id="skill" className="h-screen m-20">
      <div className="border-4 m-4 p-4 ">
        <header>Languages</header>
        {Languages.map((item, i) => {
          return <li key={`1${i}`}>{item}</li>;
        })}
      </div>
      <div className="border-4 m-4 p-4 ">
        <header>Framework</header>
        {Framework.map((item, i) => {
          return <li key={`1${i}`}>{item}</li>;
        })}
      </div>
      <div className="border-4 m-4 p-4 ">
        <header>Platform</header>
        {Platform.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </div>
      <div className="border-4 m-4 p-4 ">
        <header>Techniques</header>
        {Techniques.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </div>
    </div>
  );
}
