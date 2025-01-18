import React from 'react';
import './Blog.css';
import bimg1 from './images/VFLt5vHV7aCoLrLGjP9Qwm.jpg'
import bimg2 from './images/images.png'
import bimg3 from './images/react.png'
import bimg4 from './images/st,small,507x507-pad,600x600,f8f8f8.jpg'
import bimg5 from './images/Embedded-System-Ecosystem-Copy-870x457.webp'
import { useNavigate } from 'react-router-dom';
const blogs = [
  {
    id: 1,
    title: 'The Future of AI in Web Development',
    description:
      'Explore how artificial intelligence is transforming the landscape of web development, making it smarter and more efficient.',
    date: 'January 10, 2025',
    image: bimg1,
  },
  {
    id: 2,
    title: '5 Tips for Writing Clean JavaScript Code',
    description:
      'Discover essential tips and best practices for writing clean and maintainable JavaScript code.',
    date: 'December 25, 2024',
    image: bimg2,
  },
  {
    id: 3,
    title: 'Understanding React Hooks',
    description:
      'An in-depth guide to understanding and using React hooks effectively in your projects.',
    date: 'November 15, 2024',
    image: bimg3,
  },
  {
    id: 4,
    title: 'Getting Started with Microcontrollers',
    description:
      'Learn the basics of microcontrollers and how they are used to build embedded systems.',
    date: 'December 30, 2024',
    image: bimg5,
  },
];

const Blog = () => {
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };
  const navigate = useNavigate() ; 
  return (
    <div className="blog-container">
      {/* Hero Section */}
      <section className="blog-hero">
        <h1 className="blog-title">Welcome to My Blog</h1>
        <p className="blog-subtitle">
          Insights, tutorials, and tips on web development, AI, and embedded systems.
        </p>
      </section>

      {/* Blog Posts Section */}
      <section className="blog-posts">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-date">{blog.date}</p>
              <p className="blog-description">{blog.description}</p>
              <button className="blog-read-more"
              onClick = {
                ()=>{
                  handleLinkClick();
                  navigate(`/blog/blog${blog.id}`)
                }
              }>Read More</button>
            </div>
          </div>
        ))}
      </section>
      <div className="subscription-section">
          <h2>Subscribe to TechBlog</h2>
          <p>Stay updated with the latest trends and insights in web development and technology. Enter your email below to subscribe:</p>
          <form className="subscription-form">
            <input type="email" placeholder="Enter your email address" className="email-input" required />
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </div>
    </div>
  );
};

export default Blog;
