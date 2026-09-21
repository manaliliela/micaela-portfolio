"use client";
import { motion, MotionConfig } from "motion/react";

export const EASE = [0.22, 1, 0.36, 1];

// Respects the visitor's "reduce motion" setting for every animation below.
export function MotionShell({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

// Soft fade-up as an element scrolls into view.
export function Reveal({ children, delay = 0, y = 28, as = "div", className = "", style }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

const listVariants = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

// Parent that staggers its <StaggerItem> children when scrolled into view.
export function Stagger({ children, className = "", as = "div", stagger }) {
  const Tag = motion[as];
  const v = stagger ? { hidden: {}, show: { transition: { staggerChildren: stagger } } } : listVariants;
  return (
    <Tag className={className} variants={v} initial="hidden" whileInView="show" viewport={{ once: true, margin: "0px 0px -8% 0px" }}>
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, className = "", as = "div", style, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag className={className} style={style} variants={itemVariants} {...rest}>
      {children}
    </Tag>
  );
}

// One line of a headline that slides up from behind a mask.
export function MaskLine({ children, delay = 0, className = "" }) {
  return (
    <span className={`maskLine ${className}`}>
      <motion.span
        className="maskInner"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.95, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// Same idea, but triggered by scroll (section headings).
export function MaskLineInView({ children, delay = 0, className = "" }) {
  return (
    <span className={`maskLine ${className}`}>
      <motion.span
        className="maskInner"
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "0px 0px -6% 0px" }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

// Gentle endless drift for decorations.
export function Float({ children, className = "", y = 10, rotate = 4, duration = 6, delay = 0, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{ y: [0, -y, 0], rotate: [-rotate, rotate, -rotate] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      {children}
    </motion.div>
  );
}
