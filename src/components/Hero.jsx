import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlays that don't block scene interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.6)' }} />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur">
          <Rocket className="h-4 w-4 text-violet-300" />
          <span className="text-sm text-violet-100">Space-Themed Portfolio</span>
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white drop-shadow md:text-6xl">
          Exploring the Cosmic Frontier of Code
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-violet-100/90 md:text-lg">
          Clean design, immersive 3D, and smooth animations. Dive into featured projects like the Android AOSP based Cosmic-OS and more.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition hover:opacity-90"
          >
            View Projects
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://github.com/octocat"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
