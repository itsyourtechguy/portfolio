import { useState } from "react";
import "./Navbar.css";

function Navbar({ setActiveSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const resumeLink = "https://itsyourtechguy.github.io/resume/";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li onClick={() => handleLinkClick("about")}>About</li>
          <li onClick={() => handleLinkClick("projects")}>Projects</li>
          <li onClick={() => handleLinkClick("contact")}>Contact</li>
          <li>
            <a
              href={resumeLink}
              rel="noopener noreferrer"
              className="resume-link"
            >
              Resume
            </a>
          </li>
        </ul>
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}

export default Navbar;
