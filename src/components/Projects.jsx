import React from 'react';
import { ExternalLink, Github, Rocket, Star } from 'lucide-react';

const projects = [
  {
    title: 'Cosmic-OS (Android AOSP)',
    description:
      'A space-themed Android AOSP custom ROM focused on performance, delightful UX, and battery life. Includes a polished setup wizard, custom theming engine, and OTA system.',
    tags: ['Android', 'AOSP', 'Kotlin', 'Gradle'],
    links: {
      repo: 'https://github.com/octocat',
      demo: '#',
    },
    highlight: true,
  },
  {
    title: 'Star Mapper',
    description:
      'Realtime constellation visualizer that renders star positions and routes with WebGL. Designed for planetarium-grade clarity and performance.',
    tags: ['Three.js', 'WebGL', 'TypeScript'],
    links: {
      repo: 'https://github.com/octocat',
      demo: '#',
    },
  },
  {
    title: 'Nebula Notes',
    description:
      'A markdown-first note app with offline-first sync and elegant, distraction-free UI.',
    tags: ['PWA', 'React', 'IndexedDB'],
    links: {
      repo: 'https://github.com/octocat',
      demo: '#',
    },
  },
  {
    title: 'Orbit Commerce',
    description:
      'Modern storefront with headless CMS, blazing-fast search, and a cosmic aesthetic theme.',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    links: {
      repo: 'https://github.com/octocat',
      demo: '#',
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-black to-black" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-violet-200/80">A selection of recent work across mobile and web.</p>
          </div>
          <a
            href="https://github.com/octocat"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur hover:bg-white/10"
          >
            <Github className="h-4 w-4" />
            Explore GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10 ${
                p.highlight ? 'ring-2 ring-violet-500/40' : ''
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                {p.highlight ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-violet-600/20 px-3 py-1 text-xs text-violet-200">
                    <Rocket className="h-3 w-3" /> Highlight
                  </span>
                ) : (
                  <Star className="h-4 w-4 text-yellow-300/80" />
                )}
              </div>
              <p className="mb-4 text-sm text-violet-100/90">{p.description}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-violet-100/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={p.links.demo}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 px-4 py-2 text-xs font-semibold text-white shadow-md transition hover:opacity-90"
                >
                  Live Demo
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={p.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white hover:bg-white/10"
                >
                  <Github className="h-3.5 w-3.5" />
                  Repo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
