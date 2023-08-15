import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import HomeRouter from "../../routes/HomeRouter/HomeRouter";
import ResumeRouter from "../../routes/ResumeRouter/ResumeRouter";
import ContactRouter from "../../routes/ContactRouter/ContactRouter";
import ProjectsRouter from "../../routes/ProjectsRouter/ProjectsRouter";
import ProjectDetailsRouter from "../../routes/ProjectDetailsRouter/ProjectDetailsRouter";
import Footer from '../Footer/Footer';
import { useState, createContext } from "react";

export const RouteContext = createContext(null);

function App() {
  const [route, setRoute] = useState("/");

  return (
    <RouteContext.Provider value={{route, setRoute}}>
      <div className="App">
        <div className="App-Container">
          <Header />
          <Routes>
            <Route path="/" element={<HomeRouter />} />
            <Route path="/resume" element={<ResumeRouter />} />
            <Route path="/contact" element={<ContactRouter />} />
            <Route path="/projects" element={<ProjectsRouter />} />
            <Route path="/projects/:id" element={<ProjectDetailsRouter />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </RouteContext.Provider>
  );
}

export default App;
