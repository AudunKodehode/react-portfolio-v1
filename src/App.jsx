import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landingpage from './pages/Landing';
import Contactpage from './pages/Contact';
import Projectspage from './pages/Projects';
import NavBar from "./components/Navbar/Navbar";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/projects" element={<Projectspage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
