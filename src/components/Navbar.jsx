import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand" onClick={() => setIsMenuOpen(false)}>
        <div className="navbar-logo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="white"/>
            <path d="M3 12L12 17L21 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M3 17L12 22L21 17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <h1 className="navbar-title">DevPort</h1>
      </NavLink>

      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-list ${isMenuOpen ? 'active' : ''}`}>
        <li className="navbar-item">
          <NavLink 
            to="/" 
            className="navbar-link" 
            activeClassName="active"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink 
            to="/about" 
            className="navbar-link" 
            activeClassName="active"
            onClick={toggleMenu}
          >
            About
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink 
            to="/projects" 
            className="navbar-link" 
            activeClassName="active"
            onClick={toggleMenu}
          >
            Projects
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink 
            to="/contact" 
            className="navbar-link" 
            activeClassName="active"
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <button 
        className={`close-btn ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Close navigation"
      >
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;