import Navitem from "./Navitem";
import ContactComponent from "../Contact/ContactComponent";
import { RiLinkedinBoxLine, RiGithubFill  } from "react-icons/ri";

export default function NavBar({active, setActive}) {

  return (
    <nav>
      <h1>Audun</h1>

      <div className="navItems">
        <Navitem onClick={() => setActive("Home")} className={` navItem ${active === "Home" ? "active" : ""}`} to="/">
          Home
        </Navitem>

        <Navitem onClick={() => setActive("Projects")} className={` navItem ${active === "Projects" ? "active" : ""}`} to="/projects">
          Projects
        </Navitem>

        <Navitem onClick={() => setActive("Contact")} className={` navItem ${active === "Contact" ? "active" : ""}`} to="/contact">
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
