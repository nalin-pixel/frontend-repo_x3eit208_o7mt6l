import React from 'react';
import { Trophy, Star, ExternalLink } from 'lucide-react';

const achievements = [
  {
    title: 'Best Performer Award',
    description: 'Recognized for outstanding delivery and mentorship across projects.',
    image: 'https://images.unsplash.com/photo-1556139943-4bdca53adf1e?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Open Source Contributor',
    description: 'Contributed to popular libraries and maintained CI workflows.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Speaker: Frontend Conf',
    description: 'Spoke about performance budgets and measuring UX beyond TTFB.',
    image: 'https://images.unsplash.com/photo-1518600506278-4e8ef466b810?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative w-full bg-slate-50 py-20 text-slate-900 dark:bg-[#08080a] dark:text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Achievements</h2>
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">Selected recognitions and milestones.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {achievements.map((a) => (
            <article key={a.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img src={a.image} alt={a.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-700 dark:text-amber-300">
                  <Trophy className="h-3.5 w-3.5" /> Recognition
                </div>
                <h3 className="text-lg font-semibold">{a.title}</h3>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{a.description}</p>
                <a href={a.link} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400">
                  Learn more <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
