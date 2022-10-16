export default function Education(props) {
  return (
    <div className="scroll-mt-10 h-screen p-2" id="education">
      <div>
        <h1 className="font-Nexa text-7xl">Education</h1>
      </div>
      <p>{props.School}</p>
      <p>{props.Degree}</p>
      <p>Relative Course Work</p>
      <p>{props.RelatativeCoursework}</p>
      <p>Date</p>
      <p>
        {props.Start} - {props.Graduation}
      </p>
    </div>



  );
}
