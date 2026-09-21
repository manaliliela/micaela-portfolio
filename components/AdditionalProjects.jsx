"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ADDITIONAL } from "../lib/work";
import SectionHead from "./SectionHead";
import { Reveal, Deco, EASE } from "./Motion";
import { Flower, Sparkle, Squiggle, Blob, Ring, Heart } from "./Doodles";

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
const mod = (n, m) => ((n % m) + m) % m;

export default function AdditionalProjects() {
  // `pos` runs -1..count. 0..count-1 are the real slides; -1 and `count` are copies of the
  // last and first slide. After sliding onto a copy we jump (without animating) to the real
  // one, which looks identical — so the slider loops with no visible seam.
  const [pos, setPos] = useState(0);
  const [snap, setSnap] = useState(false);
  const [active, setActive] = useState(null);
  const [height, setHeight] = useState(null);
  const slideRefs = useRef([]);
  const touch = useRef(null);
  const count = ADDITIONAL.length;
  const activeReal = mod(pos, count);
  const slides = [ADDITIONAL[count - 1], ...ADDITIONAL, ADDITIONAL[0]];

  const go = useCallback((n) => setPos(Math.max(-1, Math.min(count, n))), [count]);

  useEffect(() => {
    if (pos >= 0 && pos < count) return;
    const t = setTimeout(() => {
      setSnap(true);
      setPos((v) => mod(v, count));
    }, 880);
    return () => clearTimeout(t);
  }, [pos, count]);

  useEffect(() => {
    if (!snap) return;
    let r2;
    const r1 = requestAnimationFrame(() => { r2 = requestAnimationFrame(() => setSnap(false)); });
    return () => { cancelAnimationFrame(r1); if (r2) cancelAnimationFrame(r2); };
  }, [snap]);

  // Keep the window exactly as tall as the slide being shown.
  useEffect(() => {
    const el = slideRefs.current[pos + 1];
    if (!el) return;
    const update = () => setHeight(el.offsetHeight);
    update();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [pos]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); go(pos - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); go(pos + 1); }
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
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.4) go(pos + (dx < 0 ? 1 : -1));
  };

  // Clicking anywhere on the card moves to the next project (buttons keep their own job).
  const onCardClick = (e) => {
    if (e.target.closest("button, a")) return;
    go(pos + 1);
  };

  const current = ADDITIONAL[activeReal];

  return (
    <section className="section sectionLight" id="additional" aria-labelledby="additional-h">
      <SectionHead
        id="additional-h"
        label="ADDITIONAL PROJECTS"
        lines={["More work,", <>more <em className="accentScript">possibilities.</em></>]}
      />

      <Deco className="adBlobA" from="scale" opacity={0.5} y={10} rotate={3} duration={9}><Blob color="#F7D8DF" /></Deco>
      <Deco className="adBlobB" from="scale" opacity={0.5} delay={0.2} y={9} rotate={-3} duration={10}><Blob color="#DCE8D5" /></Deco>
      <Deco className="adFlower" from="pop" delay={0.3} y={8} rotate={6} duration={7.5}><Flower petal="#EFB8C8" center="#FFFDF9" /></Deco>
      <Deco className="adSpark" from="pop" delay={0.5} y={6} rotate={12} duration={5.5}><Sparkle color="#F4A84C" /></Deco>
      <Deco className="adSquiggle" from="right" opacity={0.75} delay={0.2} y={4} rotate={2} duration={6}><Squiggle color="#5D9897" /></Deco>
      <Deco className="adRing" from="pop" opacity={0.85} delay={0.4} y={6} rotate={0} duration={7}><Ring color="#F3CC68" /></Deco>
      <Deco className="adHeart" from="pop" opacity={0.85} delay={0.6} y={6} rotate={5} duration={7}><Heart color="#F7D8DF" /></Deco>

      <Reveal from="scale">
        <div
          className={`carousel tone-${current.tone}`}
          role="group"
          aria-roledescription="carousel"
          aria-label="Additional projects"
          onKeyDown={onKeyDown}
        >
          <div className="carStage">
            <button type="button" className="carArrow carArrowLeft" onClick={() => go(pos - 1)} aria-label="Previous project">
              <Arrow dir="prev" />
            </button>

            <div
              className="carViewport"
              style={height ? { height: `calc(${height}px + var(--car-pad) * 2)` } : undefined}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div className="carTrack" style={{ transform: `translateX(calc(${pos + 1} * (-100% - var(--car-gap))))`, transition: snap ? "none" : undefined }}>
                {slides.map((it, r) => {
                  const lead = it.images[0];
                  const shown = r === pos + 1;
                  const isActive = it.id === current.id;
                  const realIdx = ADDITIONAL.indexOf(it);
                  return (
                    <article
                      key={`${r}-${it.id}`}
                      ref={(el) => { slideRefs.current[r] = el; }}
                      className={`carSlide tone-${it.tone} ${isActive ? "isActive" : ""}`}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${realIdx + 1} of ${count}: ${it.title}`}
                      aria-hidden={!shown}
                      inert={!shown}
                    >
                      <div className="carCard" onClick={onCardClick}>
                        <div className="carTop">
                          <span className="chip">{it.note}{it.images.length > 1 ? ` · ${it.images.length} views` : ""}</span>
                        </div>

                        <div className="carImage">
                          <span
                            className={`sheet ${it.images.length > 1 ? "hasStack" : ""}`}
                            style={{ "--ar": (lead.w / lead.h).toFixed(3) }}
                          >
                            <Image src={lead.src} alt={lead.alt} width={lead.w} height={lead.h} sizes="(max-width: 700px) 92vw, (max-width: 1320px) 88vw, 1150px" />
                          </span>
                        </div>

                        <div className="carFoot">
                          <h3>{it.title}</h3>
                          <button type="button" className="viewLink" onClick={() => setActive(it)} aria-label={`View ${it.title} ${it.note} full size`}>
                            View full size <span aria-hidden="true">↗</span>
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <button type="button" className="carArrow carArrowRight" onClick={() => go(pos + 1)} aria-label="Next project">
              <Arrow dir="next" />
            </button>
          </div>

          <div className="carControls">
            <div className="carDots" role="group" aria-label="Choose a project">
              {ADDITIONAL.map((it, i) => (
                <button
                  key={it.id}
                  type="button"
                  className={`carDot ${i === activeReal ? "isOn" : ""}`}
                  onClick={() => go(i)}
                  aria-label={`Show ${it.title}`}
                  aria-current={i === activeReal ? "true" : undefined}
                />
              ))}
            </div>
          </div>
          <p className="srOnly" aria-live="polite">{`Showing ${activeReal + 1} of ${count}: ${current.title}`}</p>
        </div>
      </Reveal>

      <AnimatePresence>{active && <Viewer item={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}
