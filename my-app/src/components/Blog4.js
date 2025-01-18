import React from 'react';
import './BlogPost.css';
import { CodeBlock, dracula } from "react-code-blocks";

const Blog4 = () => {
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
            <div className="date">December 30, 2024</div>
            <h1 className="article-title">Getting Started with Microcontrollers</h1>
          </div>

          <div className="content">
            <p>
              Microcontrollers are small, powerful devices that form the backbone of many embedded systems. 
              From controlling household appliances to enabling IoT devices, they are everywhere. In this blog, 
              we’ll cover the basics of microcontrollers and how you can start building your own embedded projects.
            </p>

            <h2>1. What is a Microcontroller?</h2>
            <p>
              A microcontroller is a compact integrated circuit designed to perform specific tasks in embedded systems. 
              It typically includes a processor, memory, and input/output peripherals on a single chip. Common examples 
              include the Arduino and Raspberry Pi Pico.
            </p>

            <h2>2. Choosing a Microcontroller</h2>
            <p>
              The first step in working with microcontrollers is selecting one that fits your project’s needs. Consider factors like:
            </p>
            <ul>
              <li>Processing power</li>
              <li>Available memory</li>
              <li>Input/output pins</li>
              <li>Supported communication protocols (e.g., I2C, UART, SPI)</li>
              <li>Community support and documentation</li>
            </ul>
            <p>
              Popular microcontrollers for beginners include:
            </p>
            <CodeBlock
              text={`// Common microcontrollers
1. Arduino Uno: Ideal for simple projects
2. ESP32: Great for IoT applications
3. Raspberry Pi Pico: Budget-friendly and versatile`}
              language="plaintext"
              theme={dracula}
            />

            <h2>3. Programming a Microcontroller</h2>
            <p>
              Microcontrollers are programmed using languages like C, C++, or Python. Here’s an example of a simple program 
              to blink an LED using Arduino:
            </p>
            <CodeBlock
              text={`// Arduino Blink Example
void setup() {
  pinMode(13, OUTPUT); // Set pin 13 as an output
}

void loop() {
  digitalWrite(13, HIGH); // Turn LED on
  delay(1000);           // Wait 1 second
  digitalWrite(13, LOW);  // Turn LED off
  delay(1000);           // Wait 1 second
}`}
              language="c"
              theme={dracula}
            />

            <h2>4. Building a Basic Project</h2>
            <p>
              Once you have your microcontroller and programming environment ready, start with a simple project like a temperature monitor. 
              You can use sensors like the DHT11 or LM35 to measure temperature and display it on an LCD.
            </p>
            <CodeBlock
              text={`// Pseudo-code for temperature monitoring
initialize_sensor();
while (true) {
  temp = read_temperature();
  display_on_lcd(temp);
  delay(1000);
}`}
              language="plaintext"
              theme={dracula}
            />

            <h2>5. Expanding Your Skills</h2>
            <p>
              Once you’ve mastered the basics, explore advanced topics like:
            </p>
            <ul>
              <li>Wireless communication (e.g., Wi-Fi, Bluetooth)</li>
              <li>Interfacing with complex sensors</li>
              <li>Building IoT applications</li>
              <li>Real-time operating systems (RTOS)</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Microcontrollers are an excellent starting point for anyone interested in electronics and programming. 
              By learning to program and integrate them into projects, you can bring your ideas to life and explore 
              the vast world of embedded systems. Start experimenting today and unlock the potential of these powerful devices!
            </p>
          </div>

          <div className="tags">
            <span className="tag">Microcontrollers</span>
            <span className="tag">Embedded Systems</span>
            <span className="tag">Electronics</span>
            <span className="tag">Programming</span>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog4;
