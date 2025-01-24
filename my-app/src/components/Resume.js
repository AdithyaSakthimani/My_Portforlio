import React from 'react';
import { Download, Briefcase, GraduationCap, Code, Trophy, ExternalLink } from 'lucide-react';
import './Resume.css';
import pdfUrl from '../resume/my_resume.pdf'

const ResumeSection = ({ title, icon, children }) => (
  <div className="resume-section">
    <div className="section-header">
      {icon}
      <h2>{title}</h2>
    </div>
    {children}
  </div>
);

const ExperienceItem = ({ role, company, period, achievements }) => (
  <div className="experience-item">
    <div className="item-header">
      <h3>{role}</h3>
      <div className="item-subheader">
        <span className="company">{company}</span>
        <span className="period">{period}</span>
      </div>
    </div>
    <ul>
      {achievements.map((achievement, index) => (
        <li key={index}>{achievement}</li>
      ))}
    </ul>
  </div>
);

const ProjectItem = ({ title, github, achievements }) => (
  <div className="project-item">
    <div className="item-header">
      <h3>{title}</h3>
      {github && (
        <a href={github} target="_blank" rel="noreferrer" className="github-link">
          GitHub <ExternalLink size={16} />
        </a>
      )}
    </div>
    <ul>
      {achievements.map((achievement, index) => (
        <li key={index}>{achievement}</li>
      ))}
    </ul>
  </div>
);

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Adithya_Sakthimani_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-wrapper">
      <div className="resume-container">
        <div className="resume-header">
          <div className="personal-info">
            <h1>Adithya Sakthimani</h1>
            <div className="contact-info">
              <p><strong>Location:</strong> Bengaluru</p>
              <p><strong>Email:</strong> adithyasmani.et23@rvce.edu.in</p>
              <p><strong>Phone:</strong> +91 9866100630</p>
              <p><strong>Website:</strong> <a href="https://adithyasakthimani.vercel.app" target="_blank" rel="noreferrer">Portfolio</a></p>
            </div>
          </div>
          <button onClick={handleDownload} className="download-button">
            <Download size={20} />
            Download Resume
          </button>
        </div>

        <ResumeSection title="Experience" icon={<Briefcase className="section-icon" />}>
          <ExperienceItem
            role="Embedded Systems Engineer Intern"
            company="Dyu Labs, Bangalore"
            period="08/2024 – Present"
            achievements={[
              "Collaborated with cross-functional engineering teams to design IoT water management solutions",
              "Developed and calibrated advanced water level measurement system using precision sensors",
              "Implemented embedded software algorithms to enhance system reliability"
            ]}
          />
        </ResumeSection>

        <ResumeSection title="Projects" icon={<Code className="section-icon" />}>
          <ProjectItem
            title="Smart Fitness Tracker AI (Elevate Fitness AI)"
            github="https://github.com/AdithyaSakthimani/SmartExerciseTrainerKit"
            achievements={[
              "Architected comprehensive fitness tracking system with OpenCV and advanced sensor technologies",
              "Implemented real-time pose estimation achieving 98% accuracy in exercise form detection",
              "Designed microcontroller-based architecture using Arduino with multiple sensor integrations",
              "Created React-based user interface for workout metrics visualization"
            ]}
          />
          
          <ProjectItem
            title="Skin Disease Detection AI (Derma Doc AI)"
            github="https://github.com/AdithyaSakthimani/DermaDocAI"
            achievements={[
              "Developed AI-powered diagnostic platform for skin disease identification",
              "Trained image and text-based model with 90% accuracy in dermatological conditions",
              "Integrated intelligent doctor recommendation system using Lepton LLM",
              "Built full-stack web application with React, Node.js, and MongoDB"
            ]}
          />
          
          <ProjectItem
            title="Data Transmission using Encryption and Steganography"
            github="https://github.com/AdithyaSakthimani/Image_Stegenography"
            achievements={[
              "Engineered advanced data hiding system using cryptographic techniques",
              "Implemented Huffman Tree encryption for robust data security",
              "Utilized Discrete Wavelet Transform for image quality optimization",
              "Developed high-performance frontend using Vite"
            ]}
          />
        </ResumeSection>

        <ResumeSection title="Education" icon={<GraduationCap className="section-icon" />}>
          <div className="education-item">
            <h3>RV College of Engineering, Bangalore</h3>
            <div className="degree">Electronics and Telecommunication</div>
            <div className="period">09/2023 – Present</div>
            <div className="details">Current CGPA: 8.83</div>
          </div>
          
          <div className="education-item">
            <h3>St. Ann's Public School, Kochi</h3>
            <div className="degree">12th CBSE Boards</div>
            <div className="period">06/2021 – 06/2023</div>
            <div className="details">Scored 92.6% in PCM, Overall: 91.8%</div>
          </div>
        </ResumeSection>

        <ResumeSection title="Skills" icon={<Code className="section-icon" />}>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <p>C, C++, JavaScript, Python, Embedded C, HTML, CSS, Verilog</p>
            </div>
            <div className="skill-category">
              <h3>Web Development</h3>
              <p>React, Node.js, Next.js, Flask, Express</p>
            </div>
            <div className="skill-category">
              <h3>Tools and Technologies</h3>
              <p>Git, MongoDB, VS Code, MATLAB, OrCAD PSpice, LTspice</p>
            </div>
          </div>
        </ResumeSection>

        <ResumeSection title="Extracurricular Achievements" icon={<Trophy className="section-icon" />}>
          <ul className="achievements-list">
            <li>Won 2nd Place at VTU Interzonals and Zonals Chess tournaments</li>
            <li>Selected for VTU Nationals Team, representing Kerala at National Chess Tournament</li>
          </ul>
        </ResumeSection>
      </div>
    </div>
  );
};

export default Resume;