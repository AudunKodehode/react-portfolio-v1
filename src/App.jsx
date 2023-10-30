import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landing";
import Contactpage from "./pages/Contact";
import Projectspage from "./pages/Projects";
import NavBar from "./components/Navbar/Navbar";
import { useState } from "react";
import "./App.css";
function App() {
  const [active, setActive] = useState(false);
  return (
    <>
      <Router>
        <NavBar active={active} setActive={setActive} />
        <Routes>
          <Route path="/" element={<Landingpage setActive={setActive} />} />
          <Route
            path="/projects"
            element={<Projectspage setActive={setActive} />}
          />
          <Route
            path="/contact"
            element={<Contactpage setActive={setActive} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
