import LogoSpark from "../../icons/logo-spark.svg";
import { Link } from "react-router-dom";

function Header() {
  function renderLogo() {
    return (
      <div className="Header-Logo">
        <Link to="/">
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
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/Projects">Projects</Link>
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
