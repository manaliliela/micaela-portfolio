"use client";
import Image from "next/image";
import { motion } from "motion/react";

// Places real screenshots in phone / browser / card frames while keeping
// each image's natural proportions (nothing is cropped or stretched).
// Positions are percentages of the composition area, so everything scales.
// `pop`: all screens rise together when the whole card is hovered (used for Abeona's phones).
export function Composition({ items, ratio = "16 / 10", sizes = "(max-width: 700px) 90vw, 40vw", className = "", pop = false }) {
  return (
    <div className={`comp ${className}`} style={{ aspectRatio: ratio }}>
      {items.map((it, i) => {
        const { left, top, width, rot = 0, z = 1 } = it.pos;
        return (
          <motion.div
            key={it.src}
            className={`mk mk-${it.kind} ${it.hideOnMobile ? "hideOnMobile" : ""}`}
            style={{ left: `${left}%`, top: `${top}%`, width: `${width}%`, zIndex: z, rotate: rot, "--w": String(width) }}
            {...(pop
              ? { variants: { hover: { y: -16, scale: 1.05, rotate: rot * 0.4 } }, whileHover: "hover" }
              : { whileHover: { y: -6, rotate: rot * 0.4 } })}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            {it.kind === "browser" && (
              <div className="mkBar" aria-hidden="true"><i /><i /><i /></div>
            )}
            <div className="mkScreen">
              <Image src={it.src} alt={it.alt} width={it.w} height={it.h} sizes={sizes} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
