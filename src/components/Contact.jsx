import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => setStatus('Message sent! I\'ll get back to you soon.'), 800);
  };

  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Get in Touch</h2>
          <p className="mt-2 text-violet-200/80">Let\'s collaborate on something stellar.</p>
        </div>

        <form onSubmit={submit} className="mx-auto grid max-w-2xl gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div>
            <label className="mb-2 block text-sm text-violet-200">Name</label>
            <input
              required
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none ring-violet-500/50 placeholder:text-violet-300/40 focus:ring"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-violet-200">Email</label>
            <input
              required
              type="email"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none ring-violet-500/50 placeholder:text-violet-300/40 focus:ring"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-violet-200">Message</label>
            <textarea
              required
              rows={4}
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none ring-violet-500/50 placeholder:text-violet-300/40 focus:ring"
              placeholder="Say hello..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
          >
            <Send className="h-4 w-4" /> Send Message
          </button>
          {status && (
            <p className="text-center text-sm text-violet-200/90">
              <Mail className="mr-1 inline h-4 w-4" /> {status}
            </p>
          )}
        </form>

        <p className="mt-10 text-center text-sm text-violet-300/70">
          © {new Date().getFullYear()} Cosmic Portfolio. Built with love and stardust.
        </p>
      </div>
    </section>
  );
};

export default Contact;
