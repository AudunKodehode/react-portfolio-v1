import ProjectIcon from "../components/projects/ProjectIcon";
import Subheader from "../components/Landing/Subheader";
export default function Landingpage({ language }) {
  return (
    <div className="landingPage">
      <div className="main">
        <div className="imageplaceholder fadeIn"></div>
        <div className="mainText ">
          {language === "no" ? (
            <>
              <h1>Mitt navn er Audun Holmen</h1>

              <Subheader
                millis={2000}
                headerText={["Programmerer", "3D-printer", "Kodehode"]}
              />
              <p className="description">
                Jeg har alltid hatt en lidenskap for koding og har tilegnet meg
                ferdigheter i språk som C#, C++, og JavaScript for å lage
                dataprogrammer og praktiske elektroniske enheter.
                <br /> Mine største hobbyer er programmering av mikrokontrollere
                og 3d-printing og modellering..
              </p>
              <p className="subDescription">
                For tiden fordyper jeg meg i HTML, CSS, JavaScript og
                rammeverket React.
              </p>
            </>
          ) : (
            <>
              <h1>My name is Audun Holmen</h1>
              <Subheader
                millis={2000}
                headerText={["Programmer", "Coder", "3D-printer"]}
              />
              <p className="description">
                I have always been passionate about coding, and I have acquired
                skills in languages such as C#, C++, and JavaScript to create
                computer programs and practical electronic devices. <br />
                My biggest hobbies are programming microcontrollers, 3d-printing
                and modeling.
              </p>
              <p className="subDescription">
                For the time being I&apos;m diving deeper into HTML, CSS, JavaScript 
                and the React framework.
              </p>
            </>
          )}
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
