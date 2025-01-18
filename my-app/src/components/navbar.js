import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X , Moon , Sun } from 'lucide-react';
import './Navbar.css';
import logo from './images/my-logo.png'
import NoteContext from './NoteContext';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const{mode,setMode} = useContext(NoteContext)
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };
  const toogleMode =(mode)=>{
    if(mode === 'light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={handleLinkClick}>
          <div className='main-box'>
            <img src={logo} className='my-logo'/>
          Adithya Sakthimani
          </div>
        </Link>
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
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
    </nav>
  );
};

export default Navbar;
