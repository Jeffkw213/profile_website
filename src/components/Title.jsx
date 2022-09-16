// This is the title of the website
// There would be a breif discription of who I am
// And there would be a navigation button to scroll to a certain section of the page
const ButtonNavi = () => (
  <ul>
    <li>
      <button className="p-2 px-3 bg-black text-white rounded-full">Education</button>
    </li>
    <li>
      <button className="p-2 px-3 bg-black text-white rounded-full">Work Experience</button>
    </li>
  </ul>
);

export default function Title({ Name, Description }) {
  return (
    <div>
      <h1>
        <strong>{Name}</strong>
      </h1>
      <p>{Description}</p>
      <ButtonNavi />
    </div>
  );
}
