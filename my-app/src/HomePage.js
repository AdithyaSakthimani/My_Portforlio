import React,{useState , useEffect} from 'react';
import { Github, ExternalLink, User, Briefcase, Code, Mail ,Facebook, Instagram, Linkedin  , telescope, Telescope , Twitter} from 'lucide-react';
import './HomePage.css';
import HeroVideo from '../src/components/videos/1110750_Animation_Blurred_3840x2160.mp4';
import { useNavigate } from 'react-router-dom';
import img1 from './components/images/Screenshot 2025-01-17 181917.png'
import img2 from './components/images/Screenshot 2025-01-01 182714.png'
import img3 from './components/images/Screenshot 2025-01-03 003853.png'
import img4 from './components/images/Screenshot 2025-01-17 181700.png'
import img5 from './components/images/Screenshot 2025-01-17 181801.png'
export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return <div className="scroll-progress" style={{transform: `scaleX(${scrollProgress})`}} />;
}
const Portfolio = () => {
  const navigate = useNavigate() ; 
  const [result, setResult] = useState("");
  const[showAlert,setShowAlert] = useState(false) ; 
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

  const projects = [
    {
      title: "Fitness Tracker App - Elevate AI",
      description: "An intelligent fitness tracking application that helps users monitor their workouts, set goals, and track progress using AI-powered insights.",
      technologies: ["React", "TensorFlow", "Node.js", "MongoDB"],
      image: "/api/placeholder/600/400"
    },
    {
      title: "Derma Doc AI",
      description: "A skin disease detection application powered by deep learning that helps identify various skin conditions through image analysis.",
      technologies: ["Python", "TensorFlow", "Flask", "React Native"],
      image: "/api/placeholder/600/400"
    },
    {
      title: "Image Steganography App",
      description: "A secure application for hiding sensitive information within images using advanced steganography techniques.",
      technologies: ["Python", "OpenCV", "Cryptography", "PyQt"],
      image: "/api/placeholder/600/400"
    }
  ];
  useEffect(() => {
    const videoElement = document.querySelector(".hero-video");
    if (videoElement) {
      videoElement.playbackRate = 1.5; 
    }
  }, []);
  return (
    <div>
  {/* Hero Section */}
  <section className="hero">
  <video className="hero-video" src={HeroVideo} autoPlay muted loop />
    <div className="container-hero-content">
      <h1 className="hero-title">Hello, I'm a Full Stack Web Developer</h1>
      <p className="hero-description">
        I build innovative solutions using AI , Embedded Systems and other modern technologies
      </p>
      <div className="button-group">
      <button className="button-secondary" onClick = {
          () => {navigate('/about');}
        }>
          <Telescope size={20} />
          Explore
        </button>
        <button className="button-primary">
          <Github size={20} />
          GitHub
        </button>
      </div>
    </div>
  </section>
        {/* Scrolling Image Carousel */}
<section className="image-carousel">
  <div className="carousel-track">
    <img src={img1} alt="Project 1" className="carousel-image" />
    <img src={img2} alt="Project 2" className="carousel-image" />
    <img src={img3} alt="Project 3" className="carousel-image" />
    <img src={img4} alt="Project 4" className="carousel-image" />
    <img src={img5} alt="Project 5" className="carousel-image" />
    {/* Duplicate the images for seamless scrolling */}
    <img src={img1} alt="Project 1" className="carousel-image" />
    <img src={img2} alt="Project 2" className="carousel-image" />
    <img src={img3} alt="Project 3" className="carousel-image" />
    <img src={img4} alt="Project 4" className="carousel-image" />
    <img src={img5} alt="Project 5" className="carousel-image" />
  </div>
</section>
  {/* Contact Section */}
  <section className="contact-section">
    <div className="contact-header">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">
        Have a question or want to work together? Fill out the form below, and
        I'll get back to you as soon as possible.
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
          <div className={`alert ${result.includes('Successfully') ? 'alert-success' : 'alert-error'}`}>
            {result}
          </div>
        )}
  </section>

  {/* Social Footer */}
  <footer className="social-footer">
    <div className="social-container">
      <h3>Connect With Me</h3>
      <div className="social-links">
        <a href="https://x.com/legendarypheon2" target="_blank" rel="noopener noreferrer">
          <Twitter size={24} />
        </a>
        <a href="https://www.instagram.com/adithya_sakthimani/profilecard/?igsh=b3Vhc3pna25oY3hk" target="_blank" rel="noopener noreferrer">
          <Instagram size={24} />
        </a>
        <a href="https://www.linkedin.com/in/adithya-sakthimani-0459a7281/" target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} />
        </a>
        <a href="https://github.com/AdithyaSakthimani" target="_blank" rel="noopener noreferrer">
          <Github size={24} />
        </a>
      </div>
    </div>
  </footer>
</div>

  );
};

export default Portfolio;