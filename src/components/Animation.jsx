import React, { useEffect } from 'react';
import Typed from 'typed.js';

export default function Animation() {
  useEffect(() => {
    // Initialize Typed.js in useEffect hook
    const typed = new Typed('#element', {
      strings: ["Software Developer", "Web Developer", "Software Engineer"],
      typeSpeed: 50,
    });

    // Clean up function to destroy Typed instance
    return () => {
      typed.destroy();
    };
  }, []); // empty dependency array means this effect runs only once after initial render

  return (
    <div id="element"></div>
  );
}

