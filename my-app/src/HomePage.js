import React, { useState, useEffect, useContext, useRef } from 'react';
import { 
  Github, ExternalLink, User, Briefcase, Code, Mail, Facebook, 
  Instagram, Linkedin, Telescope, Twitter, Phone, ChevronDown 
} from 'lucide-react';
import './HomePage.css';
import HeroVideo from '../src/components/videos/lofi-cozy-house-rainy-night-moewalls-com.mp4';
import { useNavigate } from 'react-router-dom';
import img1 from './components/images/Screenshot 2025-01-17 181917.png';
import img2 from './components/images/Screenshot 2025-01-01 182714.png';
import img3 from './components/images/Screenshot 2025-01-03 003853.png';
import img4 from './components/images/Screenshot 2025-01-17 181700.png';
import img5 from './components/images/Screenshot 2025-01-17 181801.png';
import NoteContext from './components/NoteContext';
import TypingTitle from './components/TypingTitle';
import ImageCarousel from './components/ImageCarousel';
import { SpeedInsights } from '@vercel/speed-insights/react';
import chip from './components/images/smart-microchip-background-motherboard-closeup-technology.jpg';
import chessImage from './components/images/chessimg.jpg';
import codeImage from './components/images/person-playing-3d-video-games-device.jpg';
import Footer from './components/Footer';

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavToggle = useContext(NoteContext);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}%`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{
        transform: `scaleX(${scrollProgress})`,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        pointerEvents: 'none',
      }}
    />
  );
};

const Portfolio = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const { mode } = useContext(NoteContext);
  const contactSectionRef = useRef(null);

  // Handle contact form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setShowAlert(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "4031c5fa-649a-4285-9b8b-9859937c04d5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Failed to submit the form.");
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
      console.error("Submission error:", error);
    }

    setTimeout(() => setShowAlert(false), 5000);
  };

  useEffect(() => {
    // Adjust video playback rate
    const videoElement = document.querySelector(".hero-video");
    if (videoElement) {
      videoElement.playbackRate = 0.75;
    }

    // Observer for the contact section animation
    const contactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            contactObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    if (contactSectionRef.current) {
      contactObserver.observe(contactSectionRef.current);
    }

    // Observer for the hobbies & interests subsections and header
    const animatedElements = document.querySelectorAll(
      ".my-area .my-hobby-header, .my-area .image-txtckt-section, .my-area .image-txtprog-section, .my-area .image-txtchess-section"
    );
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    animatedElements.forEach((el) => sectionObserver.observe(el));

    return () => {
      contactObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="homepage-body">
      <section className="hero">
        <video
          className="hero-video"
          src={HeroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="container-hero-content">
          <TypingTitle />
          <p className="hero-description">
            I build innovative solutions using AI, Embedded Systems, and other modern technologies.
          </p>
          <div className="button-group">
            <button
              className="button-secondary"
              onClick={() => {
                navigate("/about");
              }}
            >
              <Telescope size={20} />
              Explore
            </button>
            <button
              className="button-primary"
              onClick={() => {
                window.open("https://github.com/AdithyaSakthimani", "_blank");
              }}
            >
              <Github size={20} />
              GitHub
            </button>
          </div>
          <ChevronDown className='down-arrow' size={50}/>
        </div>
      </section>
      
      {/* Scrolling Image Carousel */}
      <section className="image-carousel">
        <div className="carousel-track">
          <ImageCarousel images={[img1, img2, img3, img4, img5]} />
        </div>
      </section>

      {/* Hobbies & Interests Section */}
      <section className="my-area">
        <h2 className="my-hobby-header">My Hobbies & Interests</h2>

        {/* Electronics Section */}
        <div className="image-txtckt-section">
          <img src={chip} className="chip-img" alt="Electronic Circuit" />
          <div className="content">
            <h1>Electronics: Fueling My Creative Innovations</h1>
            <p>
              My passion for electronics drives me to explore the fascinating world of circuits and hardware. I love diving into both analog and digital realms—experimenting with sensors, audio systems, and microcontrollers—to uncover how technology bridges the gap between the physical and digital worlds.
            </p>
          </div>
        </div>

        {/* Programming Section */}
        <div className="image-txtprog-section">
          <div className="content">
            <h1>Programming: My Digital Playground</h1>
            <p>
              Programming is a hobby that lets me transform ideas into reality. I enjoy crafting digital solutions, building interactive applications, and solving complex problems through code. Every line of code is an opportunity for creativity and innovation.
            </p>
          </div>
          <img src={codeImage} className="programming-img" alt="Programming" />
        </div>

        {/* Chess Section */}
        <div className="image-txtchess-section">
          <img src={chessImage} className="chess-img" alt="Chess Strategy" />
          <div className="content">
            <h1>Chess: A Game of Strategy and Wit</h1>
            <p>
              Chess has always been a captivating challenge for me. Its blend of strategy, tactics, and foresight mirrors how I approach problem-solving. Every move is a lesson in planning and adaptability, sharpening my mind along the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" ref={contactSectionRef}>
        <div className="contact-header">
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-description">
            Have a question or want to work together? Fill out the form below, and I'll get back to you as soon as possible.
          </p>
        </div>
        <form onSubmit={onSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            className="contact-input"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            className="contact-input"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            className="contact-textarea"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
        {showAlert && (
          <div className={`alert ${result.includes("Successfully") ? "alert-success" : "alert-error"}`}>
            {result}
          </div>
        )}
      </section>

      {/* Social Footer */}
      <SpeedInsights />
    </div>
  );
};

export default Portfolio;
