"use client";
import { motion } from "motion/react";
import { PROCESS } from "../lib/content";
import SectionHead from "./SectionHead";
import { Stagger, StaggerItem, EASE } from "./Motion";
import { Sparkle } from "./Doodles";

export default function Process() {
  return (
    <section className="section" id="process" aria-labelledby="process-h">
      <SectionHead
        id="process-h"
        label="04 — HOW WE’LL WORK TOGETHER"
        lines={["A simple, organized", <>way to <em className="accentScript">get started.</em></>]}
        text="A clear and collaborative process, so we can get started smoothly and keep things moving."
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
            <StaggerItem as="li" key={s.n} className={`step stepPos${i}`}>
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
