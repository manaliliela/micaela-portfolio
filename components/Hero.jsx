"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { EASE, MaskLine, Float } from "./Motion";
import { Flower, Sparkle, Leaf, ArrowRight } from "./Doodles";

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
        <Float className="deco decoFlower" y={10} rotate={6} duration={6}><Flower petal="#FFFDF9" center="#F3CC68" /></Float>
        <Float className="deco decoSparkle" y={6} rotate={10} duration={5}><Sparkle color="#F4A84C" /></Float>

        <div className="heroCopy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7, ease: EASE }}>
            OPERATIONS VIRTUAL ASSISTANT
          </motion.p>

          <h1 id="hero-title" className="heroTitle">
            <MaskLine delay={0.6}>Helping you stay</MaskLine>
            <MaskLine delay={0.72}><span className="accentScript">organized</span> while</MaskLine>
            <MaskLine delay={0.84}>work keeps moving.</MaskLine>
          </h1>

          <motion.p className="heroText" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.8, ease: EASE }}>
            I’m Micaela, an Operations Virtual Assistant with around 7 years of experience supporting businesses through
            administration, workflows, project coordination, documentation, and smarter systems that make day-to-day
            operations easier to manage.
          </motion.p>

          <motion.div className="heroButtons" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35, duration: 0.8, ease: EASE }}>
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
