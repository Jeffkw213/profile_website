import projects from '../data/projects';

export default function Projects() {
  return (
    <div className='h-screen p-2' id="project">
      {projects.map((item, index) => {
        return (
          <div key={index}>
            <h2 className=''>{item.name}</h2>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.link}
            </a>
            <p>{item.about}</p>
          </div>
        );
      })}
    </div>
  );
}
