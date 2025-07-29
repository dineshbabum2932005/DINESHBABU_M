import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from "./components/Skills";
import Education from './components/Education';
import Certifications from './components/Certifications';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Persist theme choice
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Navbar toggleTheme={() => setDarkMode(!darkMode)} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;