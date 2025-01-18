import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage, { ScrollProgress } from './HomePage';
import reportWebVitals from './reportWebVitals';
import NoteState from './components/NoteState';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Resume from './components/Resume';
import About from './components/About';
import ProjectsPage from './components/Projects';
import Blog from './components/Blog';
import Blog1 from './components/Blog1';
import Blog2 from './components/Blog2';
import Blog3 from './components/Blog3';
import Blog4 from './components/Blog4';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <NoteState>
    <Router>
       <Navbar/>
       <ScrollProgress/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/blog1" element={<Blog1/>} />
        <Route path="/blog/blog2" element={<Blog2/>} />
        <Route path="/blog/blog3" element={<Blog3/>} />
        <Route path="/blog/blog4" element={<Blog4/>} />
      </Routes>
    </Router>
  </NoteState>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
