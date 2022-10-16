export default function Skillz({ skills }) {
  return (
    <div>
      {skills.Languages.map((item, index) => {
        return (
          <div key={index} className="">
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
}
