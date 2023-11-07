import Navitem from "./Navitem";
import ContactComponent from "../Contact/ContactComponent";
import {
  RiLinkedinBoxLine,
  RiGithubFill,
  RiMailSendLine,
} from "react-icons/ri";
import LanguageSwitcher from "./LanguageSwitcher";
export default function NavBar({ pathname, language, setLanguage }) {
  return (
    <nav>
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
      {language === "no" ? (
        <>
          <div className="navItems">
            <Navitem></Navitem>


            <Navitem
              className={` navItem ${pathname === "/" ? "active" : ""}`}
              to="/"
            >
              Hjem
            </Navitem>
            <Navitem
              className={` navItem ${pathname === "/projects" ? "active" : ""}`}
              to="/projects"
            >
              Prosjekter
            </Navitem>
            <Navitem
              className={` navItem ${pathname === "/contact" ? "active" : ""}`}
              to="/contact"
            >
              Kontakt
            </Navitem>
          </div>
        </>
      ) : (
        <>
          <div className="navItems">
            <Navitem
              className={` navItem ${pathname === "/" ? "active" : ""}`}
              to="/"
            >
              Home
            </Navitem>
            <Navitem
              className={` navItem ${pathname === "/projects" ? "active" : ""}`}
              to="/projects"
            >
              Projects
            </Navitem>
            <Navitem
              className={` navItem ${pathname === "/contact" ? "active" : ""}`}
              to="/contact"
            >
              Contact
            </Navitem>
          </div>
        </>
      )}

      <div className="contactComponents">
        <ContactComponent href="https://github.com/audunKodehode" text="">
          <RiGithubFill />
        </ContactComponent>
        <ContactComponent
          href="https://www.linkedin.com/in/audun-holmen-9b595926b/"
          text=""
        >
          <RiLinkedinBoxLine />
        </ContactComponent>
        <ContactComponent href="mailto:audunkodehode@gmail.com" text="">
          <RiMailSendLine />
        </ContactComponent>
      </div>
    </nav>
  );
}
