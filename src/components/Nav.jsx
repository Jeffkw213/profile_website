//This is gonna be the navigation bar
//Need to create a list of

export const List = (props) => (
  <ul>
    <li>
      <a href={props.Linkedin} target="_blank" rel="noopener noreferrer">
        Linkedin
      </a>
    </li>
    <li>
      <a href={props.Github} target="_blank" rel="noopener noreferrer">
        Github
      </a>
    </li>
    <li>
      <a href="/Resume.pdf" target="_blank">
        Resume
      </a>
    </li>
  </ul>
);

export default function Nav(props) {
  return (
    <div>
      <List {...props} />
    </div>
  );
}
