"use client";                 // Next.js app router kullanıyorsan

import { useEffect, useRef, useState } from "react";

/* Yardımcı: “350+” → { base: 350, suffix: "+" } */
function splitNumber(numStr) {
  const match = numStr.match(/^(\d+)(.*)$/);
  return { base: parseInt(match[1], 10), suffix: match[2] || "" };
}

function StatItem({ number, label, duration = 1500 }) {
  const { base, suffix } = splitNumber(number);
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);           // Tek sefer çalışsın

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onIntersect = (entries) => {
      if (entries[0].isIntersecting && !startedRef.current) {
        startedRef.current = true;

        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setValue(Math.floor(progress * base));

          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };
        requestAnimationFrame(tick);
      }
    };

    const io = new IntersectionObserver(onIntersect, { threshold: 0.3 });
    io.observe(node);
    return () => io.disconnect();
  }, [base, duration]);

  return (
    <div ref={ref} className="text-center m-4">
      {/* Sayı sarı – değer + suffix */}
      <div className="text-yellow-400 text-3xl font-bold">
        {value.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    { number: "350+", label: "Clients Worldwide" },
    { number: "20+", label: "Team Members" },
    { number: "100+", label: "Projects Completed" },
    { number: "85M+", label: "Revenue Generated" },
  ];

  return (
    <section className="bg-black text-white py-12 flex flex-wrap justify-around">
      {stats.map((s) => (
        <StatItem key={s.label} {...s} />
      ))}
    </section>
  );
}
