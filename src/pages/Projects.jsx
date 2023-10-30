import ProjectsMapper from "../components/projects/ProjectsMapper";
import { projectsArray, frontendmentorArray, arduinoArray } from "../components/projects/ProjectsDoc";

export default function Projectspage(){
    return (
        <div className="projectsPage">

            <h1>Projects</h1>
        <ProjectsMapper type={projectsArray} className="projects" />

        <h1>Arduino projects</h1>
        <ProjectsMapper type={arduinoArray} className="arduino" />
        
        <h1>Frontend Mentor challenges</h1>
        <ProjectsMapper type={frontendmentorArray} className="frontendMentor"/>


        </div>
    )
}