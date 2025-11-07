import React, { useEffect, useRef } from 'react';

const logos = [
  'https://upload.wikimedia.org/wikipedia/commons/3/3e/Android_logo_2019.png',
  'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/96/MongoDB_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/93/Stripe_Logo%2C_revised_2016.svg',
];

const Carousel = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let start = 0;
    let id;
    const speed = 0.4; // px per frame

    const step = () => {
      start -= speed;
      if (Math.abs(start) >= track.scrollWidth / 2) start = 0;
      track.style.transform = `translateX(${start}px)`;
      id = requestAnimationFrame(step);
    };

    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative w-full bg-[#0b0616] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 text-center">
          <p className="text-sm text-violet-200/80">Tools I love</p>
          <h3 className="text-2xl font-semibold">Stack & Ecosystem</h3>
        </div>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0b0616] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0b0616] to-transparent" />
          <div className="flex w-[200%] gap-10 will-change-transform" ref={trackRef}>
            {[...logos, ...logos].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt="logo"
                className="h-10 w-auto opacity-80 transition hover:opacity-100"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
