import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-black/50 p-3 text-white backdrop-blur">
          <a href="#home" className="inline-flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500">
              <Rocket className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold">Cosmic Portfolio</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#projects" className="hover:text-violet-300">Projects</a>
            <a href="#about" className="hover:text-violet-300">About</a>
            <a href="#contact" className="hover:text-violet-300">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15"
          >
            Say hello
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
