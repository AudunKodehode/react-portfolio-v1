import ProjectsMapper from "../components/projects/ProjectsMapper";
import {
  projectsArray,
  frontendmentorArray,
  arduinoArray,
} from "../components/projects/ProjectsDoc";

export default function Projectspage() {
  return (
    <div className="projectsPage">
      <div className="projectTab">
        <h1>Projects</h1>
        <ProjectsMapper type={projectsArray} className="projects" />
      </div>

      <div className="projectTab">
        <h1>Arduino projects</h1>
        <ProjectsMapper type={arduinoArray} className="arduino" />
      </div>

      <div className="projectTab">
        <h1>Frontend Mentor challenges</h1>
        <ProjectsMapper type={frontendmentorArray} className="frontendMentor" />
      </div>
    </div>
  );
}
