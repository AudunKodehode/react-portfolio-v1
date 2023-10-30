import { SiHtml5, SiCss3, SiJavascript, SiMidi, SiArduino, SiFrontendmentor } from "react-icons/si";
import logo3dprint from "../../../public/icons/3dprint.svg"
import logonightscout from "../../../public/icons/nightscout.svg"
export default function ProjectIcon({type}){
return (
    <>
    {type === "Frontendmentor" ? <div className="projectIcon"><SiFrontendmentor />Frontend Mentor</div>: ""}
            {type === "HTML" ? <div className="projectIcon"><SiHtml5 />HTML</div>: ""}
            {type === "CSS" ? <div className="projectIcon"><SiCss3 />CSS</div>: ""}
            {type === "CSS" ? <div className="projectIcon"><SiJavascript />JavaScript</div>: ""}
            {type === "3Dprint" ? <div className="projectIcon"><img src={logo3dprint} alt="3dprint" />3D-print</div>: ""}
            {type === "MIDI" ? <div className="projectIcon"><SiMidi />MIDI</div>: ""}
            {type === "Arduino" ? <div className="projectIcon"><SiArduino />Arduino</div>: ""}
            {type === "ESP8266" ? <div className="projectIcon"><SiArduino />ESP8266</div>: ""}
            {type === "NightScout" ? <div className="projectIcon"><img src={logonightscout} alt="nightscout" />Nightscout</div>: ""}
    </>
)
}