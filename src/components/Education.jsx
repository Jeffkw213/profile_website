export default function Education(props) {
  return (
    <div>
      <p>{props.School}</p>
      <p>{props.Degree}</p>
      <p>{props.RelatativeCoursework}</p>
      <p>
        {props.Start} - {props.Graduation}
      </p>
    </div>
  );
}
