import projects from '../data/projects';

export default function Projects() {
  return (
    <div className='h-screen p-2' id="project">
      {projects.map((item, index) => {
        return (
          <div key={index}>
            <>{item.name}</>
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