"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { EASE, MaskLine, Float } from "./Motion";
import { Flower, Sparkle, Leaf, ArrowRight } from "./Doodles";

// Decorative flowers: every one is the same 6-petal shape, in soft palette
// colours. Positions live in globals.css (.hf1 … .hf9); small screens show
// fewer so the layout never feels busy.
const PANEL_FLOWERS = [
  { cls: "hf1", petal: "#FFFDF9", center: "#F3CC68", y: 10, rotate: 6, duration: 7, delay: 0 },
  { cls: "hf2", petal: "#EFB8C8", center: "#FFFDF9", y: 8, rotate: 8, duration: 8, delay: 0.8 },
  { cls: "hf3", petal: "#8DBCBC", center: "#FFFDF9", y: 9, rotate: 6, duration: 7.5, delay: 1.4 },
  { cls: "hf4", petal: "#F3CC68", center: "#F47F5D", y: 8, rotate: 7, duration: 9, delay: 0.4 },
  { cls: "hf5", petal: "#8DBCBC", center: "#F3CC68", y: 10, rotate: 6, duration: 8.5, delay: 2 },
];
const PHOTO_FLOWERS = [
  { cls: "hf6", petal: "#FFFDF9", center: "#F3CC68", y: 8, rotate: 7, duration: 7.5, delay: 0.6 },
  { cls: "hf7", petal: "#F7D8DF", center: "#F47F5D", y: 9, rotate: 6, duration: 8, delay: 1.2 },
  { cls: "hf8", petal: "#8DBCBC", center: "#F3CC68", y: 7, rotate: 8, duration: 6.5, delay: 0.2 },
  { cls: "hf9", petal: "#F3CC68", center: "#FFFDF9", y: 8, rotate: 6, duration: 9, delay: 1.8 },
];

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <motion.div
        className="heroPanel"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: EASE }}
      >
        <Float className="deco decoLeafA" y={8} rotate={2} duration={7}><Leaf color="#8DBCBC" vein="#5D9897" /></Float>
        <Float className="deco decoLeafB" y={8} rotate={2} duration={8} delay={1}><Leaf color="#EFB8C8" vein="#B4626A" /></Float>
        {PANEL_FLOWERS.map((f) => (
          <Float key={f.cls} className={`deco heroFlower ${f.cls}`} y={f.y} rotate={f.rotate} duration={f.duration} delay={f.delay}>
            <Flower petal={f.petal} center={f.center} />
          </Float>
        ))}
        <Float className="deco decoSparkle" y={6} rotate={10} duration={5}><Sparkle color="#F4A84C" /></Float>

        <div className="heroCopy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7, ease: EASE }}>
            OPERATIONS VIRTUAL ASSISTANT
          </motion.p>

          <h1 id="hero-title" className="heroTitle">
            <MaskLine delay={0.6}>Reliable support</MaskLine>
            <MaskLine delay={0.72}>behind the scenes,</MaskLine>
            <MaskLine delay={0.84}>keeping things</MaskLine>
            <MaskLine delay={0.96}><span className="accentScript">organized</span></MaskLine>
            <MaskLine delay={1.08}>and moving.</MaskLine>
          </h1>

          <motion.p className="heroText" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.45, duration: 0.8, ease: EASE }}>
            I’m Micaela, an Operations Virtual Assistant with around 7 years of experience supporting businesses through
            administration, workflows, project coordination, documentation, and smarter systems that make day-to-day
            operations easier to manage.
          </motion.p>

          <motion.div className="heroButtons" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.65, duration: 0.8, ease: EASE }}>
            <a href="#contact" className="btn btnRose">Let’s Work Together <ArrowRight /></a>
            <a href="#work" className="btn btnGhost">View My Work</a>
          </motion.div>
        </div>

        <motion.div
          className="heroVisual"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: EASE }}
        >
          {PHOTO_FLOWERS.map((f) => (
            <Float key={f.cls} className={`deco heroFlower ${f.cls}`} y={f.y} rotate={f.rotate} duration={f.duration} delay={f.delay}>
              <Flower petal={f.petal} center={f.center} />
            </Float>
          ))}
          <div className="archBack" aria-hidden="true" />
          <div className="archPhoto">
            <Image
              src="/profile/micaela-profile.png"
              alt="Portrait of Micaela Manalili"
              width={1086}
              height={1448}
              priority
              sizes="(max-width: 860px) 80vw, 460px"
            />
          </div>

          <Float className="statBlock" y={6} rotate={0} duration={5.5}>
            <strong>7+</strong>
            <span>Years Supporting<br />Businesses</span>
          </Float>

          <Float className="stickyNote" y={5} rotate={1.5} duration={6.5} delay={0.6}>
            <span className="script">Organized ideas.<br />Better systems.<br />Smoother work.</span>
          </Float>
        </motion.div>
      </motion.div>
    </section>
  );
}
