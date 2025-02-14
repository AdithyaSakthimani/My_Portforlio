import React from 'react';
import { Github, ExternalLink, Code, Brain, Target, Zap } from 'lucide-react';
import './Projects.css';
import techImg from './images/medium-shot-man-wearing-vr-glasses.jpg'
import techImg2 from './images/freepik__the-style-is-candid-image-photography-with-natural__39924.jpeg'
import continous from './images/freepik__the-style-is-candid-image-photography-with-natural__39925.jpeg'
const ProjectsPage = () => {
  const projects = [
    {
      title: "Fitness Tracker App - Elevate AI",
      description: "An intelligent fitness tracking application that leverages AI to provide personalized workout recommendations and track user progress. Features include custom workout plans, real-time exercise tracking, and AI-powered form correction.",
      tags: ["Python", "React", "MongoDB", "OpenCv", "Express", "Flask"],
      links: {
        github: "https://github.com/AdithyaSakthimani/SmartExerciseTrainerKit",
        live: "#"
      }
    },
    {
      title: "Derma Doc AI",
      description: "An AI-powered dermatological diagnostic tool that helps identify skin conditions through image analysis. The application uses deep learning models to analyze skin images and provide preliminary assessments.",
      tags: ["Python", "React", "MongoDB", "Lepton LLM", "Hugging Face", "Express", "Flask"],
      links: {
        github: "https://github.com/AdithyaSakthimani/DermaDocAI",
        live: "#"
      }
    },
    {
      title: "Image Steganography App",
      description: "A secure application that implements steganography techniques to hide sensitive information within images. Features include multiple encryption methods and support for various image formats.",
      tags: ["JavaScript/TypeScript", "Vite", "Image Processing"],
      links: {
        github: "https://github.com/AdithyaSakthimani/Image_Stegenography",
        live: "#"
      }
    }
  ];

  const motivationSections = [
    {
      icon: <Brain size={48} />,
      title: "Technological Innovation",
      description: "Driven by a passion to push the boundaries of technology, I create solutions that solve real-world problems through innovative approaches.",
      image: techImg
    },
    {
      icon: <Target size={48} />,
      title: "Problem-Solving Mindset",
      description: "Each project is an opportunity to address complex challenges, combining technical skills with creative thinking to develop impactful solutions.",
      image: techImg2
    },
    {
      icon: <Zap size={48} />,
      title: "Continuous Learning",
      description: "My journey is fueled by an insatiable curiosity to explore emerging technologies, particularly in AI, machine learning, and cutting-edge software development.",
      image: continous
    }
  ];

  return (
    <div className="projects-page">
      {/* Header Section */}
      <div className="header-section">
        <div className="container">
          <h1 className="header-title">My Projects</h1>
          <p className="header-description">
            Exploring the intersection of AI, healthcare, and security through innovative applications
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </div>
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.links.github} className="project-link" target="_blank">
                <ExternalLink size={20} />
                <span>Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Motivation Section */}
      <div className="container motivation-section">
        <h2 className="motivation-title">What Drives Me</h2>
        <div className="motivation-grid">
          {motivationSections.map((section, index) => (
            
            <div key={index} className="motivation-card">
              <div className="motivation-image-container">
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="motivation-image" 
                />
              </div>
              <div className="motivation-icon">
                {section.icon}
              </div>
              <h3 className="motivation-card-title">{section.title}</h3>
              <p className="motivation-description">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;