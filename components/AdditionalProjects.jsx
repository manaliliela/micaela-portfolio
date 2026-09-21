"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ADDITIONAL } from "../lib/work";
import SectionHead from "./SectionHead";
import { Reveal, EASE } from "./Motion";

function Viewer({ item, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="viewer"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — ${item.note}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="viewerBody"
        initial={{ y: 24, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 12, opacity: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="viewerHead">
          <div>
            <strong>{item.title}</strong>
            <span>{item.note}</span>
          </div>
          <button ref={closeRef} type="button" className="viewerClose" onClick={onClose} aria-label="Close preview">✕</button>
        </div>
        <div className="viewerScroll">
          {item.images.map((im) => (
            <div key={im.src} className="viewerImg">
              <Image src={im.src} alt={im.alt} width={im.w} height={im.h} sizes="(max-width: 900px) 900px, 1400px" />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Arrow({ dir }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false" style={dir === "prev" ? { transform: "scaleX(-1)" } : undefined}>
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

// One project per view. Slides move sideways on a track (CSS transform), the
// window animates to each slide's own height, and every image keeps its
// natural proportions — nothing is cropped or stretched.
export default function AdditionalProjects() {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(null);
  const [height, setHeight] = useState(null);
  const slideRefs = useRef([]);
  const touch = useRef(null);
  const count = ADDITIONAL.length;

  const go = useCallback((n) => setIndex(Math.max(0, Math.min(count - 1, n))), [count]);

  // Keep the window exactly as tall as the slide being shown.
  useEffect(() => {
    const el = slideRefs.current[index];
    if (!el) return;
    const update = () => setHeight(el.offsetHeight);
    update();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [index]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); go(index - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); go(index + 1); }
  };

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.4) go(index + (dx < 0 ? 1 : -1));
  };

  const current = ADDITIONAL[index];

  return (
    <section className="section sectionLight" id="additional" aria-labelledby="additional-h">
      <SectionHead
        id="additional-h"
        label="ADDITIONAL PROJECTS"
        lines={["More work,", <>more <em className="accentScript">possibilities.</em></>]}
        text="Presentations and company profiles I’ve put together. Browse with the arrows, or tap a sample to view it full size."
      />

      <Reveal>
        <div
          className={`carousel tone-${current.tone}`}
          role="group"
          aria-roledescription="carousel"
          aria-label="Additional projects"
          onKeyDown={onKeyDown}
        >
          <div
            className="carViewport"
            style={height ? { height: `calc(${height}px + var(--car-pad) * 2)` } : undefined}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="carTrack" style={{ transform: `translateX(calc(${index} * (-100% - var(--car-gap))))` }}>
              {ADDITIONAL.map((it, i) => {
                const lead = it.images[0];
                const isActive = i === index;
                return (
                  <article
                    key={it.id}
                    ref={(el) => { slideRefs.current[i] = el; }}
                    className={`carSlide tone-${it.tone} ${isActive ? "isActive" : ""}`}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${count}: ${it.title}`}
                    aria-hidden={!isActive}
                    inert={!isActive}
                  >
                    <div className="carCard">
                      <div className="carTop">
                        <span className="carNum" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                        <span className="chip">{it.note}{it.images.length > 1 ? ` · ${it.images.length} views` : ""}</span>
                      </div>

                      <button
                        type="button"
                        className="carImage"
                        onClick={() => setActive(it)}
                        aria-label={`View ${it.title} ${it.note} full size`}
                      >
                        <span
                          className={`sheet ${it.images.length > 1 ? "hasStack" : ""}`}
                          style={{ "--ar": (lead.w / lead.h).toFixed(3) }}
                        >
                          <Image src={lead.src} alt={lead.alt} width={lead.w} height={lead.h} sizes="(max-width: 700px) 92vw, (max-width: 1320px) 88vw, 1150px" />
                        </span>
                      </button>

                      <div className="carFoot">
                        <h3>{it.title}</h3>
                        <button type="button" className="viewLink" onClick={() => setActive(it)}>
                          View full size <span aria-hidden="true">↗</span>
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="carControls">
            <button type="button" className="carArrow" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous project">
              <Arrow dir="prev" />
            </button>

            <div className="carDots" role="group" aria-label="Choose a project">
              {ADDITIONAL.map((it, i) => (
                <button
                  key={it.id}
                  type="button"
                  className={`carDot ${i === index ? "isOn" : ""}`}
                  onClick={() => go(i)}
                  aria-label={`Show ${it.title}`}
                  aria-current={i === index ? "true" : undefined}
                />
              ))}
            </div>

            <button type="button" className="carArrow" onClick={() => go(index + 1)} disabled={index === count - 1} aria-label="Next project">
              <Arrow dir="next" />
            </button>
          </div>
          <p className="srOnly" aria-live="polite">{`Showing ${index + 1} of ${count}: ${current.title}`}</p>
        </div>
      </Reveal>

      <AnimatePresence>{active && <Viewer item={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}
