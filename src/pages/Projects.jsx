import ProjectsMapper from "../components/projects/ProjectsMapper";
import {  projectsArray,  frontendmentorArray,  arduinoArray,} from "../components/projects/ProjectsDoc";

export default function Projectspage({language}) {
  {language === "no" ? document.title = "Prosjekter - Audun Holmen": (document.title = "Projects - Audun Holmen")}
  return (
    <div className="projectsPage">
      <div className="projectTab">
{language === "no" ? <h1>Prosjekter</h1>: (<h1>Projects</h1>)}
        <ProjectsMapper language={language} type={projectsArray} className="projects" />
      </div>

      <div className="projectTab">
{language === "no" ? <h1>Frontend Mentor utfordringer</h1>: (<h1>Frontend Mentor challenges</h1>)}
        <ProjectsMapper language={language} type={frontendmentorArray} className="frontendMentor" />
      </div>

      <div className="projectTab">
{language === "no" ? <h1>Andre prosjekter</h1>: (<h1>Other projects</h1>)}
        <ProjectsMapper language={language} type={arduinoArray} className="arduino" />
      </div>

    </div>
  );
}
