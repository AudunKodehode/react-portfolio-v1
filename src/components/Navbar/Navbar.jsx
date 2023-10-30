import Navitem from "./Navitem";
import ContactComponent from "../Contact/ContactComponent";
import { RiLinkedinBoxLine, RiMailLine, RiGithubFill  } from "react-icons/ri";
export default function NavBar() {
  return (
    <nav>
      <h1>Audun</h1>

      <div className="navItems">
        <Navitem className="navItem" href="/">
          Home
        </Navitem>
        <Navitem className="navItem" href="/projects">
          Projects
        </Navitem>
        <Navitem className="navItem" href="/contact">
          Contact
        </Navitem>
      </div>
      <div className="contactComponents">
      <ContactComponent href="https://github.com/audunKodehode" text="Github"><RiGithubFill /></ContactComponent>
      <ContactComponent href="https://www.linkedin.com/in/audun-holmen-9b595926b/" text="Linkedin"><RiLinkedinBoxLine / ></ContactComponent>
      <ContactComponent href="" text="Email"><RiMailLine /></ContactComponent>
      </div>



    </nav>
  );
}
