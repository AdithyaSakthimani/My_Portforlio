import React, { useState } from 'react';
import './Footer.css';
import {
  Search, MapPin, Phone, Mail,
  Instagram, Facebook, Linkedin, X
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  const [isSubscribed, setIsSubscribed] = useState(false); // State to track subscription status
  const [email, setEmail] = useState(''); // State to store the email input

  const handleSubscribe = (e) => {
    e.preventDefault(); // Prevent form submission
    if (email) { // Check if email is not empty
      setIsSubscribed(true); // Set subscription status to true
      setEmail(''); // Clear the email input
    }
  };

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About The Website</h4>
            <p>I have made this website to learn and practice my skills in web development.</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/adithya_sakthimani/profilecard/?igsh=b3Vhc3pna25oY3hk" className="social-icon" target='_blank' ><Instagram size={20} /></a>
              <a href="https://x.com/legendarypheon2" target="_blank" rel="noopener noreferrer" className="social-icon"><X size={20} /></a>
              <a href="https://www.linkedin.com/in/adithya-sakthimani-0459a7281/" className="social-icon"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/about" onClick={scrollToTop}>About Me</Link></li>
              <li><Link to="/Projects" onClick={scrollToTop}>Projects</Link></li>
              <li><Link to="/blog" onClick={scrollToTop}>Blog</Link></li>
              <li><Link to="/resume" onClick={scrollToTop}>Resume</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="footer-links">
              <li>
                <a href="https://www.google.com/maps?s=web&cs=1&rlz=1C1ONGR_en-GBIN1069IN1070&sca_esv=053903a76464d342&lqi=Ch5SViBDb2xsZWdlIG9mIEVuZ2luZWVyaW5nIG1hcHNIjJWFAloqEAQYABgBGAIYAyIecnYgY29sbGVnZSBvZiBlbmdpbmVlcmluZyBtYXBzkgEHY29sbGVnZaoBWgoIL20vMDRfdGIQASoIIgRtYXBzKAAyHhABIhrfnDj39T7fOaar8WcEa67CTKhaoz8Y06k1MzIiEAIiHnJ2IGNvbGxlZ2Ugb2YgZW5naW5lZXJpbmcgbWFwcw&vet=12ahUKEwi-2dm5s6WLAxX_umMGHcWuNg8Q1YkKegQIHhAB..i&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KSk3ulnhPq47MW7yDFE9RqN1&daddr=Mysore+Rd,+RV+Vidyaniketan,+Post,+Bengaluru,+Karnataka+560059" target="_blank" rel="noopener noreferrer">
                  <MapPin size={16} />R.V College of Enginnering, Bengaluru
                </a>
              </li>
              <li>
                <a href="tel:+919866100630" target="_blank" rel="noopener noreferrer">
                  <Phone size={16} /> +919866100630
                </a>
              </li>
              <li>
                <a href="mailto:adithyasakthimani@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail size={16} /> adithyasakthimani@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to my blogs and get notified when I post something new!</p>
            {isSubscribed ? (
              <p className="subscribed-message">Thank you for subscribing!</p> // Display subscribed message
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                  required
                />
                <button type="submit" className="newsletter-button">Subscribe</button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Adithya Sakthimani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
