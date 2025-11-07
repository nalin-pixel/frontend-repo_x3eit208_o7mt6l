import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    title: 'Android Custom ROM (AOSP)',
    description:
      'An Android AOSP-based custom ROM focused on reliability, performance, and clean UX. Includes setup wizard refinements, theming, and OTA updates.',
    tags: ['Android', 'AOSP', 'Kotlin', 'Gradle'],
    links: {
      repo: 'https://github.com/octocat',
      demo: '#',
    },
    highlight: true,
  },
  {
    title: 'Mapping Visualization Platform',
    description:
      'Interactive web application that renders geospatial datasets and routes with smooth performance and clear presentation.',
    tags: ['WebGL', 'TypeScript', 'React'],
    links: {
      repo: 'https://github.com/octocat',
      demo: '#',
    },
  },
  {
    title: 'Markdown Notes App',
    description:
      'A markdown-first notes application with offline sync and a minimal, distraction-free editor.',
    tags: ['PWA', 'React', 'IndexedDB'],
    links: {
      repo: 'https://github.com/octocat',
      demo: '#',
    },
  },
  {
    title: 'E‑commerce Frontend',
    description:
      'Modern storefront integrating a headless CMS and secure payments with responsive UI components.',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    links: {
      repo: 'https://github.com/octocat',
      demo: '#',
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-white py-20 text-slate-900 dark:bg-black dark:text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Representative work across mobile and web.</p>
          </div>
          <a
            href="https://github.com/octocat"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
          >
            <Github className="h-4 w-4" />
            View GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5 ${
                p.highlight ? 'ring-2 ring-indigo-500/30' : ''
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                {!p.highlight && <Star className="h-4 w-4 text-amber-400/80" />}
              </div>
              <p className="mb-4 text-sm text-slate-700 dark:text-slate-200">{p.description}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={p.links.demo}
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                >
                  Live Demo
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={p.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-900 hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
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
