export default function Skillz({ skills }) {
  return (
    <div>
      {skills.map((item, index) => {
        return (
          <div key={index} className="">
            <p>{item.Languages}</p>
            <p>{item.Framework}</p>
            <p>{item.Platform}</p>
          </div>
        );
      })}
    </div>
  );
}
