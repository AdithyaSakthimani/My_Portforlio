import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun , AlignLeft} from 'lucide-react';
import NoteContext from './NoteContext';
import logo from './images/my-logo.png';
import './Navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { mode, setMode } = useContext(NoteContext);

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsOpen(false);
  };

  const toggleMode = (mode) => {
    setMode(mode === 'light' ? 'dark' : 'light');
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
          <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "" : <AlignLeft size={24} />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div className="nav-overlay" onClick={() => setIsOpen(false)} />
      )}

      {/* Side Navigation Panel */}
      <div className={`side-nav ${isOpen ? 'active' : ''}`}>
        <div className="side-nav-header">
            <X size={24} onClick={() => setIsOpen(false)}  className='close-btn'/>
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