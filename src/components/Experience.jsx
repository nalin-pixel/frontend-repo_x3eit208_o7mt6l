import React from 'react';
import { Briefcase, MapPin, ExternalLink } from 'lucide-react';

const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Acme Corp',
    location: 'Remote',
    period: '2022 — Present',
    summary:
      'Leading front-end architecture for customer-facing platforms with a focus on performance, accessibility, and design systems.',
    highlights: [
      'Shipped a component library adopted across 5 product teams',
      'Improved key page performance (LCP) by ~35% through code-splitting and image optimization',
      'Mentored 3 engineers and introduced CI checks for UI quality',
    ],
    links: [{ label: 'Company', href: 'https://example.com' }],
  },
  {
    role: 'Software Engineer',
    company: 'Beta Systems',
    location: 'Mumbai, IN',
    period: '2020 — 2022',
    summary:
      'Built responsive web applications and internal dashboards, collaborating closely with design and product.',
    highlights: [
      'Delivered analytics dashboard used by 50+ stakeholders',
      'Reduced bundle size by 28% and standardized code style',
      'Automated release notes and changelog generation',
    ],
    links: [],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Gamma Labs',
    location: 'Pune, IN',
    period: '2019 — 2020',
    summary:
      'Contributed to front-end features and testing; implemented form systems and data visualizations.',
    highlights: [
      'Built reusable form components with validation',
      'Authored unit tests reaching 80% coverage for a module',
    ],
    links: [],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative w-full bg-white py-20 text-slate-900 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Work Experience</h2>
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
              A concise overview of roles, responsibilities, and impact.
            </p>
          </div>
        </div>

        <ol className="relative space-y-6 border-l border-slate-200 pl-6 dark:border-white/10">
          {experience.map((item, idx) => (
            <li key={idx} className="relative">
              <span className="absolute -left-[11px] top-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-white ring-4 ring-white dark:ring-black">
                <Briefcase className="h-3 w-3" />
              </span>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {item.company} • <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {item.location}</span>
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-white/10 dark:text-slate-200">
                    {item.period}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">{item.summary}</p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700 marker:text-indigo-500 dark:text-slate-200">
                  {item.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                {item.links && item.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {item.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                      >
                        {l.label} <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
