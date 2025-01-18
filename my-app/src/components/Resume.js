import React from 'react';
import { Download, Briefcase, GraduationCap, Code, Trophy } from 'lucide-react';
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

const ProjectItem = ({ title, description, achievements, github }) => (
  <div className="project-item">
    <h3>{title}</h3>
    <p>{description}</p>
    <ul>
      {achievements.map((achievement, index) => (
        <li key={index}>{achievement}</li>
      ))}
    </ul>
    {github && (
      <a href={github} className="github-link">
        GitHub Link
      </a>
    )}
  </div>
);

const EducationItem = ({ institution, degree, period, details }) => (
  <div className="education-item">
    <h3>{institution}</h3>
    <div className="degree">{degree}</div>
    <div className="period">{period}</div>
    {details && <div className="details">{details}</div>}
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
              <p><strong>Email: </strong> adithyasmani.et23@rvce.edu.in</p>
              <p><strong>Phone: </strong>  9866100630</p>
              <p><strong>Location: </strong>  Bengaluru</p>
              <p><strong>Personal Website:</strong> abcd.com</p>
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
              "Participated in workshops and presentations focused on IoT solutions",
              "Contributed to building and implementing a water level measurement system to gain hands-on experience"
            ]}
          />
        </ResumeSection>

        <ResumeSection title="Projects" icon={<Code className="section-icon" />}>
          <ProjectItem
            title="Smart Fitness Tracker AI (Elevate Fitness AI)"
            description="Developed a comprehensive fitness tracking system leveraging OpenCV for real-time pose estimation to ensure proper exercise form and track repetitions."
            achievements={[
              "Integrated real-time sensors for heart rate monitoring (MAX30100), calorie tracking, and workout analysis using Embedded C",
              "The system features a user-friendly web interface built with React, Node.js, and Express, along with a MongoDB database for personalized goal tracking and progress visualization"
            ]}
            github="Smart Exercise Trainer Kit"
          />
          <ProjectItem
            title="Skin Disease Detection AI (Derma Doc AI)"
            description="Developed an AI-powered platform trained on a dataset of skin diseases and images to accurately diagnose conditions."
            achievements={[
              "Utilized TensorFlow for image analysis and Lepton LLM for processing text-based user queries, offering an interactive experience like consulting a doctor",
              "The platform also suggests nearby doctors based on the diagnosed condition. Built with a React frontend and Flask, Express, and MongoDB backend for seamless data management and real-time feedback"
            ]}
            github="Derma Doc AI"
          />
          <ProjectItem
            title="Image Steganography"
            description="Developed a secure image steganography platform that embeds hidden messages in images, using Huffman Tree for efficient text encryption."
            achievements={[
              "The system employs Discrete Wavelet Transform (DWT) and Haar Transform for embedding the encrypted data into the image, ensuring both security and high-quality image integrity",
              "The frontend is built using Vite for fast and modern web development, providing an intuitive interface for users to easily encrypt and decode messages"
            ]}
            github="Image Steganography"
          />
        </ResumeSection>

        <ResumeSection title="Education" icon={<GraduationCap className="section-icon" />}>
          <EducationItem
            institution="RV College of Engineering, Bangalore"
            degree="Electronics and Telecommunication"
            period="09/2023 – Present"
            details="Current CGPA (End of Second Semester): 8.83"
          />
          <EducationItem
            institution="St. Ann's Public School, Kochi"
            degree="12th CBSE Boards"
            period="06/2021 – 06/2023"
            details="Scored 92.6% in PCM and 91.8% overall"
          />
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
            <li>Won 2nd Place by representing RVCE at VTU Interzonals and Zonals Chess tournaments</li>
            <li>Selected for VTU Nationals Team and Represented Kerala at Nation Chess tournament in Nashik</li>
          </ul>
        </ResumeSection>
      </div>
    </div>
  );
};

export default Resume;