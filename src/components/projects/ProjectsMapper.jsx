import ProjectIcon from "./ProjectIcon";

export default function ProjectsMapper({ type, className }) {
  const selectedArray = type;
  return (
    
      
    <div className={className}>
      {selectedArray.map((project, index) => (
        <div className="projectCard" key={index}>
          <a target="_blank" href={project.repository}>
            <h2 className="name">{project.name}</h2>
          </a>
          <p className="description">{project.description}</p>

          <div className="imageTags">
            <div className="imagewrapper">
              <a href={project.url} target="_blank" rel="noreferrer">
                <img
                  className="image"
                  src={project.localUrl}
                  alt={project.name}
                />
              </a>
            </div>

            <div className="tags">
              {project.languages.map((language, index) => (
                <ProjectIcon type={language} key={index} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

}

