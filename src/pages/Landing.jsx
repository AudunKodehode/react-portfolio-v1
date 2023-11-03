import ProjectIcon from "../components/projects/ProjectIcon";
import Subheader from "../components/Landing/Subheader";
export default function Landingpage() {
  return (
    <div className="landingPage">
      <div className="main">
        <div className="imageplaceholder fadeIn"></div>
        <div className="textplaceholder ">
          <h1>Mitt navn er Audun Holmen.</h1>
          <Subheader />
          <br></br>
          <p>
            Jeg har i mange år hatt interesse for koding, og har på egen hånd
            lært meg diverse kodespråk som C#, og Arduino for å lage
            dataprogrammer og elektroniske enheter med praktiske formål, og har
            3D-printing, 3D-modellering og programmering av kretskort som hobby.
          </p>
          <p>
            For tiden fordyper jeg meg i HTML, CSS, JavaScript og rammeverket
            React.
          </p>
          <div className="tags">
            <div className="tagGroup1 scrollLeft">
            <ProjectIcon type="HTML" />
            <ProjectIcon type="CSS" />
            <ProjectIcon type="JavaScript" />
            <ProjectIcon type="React" />
            <ProjectIcon type="3Dprint" />
            <ProjectIcon type="Arduino" />
            <ProjectIcon type="ESP8266" />
            <ProjectIcon type="C#" />
            <ProjectIcon type="WindowsForms" />
            </div>
            <div className="tagGroup2 scrollLeft">
            <ProjectIcon type="HTML" />
            <ProjectIcon type="CSS" />
            <ProjectIcon type="JavaScript" />
            <ProjectIcon type="React" />
            <ProjectIcon type="3Dprint" />
            <ProjectIcon type="Arduino" />
            <ProjectIcon type="ESP8266" />
            <ProjectIcon type="C#" />
            <ProjectIcon type="WindowsForms" />
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
