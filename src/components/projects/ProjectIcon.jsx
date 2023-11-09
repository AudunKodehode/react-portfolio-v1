import { SiHtml5, SiCss3, SiJavascript, SiMidi, SiArduino, SiFrontendmentor, SiSharp, SiReact, SiSass } from "react-icons/si";
import logo3dprint from "../../../public/icons/3dprint.svg"
import logonightscout from "../../../public/icons/nightscout.svg"
import windowsforms from "../../../public/icons/windowsforms.svg"
export default function ProjectIcon({type}){
return (
    <>
    {type === "Frontendmentor" ? <div className="projectIcon"><SiFrontendmentor />Frontend Mentor</div>: ""}
            {type === "HTML" ? <div className="projectIcon"><SiHtml5 />HTML</div>: ""}
            {type === "CSS" ? <div className="projectIcon"><SiCss3 />CSS</div>: ""}
            {type === "JavaScript" ? <div className="projectIcon"><SiJavascript />JavaScript</div>: ""}
            {type === "React" ? <div className="projectIcon"><SiReact />React</div>: ""}
            {type === "3Dprint" ? <div className="projectIcon"><img src={logo3dprint} alt="3dprint" />3D-print</div>: ""}
            {type === "MIDI" ? <div className="projectIcon"><SiMidi />MIDI</div>: ""}
            {type === "Arduino" ? <div className="projectIcon"><SiArduino />Arduino</div>: ""}
            {type === "ESP8266" ? <div className="projectIcon"><SiArduino />ESP8266</div>: ""}
            {type === "NightScout" ? <div className="projectIcon"><img src={logonightscout} alt="nightscout" />Nightscout</div>: ""}
            {type === "C#" ? <div className="projectIcon"><SiSharp />C#</div>: ""}
            {type === "WindowsForms" ? <div className="projectIcon"><img src={windowsforms} alt="Windows Forms" />Windows Forms</div>: ""}
            {type === "Sass" ? <div className="projectIcon"><SiSass />Sass</div>: ""}

    </>
)
}