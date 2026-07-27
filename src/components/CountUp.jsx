import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * CountUp — animates a numeric string (e.g. "500+", "98%", "24-48h") when in view.
 * Extracts leading digits and animates them; preserves suffix.
 */
export const CountUp = ({ value, duration = 1.8 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric prefix and suffix
    const match = value.match(/^(\d+)(.*)/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const target = parseInt(match[1], 10);
    const suffix = match[2] || '';
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(eased * target);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return <span ref={ref}>{display}</span>;
};

export default CountUp;
