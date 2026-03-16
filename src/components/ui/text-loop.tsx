'use client';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence, Transition, Variants } from 'framer-motion';
import { useState, useEffect, Children } from 'react';

type TextLoopProps = {
  children: React.ReactNode[];
  className?: string;
  interval?: number;
  transition?: Transition;
  variants?: Variants;
  onIndexChange?: (index: number) => void;
};

export function TextLoop({
  children,
  className,
  interval = 2,
  transition = { duration: 0.3 },
  variants,
  onIndexChange,
}: TextLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    const intervalMs = interval * 500;

    const timer = setInterval(() => {
      setCurrentIndex((current) => {
        const next = (current + 1) % items.length;
        onIndexChange?.(next);
        return next;
      });
    }, intervalMs);
    return () => clearInterval(timer);
  }, [items.length, interval, onIndexChange]);

  const motionVariants: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <span className={cn('relative inline-block whitespace-nowrap overflow-hidden', className)}>
      {/* Invisible spacer: renders all items stacked to always reserve the width of the longest one */}
      <span aria-hidden='true' className='invisible whitespace-nowrap'>
        {items.reduce((longest, item) => {
          const l = typeof item === 'object' && 'props' in item ? String((item as any).props?.children ?? '') : String(item);
          const c = typeof longest === 'object' && 'props' in longest ? String((longest as any).props?.children ?? '') : String(longest);
          return l.length >= c.length ? item : longest;
        })}
      </span>
      {/* Animated text positioned absolutely over the spacer */}
      <AnimatePresence mode='popLayout' initial={false}>
        <motion.span
          key={currentIndex}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={transition}
          variants={variants || motionVariants}
          style={{ display: 'inline-block', position: 'absolute', top: 0, left: 0, right: 0, textAlign: 'inherit' }}
        >
          {items[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
