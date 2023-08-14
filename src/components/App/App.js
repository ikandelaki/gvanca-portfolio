import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import HomeRouter from "../../routes/HomeRouter/HomeRouter";
import ResumeRouter from "../../routes/ResumeRouter/ResumeRouter";
import ContactRouter from "../../routes/ContactRouter/ContactRouter";
import ProjectsRouter from "../../routes/ProjectsRouter/ProjectsRouter";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeRouter />} />
        <Route path="/resume" element={<ResumeRouter />} />
        <Route path="/contact" element={<ContactRouter />} />
        <Route path="/projects" element={<ProjectsRouter />} />
      </Routes>
    </div>
  );
}

export default App;
