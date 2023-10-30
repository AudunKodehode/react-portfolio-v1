import ProjectsMapper from "../components/projects/ProjectsMapper";

export default function Projectspage(){
    return (
        <div className="projectsPage">
            <h1>Projects</h1>
        <ProjectsMapper type={"projects"} />
        <h1>Frontend Mentor challenges</h1>
        <ProjectsMapper type={"frontendMentor"} />
        </div>
    )
}