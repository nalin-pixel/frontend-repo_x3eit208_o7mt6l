import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => setStatus("Message sent! I'll get back to you soon."), 800);
  };

  return (
    <section id="contact" className="relative w-full bg-white py-20 text-slate-900 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Get in Touch</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">I’m available for opportunities and collaborations.</p>
        </div>

        <form onSubmit={submit} className="mx-auto grid max-w-2xl gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <div>
            <label className="mb-2 block text-sm text-slate-700 dark:text-slate-200">Name</label>
            <input
              required
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-indigo-500/50 placeholder:text-slate-400 focus:ring dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-slate-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-700 dark:text-slate-200">Email</label>
            <input
              required
              type="email"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-indigo-500/50 placeholder:text-slate-400 focus:ring dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-slate-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-700 dark:text-slate-200">Message</label>
            <textarea
              required
              rows={4}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-indigo-500/50 placeholder:text-slate-400 focus:ring dark:border-white/10 dark:bg-white/10 dark:text-white dark:placeholder:text-slate-400"
              placeholder="Write your message..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            <Send className="h-4 w-4" /> Send Message
          </button>
          {status && (
            <p className="text-center text-sm text-slate-700 dark:text-slate-200">
              <Mail className="mr-1 inline h-4 w-4" /> {status}
            </p>
          )}
        </form>

        <p className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Sagar Shah. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
