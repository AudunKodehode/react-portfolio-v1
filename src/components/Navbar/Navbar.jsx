import Navitem from "./Navitem";
import ContactComponent from "../Contact/ContactComponent";
import { RiLinkedinBoxLine, RiGithubFill  } from "react-icons/ri";

export default function NavBar({pathname}) {

  return (
    <nav>
      <h1>Audun</h1>

      <div className="navItems">
        <Navitem className={` navItem ${pathname === "/" ? "active" : ""}`} to="/">
          Home
        </Navitem>

        <Navitem className={` navItem ${pathname === "/projects" ? "active" : ""}`} to="/projects">
          Projects
        </Navitem>

        
        <Navitem className={` navItem ${pathname === "/contact" ? "active" : ""}`} to="/contact">
          Contact
        </Navitem>

      </div>
      <div className="contactComponents">
      <ContactComponent href="https://github.com/audunKodehode" text="Github"><RiGithubFill /></ContactComponent>
      <ContactComponent href="https://www.linkedin.com/in/audun-holmen-9b595926b/" text="Linkedin"><RiLinkedinBoxLine / ></ContactComponent>
      </div>



    </nav>
  );
}
