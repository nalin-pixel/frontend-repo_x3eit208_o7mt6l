import React from 'react';
import { User, Mail, MapPin, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-black to-[#0b0616] py-20 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>
          <p className="mt-2 max-w-2xl text-violet-200/80">
            I craft immersive digital experiences with a focus on performance, accessibility, and stunning visuals. From Android internals to modern web, I love shipping delightful products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-violet-100">
              <User className="h-4 w-4" /> Profile
            </div>
            <p className="text-sm text-violet-100/90">
              Space enthusiast, problem solver, and UI perf nerd. Passionate about creating fluid interfaces with a cosmic vibe.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-violet-100">
              <Briefcase className="h-4 w-4" /> Work
            </div>
            <ul className="space-y-2 text-sm text-violet-100/90">
              <li>• Android ROM/AOSP development (SystemUI, frameworks, OTA)</li>
              <li>• Frontend engineering (React, animations, 3D experiences)</li>
              <li>• Product design systems, accessibility, and dark mode</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-violet-100">
              <MapPin className="h-4 w-4" /> Contact
            </div>
            <div className="space-y-2 text-sm text-violet-100/90">
              <p>Based in: Earth, Milky Way</p>
              <p className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> your.email@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
