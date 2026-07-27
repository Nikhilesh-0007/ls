import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const AnimatedCard = ({
  children,
  delay = 0,
  className = "",
  direction = "up",
  tilt = false,
}) => {
  const ref = useRef(null);

  // Tilt motion values
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 200, damping: 20 });
  const y = useSpring(rawY, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(y, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(x, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 48 : direction === 'down' ? -48 : 0,
      x: direction === 'left' ? 48 : direction === 'right' ? -48 : 0,
      scale: 0.94,
      filter: 'blur(6px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants}
      style={tilt ? { rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 } : {}}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
