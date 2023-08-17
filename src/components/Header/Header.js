import LogoSpark from "../../icons/logo-spark.svg";
import BurgerMenu from "../../icons/burger-menu.svg";
import BurgerMenuDark from "../../icons/burger-menu-dark.svg";
import XCloseMenu from "../../icons/x-close-menu.svg";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { RouteContext, ThemeContext } from "../App/App";

function Header(props) {
  const { route, setRoute } = useContext(RouteContext);
  const { darkTheme } = useContext(ThemeContext)
  const [ openMobileMenu, setOpenMobileMenu ] = useState(false);
  const { toggleTheme } = props;

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

  function handleNavLinkClick(route) {
    setRoute(route);
    setOpenMobileMenu(false);
  }

  function renderNavigation() {
    return (
      <div className="Header-Nav-Container">
        <div className={`Header-Nav ${ openMobileMenu ? 'open' : ''}`}>
          <div className="Header-Nav-Links">
            <Link 
              to="/" 
              className={`${route === '/' ? 'active' : ''}`}
              onClick={() => handleNavLinkClick('/')}
            >
              Home
            </Link>
            <Link 
              to="/resume" 
              className={`${route === 'resume' ? 'active' : ''}`}
              onClick={() => handleNavLinkClick('resume')}
            >
              Resume
            </Link>
            <Link 
              to="/contact" 
              className={`${route === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavLinkClick('contact')}
            >
              Contact
            </Link>
            <Link 
              to="/projects" 
              className={`Header-Projects-Link ${route === 'projects' ? 'active' : ''}`}
              onClick={() => handleNavLinkClick('projects')}
            >
              Projects
            </Link>
          </div>
          {renderModeButton()}
        </div>
        <div 
          className="Header-Burger-Menu"
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        >
          <img src={darkTheme ? BurgerMenuDark : BurgerMenu} alt="burger-menu" className={!openMobileMenu ? 'open' : ''} />
          <img src={XCloseMenu} alt="burger-menu" className={openMobileMenu ? 'open' : ''} />
        </div>
      </div>
    );
  }

  function renderModeButton() {
    return (
      <div className="Header-Nav-Mode">
        <div className="Header-Nav-Mode-Btn" onClick={toggleTheme}></div>
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
