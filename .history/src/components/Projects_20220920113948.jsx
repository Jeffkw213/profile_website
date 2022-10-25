import projects from '../data/projects';

export default function Projects() {
  return (
    <div className='h-screen p-2'>
      {projects.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.name}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.link}
            </a>
          </div>
        );
      })}
    </div>
  );
}