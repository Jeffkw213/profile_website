export default function Education(props) {
  return (
    <div className=" h-screen p-2" id="education">
      <div>
        <h1 className="font-Nexa text-7xl">Education</h1>
      </div>
      <p>{props.School}</p>
      <p>{props.Degree}</p>
      <p></p>
      <p>Relative Course Work: {props.RelatativeCoursework}</p>
      <p>Date</p>
      <p>
        {props.Start} - {props.Graduation}
      </p>
    </div>



  );
}