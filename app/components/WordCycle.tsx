'use client'; 

import { useEffect, useState } from 'react';

export default function WordCycle() {
  const words = ["purpose", "harmony", "depth", "heart", "meaning", "spark", "resonance", "mission", "reflection"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block min-w-[120px] text-center">
      <span className="relative">
        <span className="block animate-fadeInOut">
          {words[index]}
        </span>
      </span>
    </span>
  );
}