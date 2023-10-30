import { SiHtml5, SiCss3, SiJavascript, SiMidi, SiArduino, SiFrontendmentor } from "react-icons/si";
import { AiOutlinePrinter } from "react-icons/ai";

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


          <div className="imagewrapper">
          <a href={project.url} target="_blank" rel="noreferrer">
            <img className="image" src={project.imageUrl} alt={project.name} />
          </a>
          </div>
          
          { project.languages.map((language, index) => (
            <div key={index} >
            {language === "Frontendmentor" ? <div className="projectIcon"><SiFrontendmentor />Frontend Mentor</div>: ""}
            {language === "HTML" ? <div className="projectIcon"><SiHtml5 />HTML</div>: ""}
            {language === "CSS" ? <div className="projectIcon"><SiCss3 />CSS</div>: ""}
            {language === "CSS" ? <div className="projectIcon"><SiJavascript />JavaScript</div>: ""}
            {language === "3Dprint" ? <div className="projectIcon"><AiOutlinePrinter />3D-print</div>: ""}
            {language === "MIDI" ? <div className="projectIcon"><SiMidi />MIDI</div>: ""}
            {language === "Arduino" ? <div className="projectIcon"><SiArduino />Arduino</div>: ""}
            {language === "ESP8266" ? <div className="projectIcon"><SiArduino />ESP8266</div>: ""}
            </div>
          ))}



        </div>
      ))}
    </div>
  );
}
