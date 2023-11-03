import ProjectIcon from "./ProjectIcon";

export default function ProjectsMapper2({ type, className }) {
  const selectedArray = type;
  return (
    <div className={className}>
      {selectedArray.map((project, index) => (
        <div className="scene" key={index}>

        </div>
      ))}
    </div>
  );
}
