import ProjectsMapper from "../components/projects/ProjectsMapper";
import ProjectsMapper2 from "../components/projects/ProjectsMapper2";
import {
  projectsArray,
  frontendmentorArray,
  arduinoArray,
} from "../components/projects/ProjectsDoc";

export default function Projectspage() {
  return (
    <div className="projectsPage">

      
      <div className="projectTab">
        <h1>Prosjekter</h1>
        {/* <ProjectsMapper type={projectsArray} className="projects" /> */}
        <ProjectsMapper2 type={projectsArray} className="projects" />
      </div>

      <div className="projectTab">
        <h1>Andre prosjekter</h1>
        {/* <ProjectsMapper type={arduinoArray} className="arduino" /> */}
        <ProjectsMapper2 type={arduinoArray} className="projects" />
      </div>

      <div className="projectTab">
        <h1>Frontend Mentor challenges</h1>
        {/* <ProjectsMapper type={frontendmentorArray} className="frontendMentor" /> */}
        <ProjectsMapper2 type={frontendmentorArray} className="projects" />
      </div>


    </div>
  );
}
