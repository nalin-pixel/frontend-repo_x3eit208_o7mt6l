import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Carousel from './components/Carousel';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Carousel />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
