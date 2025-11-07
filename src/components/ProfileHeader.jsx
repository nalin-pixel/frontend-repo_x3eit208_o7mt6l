import React from 'react';
import { Github, Mail, MapPin } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <section id="profile" className="w-full bg-gradient-to-b from-white to-slate-50 py-16 text-slate-900 dark:from-black dark:to-[#0a0a0e] dark:text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div className="flex items-center gap-6">
            <div className="h-24 w-24 overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-white/10">
              <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop"
                alt="Sagar Shah portrait"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold md:text-3xl">Sagar Shah</h1>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Software Engineer • Frontend & Android</p>
              <p className="mt-1 inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <MapPin className="h-4 w-4" /> Mumbai, India
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:sagar.shah@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href="https://github.com/octocat"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
