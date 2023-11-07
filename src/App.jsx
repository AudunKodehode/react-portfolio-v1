import { Routes, Route, useLocation } from "react-router-dom";
import Landingpage from "./pages/Landing";
import Contactpage from "./pages/Contact";
import Projectspage from "./pages/Projects";
import NavBar from "./components/Navbar/Navbar";
import { useState } from "react";
import "./App.css";
function App() {
  const location = useLocation();
  const pathname = location.pathname;

  const [language, setLanguage] = useState("no");
  return (
    <>
      <NavBar
        pathname={pathname}
        language={language}
        setLanguage={setLanguage}
      />
      <Routes>
        <Route path="/" element={<Landingpage language={language} />} />
        <Route
          path="/projects"
          element={<Projectspage language={language} />}
        />
        <Route path="/contact" element={<Contactpage language={language} />} />
      </Routes>
    </>
  );
}

export default App;
