import React from 'react';
import './BlogPost.css';
import { CodeBlock, dracula } from "react-code-blocks";

const Blog2 = () => {
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
            <div className="date">December 25, 2024</div>
            <h1 className="article-title">5 Tips for Writing Clean JavaScript Code</h1>
          </div>

          <div className="content">
            <p>
              Writing clean and maintainable JavaScript code is essential for developing robust web applications. 
              Clean code not only makes your application easier to understand but also simplifies debugging 
              and enhances collaboration among team members. Here are five tips to help you write clean JavaScript code.
            </p>

            <h2>1. Use Descriptive Variable and Function Names</h2>
            <p>
              Naming conventions play a significant role in code readability. Always use meaningful and descriptive 
              names for variables, functions, and classes. For example:
            </p>
            <CodeBlock
              text={`// Poor naming
let x = 10;
function fn() { return x * 2; }

// Better naming
let itemCount = 10;
function calculateTotalItems() { return itemCount * 2; }`}
              language="javascript"
              theme={dracula}
            />

            <h2>2. Keep Functions Small and Focused</h2>
            <p>
              A function should ideally perform a single task. If a function becomes too lengthy, break it into smaller 
              functions. This makes your code modular and easier to maintain. For example:
            </p>
            <CodeBlock
              text={`// Too long
function processOrder(order) {
  validateOrder(order);
  calculateTotal(order);
  applyDiscount(order);
  finalizeOrder(order);
}

// Modular
function processOrder(order) {
  validateOrder(order);
  calculateOrder(order);
  finalizeOrder(order);
}

function calculateOrder(order) {
  calculateTotal(order);
  applyDiscount(order);
}`}
              language="javascript"
              theme={dracula}
            />

            <h2>3. Use Strict Mode</h2>
            <p>
              Enabling strict mode helps you write safer JavaScript by catching potential errors early. You can activate 
              strict mode by adding <code>"use strict";</code> at the beginning of your script or function.
            </p>
            <CodeBlock
              text={`"use strict";

function example() {
  undeclaredVariable = 10; // Throws an error
}`}
              language="javascript"
              theme={dracula}
            />

            <h2>4. Avoid Global Variables</h2>
            <p>
              Minimize the use of global variables to prevent potential naming collisions and unintended side effects. 
              Use <code>const</code> and <code>let</code> instead of <code>var</code>, and encapsulate variables within 
              functions or modules.
            </p>
            <CodeBlock
              text={`// Avoid
var globalVar = "I am global";

// Better
(function() {
  let localVar = "I am local";
  console.log(localVar);
})();`}
              language="javascript"
              theme={dracula}
            />

            <h2>5. Write Comments Sparingly</h2>
            <p>
              Comments are useful but should not replace self-explanatory code. Write comments to explain the "why" 
              behind complex logic, not the "what." For example:
            </p>
            <CodeBlock
              text={`// Poor comment
let total = price * quantity; // Multiply price by quantity

// Better comment
// Calculate total cost of items in the cart
let total = price * quantity;`}
              language="javascript"
              theme={dracula}
            />
          </div>

          <div className="tags">
            <span className="tag">JavaScript</span>
            <span className="tag">Clean Code</span>
            <span className="tag">Web Development</span>
            <span className="tag">Best Practices</span>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog2;
