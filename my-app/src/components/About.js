import React from 'react';
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
  Heart
  ,infinity,
  Instagram,
  Infinity
} from 'lucide-react';
import './About.css';
import waving from './images/man-waving-his-hand-vector.png'
const TimelineItem = ({ year, title, description, icon: Icon }) => (
  <div className="timeline-item">
    <div className="timeline-marker">
      <Icon size={20} />
      <span className="year">{year}</span>
    </div>
    <div className="timeline-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const SkillCard = ({ title, skills }) => (
  <div className="skill-card">
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

const About = () => {
  const timelineData = [
    {
      year: "2027",
      title: "Bachlors in Electronics and Telecommunication Engineering",
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
      description: "Graduated 12 th with 93% in PCM and 91.8% overall",
      icon: Award
    }
  ];

  const skills = [
    {
      title: "Web Development",
      skills: ["React", "Node.js", "TypeScript",  "Express" , "Flask"]
    },
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C++", "SQL" , "Embedded C " , "HTML" , "CSS" , "Verilog"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git","MongoDB", "VS Code", "MATLAB" ,"Orcad PSpice", "Adobe Premiere Pro "]
    }
  ];

  const stats = [
    { number: "3+", label: "Years of Happy Coding" },
    { number: "10+", label: "Projects Completed" },
    { number: "2+", label: "Internships" },
    { number: "500+", label: "Questions on Leetcode" }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
      <div className="hero-content">
  <div className="hero-text">
    <div className='about-txt'>
    <h1>About Me</h1>
    <p className="intro">
      I'm a passionate Student specializing in Electronics and Web Development. 
      With   years of coding experience, I focus on creating innovative applications that solve 
      real-world problems using cutting-edge technology.
    </p>
    <div className="my-social-links">
      <a href="https://github.com/AdithyaSakthimani" className="social-link">
        <Github size={20} />
      </a>
      <a href="https://www.linkedin.com/in/adithya-sakthimani-0459a7281/" className="social-link">
        <Linkedin size={20} />
      </a>
      <a href="https://www.instagram.com/adithya_sakthimani/profilecard/?igsh=b3Vhc3pna25oY3hk" className="social-link">
        <Instagram size={20} />
      </a>
      </div>
    </div>
  </div>
  <div className="hero-stats">
  <img src = {waving} className='waving-man'/>
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <h3>{stat.number}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
      </div>
    </div>
</div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <h2 className="section-title">
          <Clock className="section-icon" />
          My Journey
        </h2>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2 className="section-title">
          <Brain className="section-icon" />
          Skills & Expertise
        </h2>
        <div className="skills-grid">
          {skills.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section className="interests-section">
  <h2 className="section-title">
    <Heart className="section-icon" />
    What I Love
  </h2>
  <div className="interests-content">
    <div className="interest-card">
      <h3>Web Development</h3>
      <p>Passionate about building dynamic and responsive websites that offer seamless user experiences.</p>
    </div>
    <div className="interest-card">
      <h3>Embedded Systems</h3>
      <p>Enjoy working with microcontrollers and hardware to create innovative embedded solutions.</p>
    </div>
    <div className="interest-card">
      <h3>DSA (Data Structures & Algorithms)</h3>
      <p>Love solving complex problems using efficient data structures and algorithms to optimize performance.</p>
    </div>
    <div className="interest-card">
      <h3>Problem Solving & Maths</h3>
      <p>Enjoy tackling mathematical problems and applying logical thinking to devise effective solutions.</p>
    </div>
  </div>
</section>
    </div>
  );
};

export default About;