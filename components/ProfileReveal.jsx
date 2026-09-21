"use client";
import { motion, useReducedMotion } from "motion/react";
import { EASE } from "./Motion";

// A loose, hand-drawn portrait outline — not a trace of the real photo, but a
// whimsical chalk-sketch silhouette (head + shoulders) that sits over the
// arch frame. Drawn twice (a soft cream stroke + a rose "pencil" stroke) for
// a chalky, slightly imperfect line, plus a few short hatch marks for texture.
const OUTLINE =
  "M150 34 C108 34 86 66 88 108 C90 148 106 170 118 182 C76 202 48 246 44 306 L44 400 L256 400 L256 306 C252 246 224 202 182 182 C194 170 210 148 212 108 C214 66 192 34 150 34 Z";
const COLLAR = "M104 214 C122 232 178 232 196 214";
const HATCHES = [
  "M58 138 L74 128",
  "M242 150 L226 142",
  "M90 94 L102 82",
  "M214 98 L202 86",
  "M68 262 L82 252",
  "M236 268 L222 258",
];

export function ProfileReveal({ children, duration = 2.2 }) {
  const reduceMotion = useReducedMotion();
  const d = reduceMotion ? 0 : duration;

  return (
    <div className="sketchReveal">
      <svg
        className="sketchSvg"
        viewBox="0 0 300 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        {/* soft cream "chalk highlight" pass, drawn just under the main line */}
        <motion.path
          d={OUTLINE}
          className="sketchLineSoft"
          initial={{ pathLength: reduceMotion ? 1 : 0, opacity: reduceMotion ? 0.12 : 0.55 }}
          animate={{ pathLength: 1, opacity: reduceMotion ? 0.12 : [0.55, 0.6, 0.12] }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  pathLength: { duration: d, ease: EASE },
                  opacity: { duration: d + 1, times: [0, 0.62, 1], ease: EASE },
                }
          }
        />
        {/* main sketch line */}
        <motion.path
          d={OUTLINE}
          className="sketchLineMain"
          initial={{ pathLength: reduceMotion ? 1 : 0, opacity: reduceMotion ? 0.16 : 0.85 }}
          animate={{ pathLength: 1, opacity: reduceMotion ? 0.16 : [0.85, 0.9, 0.16] }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  pathLength: { duration: d, ease: EASE, delay: 0.08 },
                  opacity: { duration: d + 1.1, times: [0, 0.58, 1], ease: EASE, delay: 0.08 },
                }
          }
        />
        {/* a small collar/shoulder-line flourish, drawn a little after the outline */}
        <motion.path
          d={COLLAR}
          className="sketchLineSoft"
          initial={{ pathLength: reduceMotion ? 1 : 0, opacity: reduceMotion ? 0.12 : 0 }}
          animate={{ pathLength: 1, opacity: reduceMotion ? 0.12 : [0, 0.5, 0.12] }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: d * 0.55, delay: d * 0.55, ease: EASE, times: [0, 0.6, 1] }
          }
        />
        {/* a few short chalky hatch marks for texture, near the end of the draw */}
        {HATCHES.map((path, i) => (
          <motion.path
            key={path}
            d={path}
            className="sketchHatch"
            initial={{ pathLength: reduceMotion ? 1 : 0, opacity: reduceMotion ? 0.1 : 0 }}
            animate={{ pathLength: 1, opacity: reduceMotion ? 0.1 : [0, 0.5, 0.1] }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.6, delay: d * 0.6 + i * 0.07, ease: EASE, times: [0, 0.5, 1] }
            }
          />
        ))}
      </svg>

      <motion.div
        className="sketchPhoto"
        initial={{ opacity: reduceMotion ? 1 : 0, filter: reduceMotion ? "blur(0px)" : "blur(9px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: d * 0.85, delay: d * 0.32, ease: EASE }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
