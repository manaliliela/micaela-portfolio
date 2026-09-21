"use client";
import { motion } from "motion/react";
import { PROCESS } from "../lib/content";
import SectionHead from "./SectionHead";
import { Stagger, StaggerItem, Deco, EASE } from "./Motion";
import { Sparkle, Flower, Blob, Loop, Dots, Heart } from "./Doodles";

export default function Process() {
  return (
    <section className="section" id="process" aria-labelledby="process-h">
      <Deco className="prBlobA" from="scale" opacity={0.5} y={10} rotate={3} duration={9}><Blob color="#DCE8D5" /></Deco>
      <Deco className="prBlobB" from="scale" opacity={0.4} delay={0.2} y={9} rotate={-3} duration={10}><Blob color="#F7D8DF" /></Deco>
      <Deco className="prFlower" from="pop" delay={0.3} y={8} rotate={6} duration={7.5}><Flower petal="#F7D8DF" center="#F3CC68" /></Deco>
      <Deco className="prSpark" from="pop" delay={0.5} y={6} rotate={12} duration={5.5}><Sparkle color="#F4A84C" /></Deco>
      <Deco className="prLoop" from="left" opacity={0.8} delay={0.2} y={4} rotate={2} duration={6.5}><Loop color="#8DBCBC" /></Deco>
      <Deco className="prDots" from="up" delay={0.3} y={5} rotate={4} duration={6}><Dots color="#F47F5D" /></Deco>
      <Deco className="prHeart" from="pop" opacity={0.85} delay={0.5} y={6} rotate={5} duration={7}><Heart color="#EFB8C8" /></Deco>

      <SectionHead
        id="process-h"
        label="04 — HOW WE’LL WORK TOGETHER"
        lines={["A simple, organized", <>way to <em className="accentScript">get started.</em></>]}
      />
      <div className="processWrap">
        {/* Curved connector for desktop — draws itself as it scrolls into view */}
        <svg className="processCurve" viewBox="0 0 1000 180" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <clipPath id="curveReveal">
              <motion.rect
                x="0" y="-20" height="240" width="0"
                initial={{ width: 0 }} whileInView={{ width: 1000 }}
                viewport={{ once: true, margin: "0px 0px -15% 0px" }} transition={{ duration: 2.2, ease: EASE }}
              />
            </clipPath>
          </defs>
          <path
            d="M83 50 C 170 50 170 130 250 130 S 330 50 417 50 S 500 130 583 130 S 666 50 750 50 S 833 130 917 130"
            fill="none" stroke="#EFB8C8" strokeWidth="3" strokeDasharray="2 9" strokeLinecap="round"
            vectorEffect="non-scaling-stroke" clipPath="url(#curveReveal)"
          />
        </svg>
        <Stagger as="ol" className="steps" stagger={0.16}>
          {PROCESS.map((s, i) => (
            <StaggerItem as="li" key={s.n} from={i % 2 ? "up" : "left"} className={`step stepPos${i}`}>
              <motion.div className={`stepDot tone-${s.tone}`} whileHover={{ scale: 1.07 }} transition={{ type: "spring", stiffness: 260, damping: 16 }}>
                {s.n}
              </motion.div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              {i === 2 && <Sparkle color="#F3CC68" className="stepDeco" />}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
