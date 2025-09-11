"use client";

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  target: number;
  suffix: string;
  duration?: number; // Duration in milliseconds
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, suffix, duration = 2000, className }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when it enters the viewport
    threshold: 0.5, // When 50% of the component is visible
  });

  useEffect(() => {
    if (!inView) {
      setCount(0); // Reset count if not in view and not triggered yet
      return;
    }

    let start: number | null = null;
    const animate = (currentTime: number) => {
      if (!start) start = currentTime;
      const progress = Math.min((currentTime - start) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, target, duration]); // Re-run effect if inView, target, or duration changes

  return (
    <h3 ref={ref} className={className}>
      {count}
      {suffix}
    </h3>
  );
};

export default AnimatedCounter;
