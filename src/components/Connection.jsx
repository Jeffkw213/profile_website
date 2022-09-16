export default function Connection(props) {
  return (
    <div><a href={`mailto:${props.Email}?subject=Hi%20I'm%20Stupid`}>{props.Email}</a></div>
  )
}
