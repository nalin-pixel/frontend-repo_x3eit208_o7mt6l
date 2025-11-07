import React from 'react';

const SectionHeader = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="mb-10">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-500/90">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
