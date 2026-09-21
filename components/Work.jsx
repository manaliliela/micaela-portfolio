"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { PROJECTS } from "../lib/work";
import SectionHead from "./SectionHead";
import { Stagger, StaggerItem, EASE, Float } from "./Motion";
import { Composition } from "./Mockups";
import { Flower, Sparkle, Blob, Squiggle } from "./Doodles";

function Logo({ logo }) {
  if (!logo) return null;
  return (
    <span className={`logoBadge ${logo.dark ? "isDark" : ""}`}>
      <Image src={logo.src} alt={logo.alt} width={logo.w} height={logo.h} sizes="64px" />
    </span>
  );
}

// Entrance direction per card, so the grid reveals from different sides.
const FROM = ["up", "left", "right", "left", "up", "right"];

// The active card sits at full size; the others step back a little.
// Abeona Tourism gets a gentler step so it never looks like it jumps.
const inactiveScale = (p) => (p.slug === "abeona" ? 0.94 : 0.9);

const mod = (n, m) => ((n % m) + m) % m;

// `index` is the project's real position; `clone` marks the extra copies that make the loop seamless.
function Card({ p, index, active, clone, onSelect }) {
  const reduce = useReducedMotion();
  const featured = p.size === "featured";
  const body = (
    <motion.article
      className="workInner"
      variants={{ hover: { y: -14, scale: 1.03 } }}
      whileHover="hover"
      transition={{ type: "spring", stiffness: 230, damping: 24 }}
    >
      <div className="workText">
        <div className="workMeta">
          <Logo logo={p.logo} />
          <span className="chip">{p.category}</span>
        </div>
        <h3>{p.client}</h3>
        <p>{p.role}</p>
      </div>
      <div className="workVisual">
        <Composition
          items={p.items}
          ratio={p.ratio}
          pop={p.slug === "abeona"}
          sizes="(max-width: 700px) 80vw, 440px"
        />
      </div>
      {featured && <Flower petal="#FFFDF9" center="#F3CC68" className="workDeco wd1" />}
      {featured && <Sparkle color="#F4A84C" className="workDeco wd2" />}
    </motion.article>
  );

  const mask = (
    // Reveal mask for the first (feature) card.
    <motion.div
      className="maskReveal"
      initial={{ clipPath: reduce ? "inset(-16% -8% -16% -8% round 36px)" : "inset(0% 0% 100% 0% round 36px)" }}
      whileInView={{ clipPath: "inset(-16% -8% -16% -8% round 36px)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.1, ease: EASE }}
    >
      {body}
    </motion.div>
  );

  return (
    <StaggerItem from={FROM[index % FROM.length]} className={`work work-${p.size} work-${p.slug} tone-${p.tone} ${active ? "isActive" : ""}`}>
      <motion.div
        className="workScale"
        initial={false}
        animate={{ scale: active ? 1 : inactiveScale(p), opacity: active ? 1 : 0.88 }}
        transition={{ duration: 0.85, ease: EASE }}
        onClick={active ? undefined : onSelect}
        onKeyDown={
          active
            ? undefined
            : (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect();
                }
              }
        }
        role={active || clone ? undefined : "button"}
        tabIndex={active || clone ? undefined : 0}
        aria-label={active || clone ? undefined : `Show ${p.client}`}
        aria-hidden={clone ? true : undefined}
      >
        {featured && !clone ? mask : body}
      </motion.div>
    </StaggerItem>
  );
}

export default function Work() {
  // `pos` is a position on an endless line of cards: 0..count-1 are the real projects,
  // -1 and `count` are copies of the last and first. After a move onto a copy we
  // silently jump back to the matching real card, so the loop never shows a seam.
  const [pos, setPos] = useState(0);
  const [snap, setSnap] = useState(false);
  const touch = useRef(null);
  const count = PROJECTS.length;
  const activeReal = mod(pos, count);
  const go = useCallback((n) => setPos(Math.max(-count + 1, Math.min(2 * count - 2, n))), [count]);

  useEffect(() => {
    if (pos >= 0 && pos < count) return;
    const t = setTimeout(() => {
      setSnap(true);
      setPos((v) => mod(v, count));
    }, 930);
    return () => clearTimeout(t);
  }, [pos, count]);

  useEffect(() => {
    if (!snap) return;
    let r2;
    const r1 = requestAnimationFrame(() => { r2 = requestAnimationFrame(() => setSnap(false)); });
    return () => { cancelAnimationFrame(r1); if (r2) cancelAnimationFrame(r2); };
  }, [snap]);

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

  return (
    <section className="section workSection" id="work" aria-labelledby="work-h">
      <Float className="deco wSecBlobA" y={10} rotate={3} duration={9}>
        <Blob color="#F7D8DF" />
      </Float>
      <Float className="deco wSecFlowerA" y={8} rotate={6} duration={7.5} delay={0.4}>
        <Flower petal="#8DBCBC" center="#FFFDF9" />
      </Float>
      <Float className="deco wSecSparkleA" y={6} rotate={12} duration={5.5} delay={0.8}>
        <Sparkle color="#F4A84C" />
      </Float>
      <Float className="deco wSecSquiggleA" y={4} rotate={2} duration={6} delay={0.2}>
        <Squiggle color="#5D9897" />
      </Float>
      <Float className="deco wSecBlobB" y={9} rotate={-3} duration={8.5} delay={1.2}>
        <Blob color="#DCE8D5" />
      </Float>

      <SectionHead
        id="work-h"
        label="WORK"
        lines={["A closer look at", <>what I’ve <em className="accentScript">worked on.</em></>]}
      />
      {/* All cards sit side by side in one row; the row slides so the active card is centred. */}
      <div className="workViewport" onKeyDown={onKeyDown} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div
          className="workTrack"
          style={{
            transform: `translateX(calc(${pos + count} * (-1 * (var(--cw) + var(--wg))) - var(--cw) / 2))`,
            transition: snap ? "none" : undefined,
          }}
        >
          <Stagger className="workRow" stagger={0.06}>
            {[-1, 0, 1].flatMap((set) =>
              PROJECTS.map((p, i) => (
                <Card
                  key={`${set}-${p.slug}`}
                  p={p}
                  index={i}
                  clone={set !== 0}
                  active={i === activeReal}
                  onSelect={() => go(set * count + i)}
                />
              ))
            )}
          </Stagger>
        </div>
      </div>
      <p className="srOnly" aria-live="polite">{`Showing project ${activeReal + 1} of ${count}: ${PROJECTS[activeReal].client}`}</p>
    </section>
  );
}
