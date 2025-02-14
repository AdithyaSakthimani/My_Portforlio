import React, { useEffect, useState , useRef} from 'react';
import { 
  User, 
  Code, 
  Brain, 
  Target, 
  Award, 
  Github, 
  Linkedin, 
  Mail,
  Clock,
  Briefcase,
  GraduationCap,
  Heart,
  Instagram,
  Infinity
} from 'lucide-react';
import './About.css';
import waving from './images/PngItem_1127587-removebg.png';
import mychar from './images/25149101_6925644.jpg'
const TimelineItem = ({ year, title, description, icon: Icon, style }) => {
  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={itemRef}
      className={`timeline-item ${isVisible ? 'visible' : ''}`} 
      style={style}
    >
      <div className="timeline-marker">
        <Icon size={20}  />
      </div>
      <div className="timeline-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
const SkillCard = ({ title, skills, style }) => (
  <div className="skill-card" style={style}>
    <h3>{title}</h3>
    <div className="skill-tags">
      {skills.map((skill, index) => (
        <span key={index} className="skill-tag">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const InterestCard = ({ title, description, style }) => (
  <div className="interest-card" style={style}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const journeysectionRef = useRef(null) ; 
  const skillssectionRef = useRef(null) ; 
  const intrestsectionRef = useRef(null) ; 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the animate class when the section comes into view
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Check if the ref is available
    if (journeysectionRef.current) {
      observer.observe(journeysectionRef.current);
    }

    return () => {
      if (journeysectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the animate class when the section comes into view
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Check if the ref is available
    if (skillssectionRef.current) {
      observer.observe(skillssectionRef.current);
    }

    return () => {
      if (skillssectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the animate class when the section comes into view
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (intrestsectionRef.current) {
      observer.observe(intrestsectionRef.current);
    }

    return () => {
      if (intrestsectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);
      
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timelineData = [
    {
      year: "2027",
      title: "Bachelors in Electronics and Telecommunication Engineering",
      description: "Specialized in Artificial Intelligence and Machine Learning with research focus on Computer Vision.",
      icon: GraduationCap
    },
    {
      year: "2024",
      title: "Embedded Systems Intern at Dyu Labs",
      description: "Developed enterprise-level applications and mentored junior developers in modern web development practices.",
      icon: Code
    },
    {
      year: "2023",
      title: "Mathematics Subject Matter Expert Intern",
      description: "Solved complex mathematical problems from across different platforms across the internet.",
      icon: Infinity
    },
    {
      year: "2023",
      title: "High School Graduation",
      description: "Graduated 12th with 93% in PCM and 91.8% overall",
      icon: Award
    }
  ];

  const skills = [
    {
      title: "Web Development",
      skills: ["React", "Node.js", "TypeScript", "Express", "Flask"]
    },
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C++", "SQL", "Embedded C", "HTML", "CSS", "Verilog"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "MongoDB", "VS Code", "MATLAB", "Orcad PSpice", "Adobe Premiere Pro"]
    }
  ];

  const stats = [
    { number: "3+", label: "Years of Happy Coding" },
    { number: "10+", label: "Projects Completed" },
    { number: "2+", label: "Internships" },
    { number: "500+", label: "Questions on Leetcode" }
  ];

  const interests = [
    {
      title: "Web Development",
      description: "Passionate about building dynamic and responsive websites that offer seamless user experiences."
    },
    {
      title: "Embedded Systems",
      description: "Enjoy working with microcontrollers and hardware to create innovative embedded solutions."
    },
    {
      title: "DSA (Data Structures & Algorithms)",
      description: "Love solving complex problems using efficient data structures and algorithms to optimize performance."
    },
    {
      title: "Problem Solving & Maths",
      description: "Enjoy tackling mathematical problems and applying logical thinking to devise effective solutions."
    }
  ];
const introText = " I am a passionate student specializing in Electronics and Web Development. My years of coding experience have equipped me to create innovative applications that address real-world challenges using cutting-edge technology.";

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="hero-text">
            <div className='about-txt'>
              <div className='my-hed-area'>
                <p className='about-small-hed'>About  </p>
                <h1 className='about-hed'>Who is Adithya ? 🤔</h1>
              </div>
              <p className="intro">
                {introText}
              </p>
              <div className="my-social-links">
                <a href="https://github.com/AdithyaSakthimani" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github size={30} />
                </a>
                <a href="https://www.linkedin.com/in/adithya-sakthimani-0459a7281/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={30} />
                </a>
                <a href="https://www.instagram.com/adithya_sakthimani/profilecard/?igsh=b3Vhc3pna25oY3hk" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Instagram size={30} />
                </a>
              </div>

            </div>
          </div>
          <img src={mychar} alt="Waving man illustration" className='waving-man' />
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section" ref={journeysectionRef}>
        <h2 className="section-title">
          <Clock className="section-icon" size={40} style={{ color: "white" }}/>
          My Journey So Far 
        </h2>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <TimelineItem 
              key={index} 
              {...item} 
              style={{"--item-index": index}}
            />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" ref={skillssectionRef}>
        <h2 className="section-title">
          <Brain className="section-icon"  size={40}  style={{ color: "white" }}/>
          Skills & Expertise
        </h2>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <SkillCard 
              key={index} 
              {...category} 
              style={{"--item-index": index}}
            />
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section className="interests-section" ref={intrestsectionRef}>
        <h2 className="section-title">
          <Heart className="section-icon" size={40} style={{ color: "white" }} />
          What I Love
        </h2>
        <div className="interests-content">
          {interests.map((interest, index) => (
            <InterestCard
              key={index}
              {...interest}
              style={{"--item-index": index}}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;