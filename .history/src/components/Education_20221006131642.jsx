export default function Education(props) {
  return (
    <div className=" h-screen p-2 bg-black text-co" id="education">
      <div>
        <h1 className="font-Nexa text-4xl sm:text-7xl text-center pt-4 pb-2">Education</h1>
      </div>
      <p>{props.School}</p>
      <p>{props.Degree}</p>
      <p><strong>Relative Course Work</strong>: {props.RelatativeCoursework}</p>
      <p>
      <strong>Date</strong>: {props.Start} - {props.Graduation}
      </p>
    </div>



  );
}
