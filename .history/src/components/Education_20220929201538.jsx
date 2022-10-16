export default function Education(props) {
  return (
    <div className=" h-screen p-2" id="education">
      <div>
        <h1 className="font-Nexa text-7xl">Education</h1>
      </div>
      <p>{props.School}</p>
      <p>{props.Degree}</p>
      <p><strong>Relative Course Work</strong>: {props.RelatativeCoursework}</p>
      <p></p>
      <p>
      <strong>Date</strong>:  props.Start} - {props.Graduation}
      </p>
    </div>



  );
}
