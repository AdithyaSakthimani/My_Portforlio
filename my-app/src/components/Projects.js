import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Fitness Tracker App - Elevate AI",
      description: "An intelligent fitness tracking application that leverages AI to provide personalized workout recommendations and track user progress. Features include custom workout plans, real-time exercise tracking, and AI-powered form correction.",
      tags: ["Python", "React", "MongoDB", "OpenCv"
        , "Express" , "Flask"
      ],
      links: {
        github: "https://github.com/AdithyaSakthimani/SmartExerciseTrainerKit",
        live: "#"
      }
    },
    {
      title: "Derma Doc AI",
      description: "An AI-powered dermatological diagnostic tool that helps identify skin conditions through image analysis. The application uses deep learning models to analyze skin images and provide preliminary assessments.",
      tags: ["Python", "React", "MongoDB", "Lepton LLM " , "Hugging Face" , "Express" , "Flask" ],
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
    </div>
  );
};

export default ProjectsPage;
