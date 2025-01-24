// Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import NoteContext from './NoteContext';
import logo from './images/my-logo.png';
import './Navbar.css';

const Navbar = () => {
  const { isNavOpen, handleNavToggle } = useContext(NoteContext);

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    handleNavToggle(false); // Close the navbar on link click
  };

  const toggleNav = () => {
    handleNavToggle(!isNavOpen); // Toggle the navbar state
  };

  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <Link to="/" className="nav-logo" onClick={handleLinkClick}>
            <div className="main-box">
              <img src={logo} className="my-logo" alt="logo" />
              Adithya Sakthimani
            </div>
          </Link>
          <button className="nav-toggle" onClick={toggleNav}>
            {isNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isNavOpen && (
        <div className="nav-overlay" onClick={toggleNav} />
      )}

      {/* Side Navigation Panel */}
      <div className={`side-nav ${isNavOpen ? 'active' : ''}`}>
        <div className="side-nav-header">
          <X size={24} onClick={toggleNav} className="close-btn" />
        </div>
        <div className="side-nav-links">
          <Link to="/" className="nav-link" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/projects" className="nav-link" onClick={handleLinkClick}>
            Projects
          </Link>
          <Link to="/blog" className="nav-link" onClick={handleLinkClick}>
            Blog
          </Link>
          <Link to="/resume" className="nav-link" onClick={handleLinkClick}>
            Resume
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;