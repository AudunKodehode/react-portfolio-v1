import { projectsArray, frontendmentorArray } from "./ProjectsDoc";

export default function ProjectsMapper({ type }) {
  const selectedArray =
    type === "projects" ? projectsArray : frontendmentorArray;
  return (
    <div className={type}>
      {selectedArray.map((project, index) => (
        <div className="projectCard" key={index}>
          <a href={project.repository}>
            <h2 className="name">{project.name}</h2>
          </a>
          <p className="description">{project.description}</p>
          <a href={project.url} target="_blank">
          <div className="imagewrapper">
            <img className="image" src={project.imageUrl} alt={project.name} />
          </div>
          </a>
          { project.languages.map((language, index) => (
            <h5 className="language" key={index}>#{language}</h5>
          ))}
        </div>
      ))}
    </div>
  );
}
