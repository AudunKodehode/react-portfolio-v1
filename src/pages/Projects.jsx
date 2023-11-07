import ProjectsMapper from "../components/projects/ProjectsMapper";
import {  projectsArray,  frontendmentorArray,  arduinoArray,} from "../components/projects/ProjectsDoc";

export default function Projectspage({language}) {
  return (
    <div className="projectsPage">
      <div className="projectTab">
{language === "no" ? <h1>Prosjekter</h1>: (<h1>Projects</h1>)}
        <ProjectsMapper type={projectsArray} className="projects" />
      </div>

      <div className="projectTab">
{language === "no" ? <h1>Frontend Mentor utfordringer</h1>: (<h1>Frontend Mentor challenges</h1>)}
        <ProjectsMapper type={frontendmentorArray} className="frontendMentor" />
      </div>

      <div className="projectTab">
{language === "no" ? <h1>Andre prosjekter</h1>: (<h1>Other projects</h1>)}
        <ProjectsMapper type={arduinoArray} className="arduino" />
      </div>

    </div>
  );
}
