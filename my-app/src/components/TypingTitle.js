import { useState, useEffect } from 'react';
const TypingTitle = () => {
    const [text, setText] = useState('');
    const fullText = "Hello, I'm a Full Stack Web Developer";
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      if (index < fullText.length) {
        const timeout = setTimeout(() => {
          setText(prev => prev + fullText[index]);
          setIndex(index + 1);
        }, 110); 
        
        return () => clearTimeout(timeout);
      }
    }, [index]);
  
    return (
      <h1 className="hero-title">
        {text}
        <span className="cursor">|</span>
      </h1>
    );
  };
  
  export default TypingTitle;