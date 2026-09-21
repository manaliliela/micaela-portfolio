"use client";
import { useEffect, useRef, useState } from "react";
import { motion, MotionConfig } from "motion/react";

export const EASE = [0.22, 1, 0.36, 1];

// Respects the visitor's "reduce motion" setting for every animation below
// (movement is switched off; only soft fades remain).
export function MotionShell({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

// Entrance directions. Kept small and soft on purpose — nothing flies in.
const OFFSETS = {
  up: { y: 28 },
  down: { y: -26 },
  left: { x: -44 },
  right: { x: 44 },
  scale: { y: 18, scale: 0.94 },
  pop: { scale: 0.6, rotate: -8 },
};

// The "settled" state for whichever properties an offset moves.
const settle = (off) =>
  Object.fromEntries(Object.keys(off).map((k) => [k, k === "scale" ? 1 : 0]));

// Scroll replay. `shown` turns true once the element is properly inside the viewport
// (a little in from the edges) and only turns false again after it has left the screen
// completely — so the motion replays on re-entry, never restarts while the element is
// still partly visible, and can't flicker at the edges.
export function useReplayInView(enterMargin = "-6% 0px -12% 0px") {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const enter = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShown(true); }, { rootMargin: enterMargin });
    const leave = new IntersectionObserver(([e]) => { if (!e.isIntersecting) setShown(false); }, { rootMargin: "0px" });
    enter.observe(el);
    leave.observe(el);
    return () => { enter.disconnect(); leave.disconnect(); };
  }, [enterMargin]);
  return [ref, shown];
}

// Resetting happens while the element is off-screen, so it is instant (no visible motion).
const INSTANT = { duration: 0 };

// Soft fade-in as an element scrolls into view.
// from: "up" | "down" | "left" | "right" | "scale"
export function Reveal({ children, delay = 0, y, from = "up", as = "div", className = "", style }) {
  const Tag = motion[as];
  const off = { ...OFFSETS[from] };
  if (y !== undefined) off.y = y;
  const [ref, shown] = useReplayInView();
  return (
    <Tag
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, ...off }}
      animate={
        shown
          ? { opacity: 1, ...settle(off), transition: { duration: 0.95, delay, ease: EASE } }
          : { opacity: 0, ...off, transition: INSTANT }
      }
    >
      {children}
    </Tag>
  );
}

const listVariants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

// Parent that staggers its <StaggerItem> children when scrolled into view.
export function Stagger({ children, className = "", as = "div", stagger }) {
  const Tag = motion[as];
  const v = stagger ? { hidden: {}, show: { transition: { staggerChildren: stagger } } } : listVariants;
  const [ref, shown] = useReplayInView();
  return (
    <Tag ref={ref} className={className} variants={v} initial="hidden" animate={shown ? "show" : "hidden"}>
      {children}
    </Tag>
  );
}

// Each item can enter from its own direction, so a grid doesn't all move the same way.
export function StaggerItem({ children, className = "", as = "div", from = "up", style, ...rest }) {
  const Tag = motion[as];
  const off = OFFSETS[from] || OFFSETS.up;
  const variants = {
    hidden: { opacity: 0, ...off, transition: INSTANT },
    show: { opacity: 1, ...settle(off), transition: { duration: 0.9, ease: EASE } },
  };
  return (
    <Tag className={className} style={style} variants={variants} {...rest}>
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
  const [ref, shown] = useReplayInView("-6% 0px -6% 0px");
  return (
    <span ref={ref} className={`maskLine ${className}`}>
      <motion.span
        className="maskInner"
        initial={{ y: "110%" }}
        animate={shown ? { y: "0%", transition: { duration: 0.9, delay, ease: EASE } } : { y: "110%", transition: INSTANT }}
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

// A decoration that eases in when its section scrolls into view, then drifts
// gently forever. Size and position come from `className` in globals.css;
// `opacity` is the resting opacity (set here, not in CSS, so the fade-in ends there).
export function Deco({
  children,
  className = "",
  from = "pop",
  opacity = 1,
  delay = 0,
  y = 8,
  rotate = 4,
  duration = 7,
  floatDelay = 0,
}) {
  const off = OFFSETS[from] || OFFSETS.pop;
  const [ref, shown] = useReplayInView("-6% 0px -6% 0px");
  return (
    <motion.div
      ref={ref}
      className={`deco ${className}`}
      aria-hidden="true"
      initial={{ opacity: 0, ...off }}
      animate={
        shown
          ? { opacity, ...settle(off), transition: { duration: 1.1, delay, ease: EASE } }
          : { opacity: 0, ...off, transition: INSTANT }
      }
    >
      <motion.div
        style={{ width: "100%", height: "100%" }}
        animate={{ y: [0, -y, 0], rotate: [-rotate, rotate, -rotate] }}
        transition={{ duration, delay: floatDelay, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
