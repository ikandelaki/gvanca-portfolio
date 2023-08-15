import LogoSpark from "../../icons/logo-spark.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RouteContext } from "../App/App";

function Header() {
  const { route, setRoute } = useContext(RouteContext);

  function renderLogo() {
    return (
      <div className="Header-Logo">
        <Link to="/" onClick={() => setRoute('/')}>
          <span>GV</span>
          <span>ANCA</span>
          <img src={LogoSpark} alt="logo" />
        </Link>
      </div>
    );
  }

  function renderNavigation() {
    return (
      <div className="Header-Nav">
        <div className="Header-Nav-Links">
          <Link 
            to="/resume" 
            className={`${route === 'resume' ? 'active' : ''}`}
            onClick={() => setRoute('resume')}
          >
            Resume
          </Link>
          <Link 
            to="/contact" 
            className={`${route === 'contact' ? 'active' : ''}`}
            onClick={() => setRoute('contact')}
          >
            Contact
          </Link>
          <Link 
            to="/projects" 
            className={`${route === 'projects' ? 'active' : ''}`}
            onClick={() => setRoute('projects')}
          >
            Projects
          </Link>
        </div>
        {renderModeButton()}
      </div>
    );
  }

  function renderModeButton() {
    return (
      <div className="Header-Nav-Mode">
        <div className="Header-Nav-Mode-Btn"></div>
      </div>
    );
  }

  return (
    <header className="Header">
      {renderLogo()}
      {renderNavigation()}
    </header>
  );
}

export default Header;
