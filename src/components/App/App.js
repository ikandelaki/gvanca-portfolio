import Header from "../Header/Header";
import { Routes, Route } from "react-router-dom";
import HomeRouter from "../../routes/HomeRouter/HomeRouter";
import ResumeRouter from "../../routes/ResumeRouter/ResumeRouter";
import ContactRouter from "../../routes/ContactRouter/ContactRouter";
import ProjectsRouter from "../../routes/ProjectsRouter/ProjectsRouter";
import ProjectDetailsRouter from "../../routes/ProjectDetailsRouter/ProjectDetailsRouter";
import Footer from '../Footer/Footer';
import { useState, createContext, useEffect } from "react";

export const RouteContext = createContext(null);
export const ThemeContext = createContext(null);

function App() {
  const [route, setRoute] = useState("/");
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      setDarkTheme(savedTheme === 'true' ? true : false);
    }
  }, []);

  function toggleTheme() {
    setDarkTheme(!darkTheme);
    localStorage.setItem('theme', !darkTheme);
  }

  return (
    <ThemeContext.Provider value={{darkTheme}}>
      <RouteContext.Provider value={{route, setRoute}}>
        <div className={`App ${darkTheme ? 'dark' : ''}`}>
          <div className="App-Container">
            <Header toggleTheme={toggleTheme} />
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
    </ThemeContext.Provider>
  );
}

export default App;
