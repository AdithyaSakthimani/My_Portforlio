import React from 'react';
import './BlogPost.css';
import { CodeBlock, dracula } from "react-code-blocks";

const Blog3 = () => {
  return (
    <div className="blog-wrapper">
      <header>
        <div className="header-content">
          <h1 className="site-title">TechBlog</h1>
          <p className="site-description">Exploring the latest insights in web development and technology</p>
        </div>
      </header>

      <div className="container">
        <article className="article">
          <div className="article-header">
            <div className="date">November 15, 2024</div>
            <h1 className="article-title">Understanding React Hooks</h1>
          </div>

          <div className="content">
            <p>
              React hooks were introduced in React 16.8 and have transformed the way developers write React components. 
              They allow you to use state and other React features without writing a class. In this article, we’ll delve 
              into the most commonly used hooks and how to use them effectively in your projects.
            </p>

            <h2>1. What Are Hooks?</h2>
            <p>
              Hooks are functions that let you "hook into" React state and lifecycle features from function components. 
              They eliminate the need for class components while making your code more concise and readable.
            </p>

            <h2>2. useState: Managing State</h2>
            <p>
              The <code>useState</code> hook lets you add state to your functional components. Here’s a simple example:
            </p>
            <CodeBlock
              text={`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}
              language="javascript"
              theme={dracula}
            />

            <h2>3. useEffect: Handling Side Effects</h2>
            <p>
              The <code>useEffect</code> hook allows you to perform side effects in function components, such as data fetching 
              or DOM manipulation. It replaces lifecycle methods like <code>componentDidMount</code> and <code>componentDidUpdate</code>.
            </p>
            <CodeBlock
              text={`import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Seconds elapsed: {seconds}</p>;
}`}
              language="javascript"
              theme={dracula}
            />

            <h2>4. useContext: Simplifying Context</h2>
            <p>
              The <code>useContext</code> hook makes it easier to consume context values without using the <code>Consumer</code> component. 
              Here’s how you can use it:
            </p>
            <CodeBlock
              text={`import React, { useContext, createContext } from 'react';

const ThemeContext = createContext('light');

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}`}
              language="javascript"
              theme={dracula}
            />

            <h2>5. Custom Hooks: Building Reusable Logic</h2>
            <p>
              Custom hooks let you extract and reuse logic across components. They are just JavaScript functions that use other hooks.
              For example, a custom hook for fetching data could look like this:
            </p>
            <CodeBlock
              text={`import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}`}
              language="javascript"
              theme={dracula}
            />

            <h2>Conclusion</h2>
            <p>
              React hooks have revolutionized the way we write components by making them more functional and concise. 
              By understanding and using hooks effectively, you can write cleaner, more reusable code and take full advantage 
              of React’s powerful features. Start exploring hooks today and elevate your React development skills!
            </p>
          </div>

          <div className="tags">
            <span className="tag">React</span>
            <span className="tag">Hooks</span>
            <span className="tag">Web Development</span>
            <span className="tag">JavaScript</span>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog3;
