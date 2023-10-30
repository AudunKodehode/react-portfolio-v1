import ProjectIcon from "./ProjectIcon";

export default function ProjectsMapper({ type, className }) {
  const selectedArray = type;
  return (
    <div className={className}>
      {selectedArray.map((project, index) => (
        <div className="projectCard" key={index}>
          <a href={project.repository}>
            <h2 className="name">{project.name}</h2>
          </a>
          <p className="description">{project.description}</p>

          <div className="imageTags">
          <div className="imagewrapper">
          <a href={project.url} target="_blank" rel="noreferrer">
            <img className="image" src={project.imageUrl} alt={project.name} />
          </a>
          </div>
          
          <div className="tags">
          { project.languages.map((language, index) => (
            <div className="tag" key={index}>
              <ProjectIcon type={language} />
              </div>
          ))}
          </div>
          </div>

        </div>
      ))}
    </div>
  );
}
