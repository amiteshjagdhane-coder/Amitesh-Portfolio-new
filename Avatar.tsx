import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';

export default function Avatar() {
  const [missing, setMissing] = useState(false);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 120, damping: 15 };
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), spring);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), spring);
  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => { mx.set(e.clientX / window.innerWidth - 0.5); my.set(e.clientY / window.innerHeight - 0.5); };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduce, mx, my]);
  if (missing) return <div className="mx-auto flex aspect-square w-[85%] items-center justify-center rounded-full border border-dashed border-white/30 text-sm uppercase tracking-widest text-white/60">Amitesh Jagdhane</div>;
  return <div className="relative" style={{ perspective: 900 }}><motion.div animate={reduce ? undefined : { y: [0, -9, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}><img src="./amitesh-head.png" alt="Amitesh Jagdhane portrait" className="mx-auto max-h-[min(72vh,calc(100svh_-_18rem))] w-auto object-contain" style={{ filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.6))' }} onError={() => setMissing(true)} /></motion.div></div>;
}
