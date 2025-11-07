import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-white font-inter text-slate-900 dark:bg-black dark:text-white">
      <Navbar />
      <main className="w-full pt-20">
        <Hero3D />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
