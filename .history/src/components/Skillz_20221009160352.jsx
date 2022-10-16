export default function Skillz({ skills }) {
  return (
    <div>
      {skills.Languages.map((item, index) => {
        return (
          <div key={index} className="">
            <p>{item.Languages}</p>
            <p>{item.Framework}</p>
            <p>{item.Platform}</p>
            <p>{item.Techniques}</p>
          </div>
        );
      })}
    </div>
  );
}
