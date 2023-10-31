import { Routes, Route, useLocation } from "react-router-dom";
import Landingpage from "./pages/Landing";
import Contactpage from "./pages/Contact";
import Projectspage from "./pages/Projects";
import NavBar from "./components/Navbar/Navbar";
import "./App.css";
function App() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
        <NavBar pathname={pathname}  />
        <Routes>
          <Route path="/" element={<Landingpage  />} />
          <Route
            path="/projects"
            element={<Projectspage  />}
          />
          <Route
            path="/contact"
            element={<Contactpage  />}
          />
        </Routes>
    </>
  );
}

export default App;
