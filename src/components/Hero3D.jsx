import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Mail, ExternalLink } from 'lucide-react';

const Hero3D = () => {
  return (
    <section id="profile" className="relative w-full bg-black text-white">
      <div className="relative mx-auto h-[70vh] max-w-7xl px-0 md:h-[80vh]">
        {/* 3D Scene */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Subtle gradient edges that do not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              Sagar Shah
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-200 md:text-base">
              Software Engineer specializing in Frontend and Android. I craft performant, accessible interfaces and robust mobile experiences.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
              >
                View Projects <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="mailto:sagar.shah@example.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15"
              >
                <Mail className="h-4 w-4" /> Contact
              </a>
              <a
                href="https://github.com/octocat"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/15"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
