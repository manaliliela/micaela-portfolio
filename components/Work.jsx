"use client";
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

function Card({ p, index }) {
  const reduce = useReducedMotion();
  const num = String(index + 1).padStart(2, "0");
  const featured = p.size === "featured";
  const body = (
    <motion.article
      className="workInner"
      whileHover={{ y: -14, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 230, damping: 24 }}
    >
      <div className="workText">
        <span className="workNum" aria-hidden="true">{num}</span>
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
          sizes={featured ? "(max-width: 700px) 90vw, 55vw" : "(max-width: 700px) 90vw, 40vw"}
        />
      </div>
      {featured && <Flower petal="#FFFDF9" center="#F3CC68" className="workDeco wd1" />}
      {featured && <Sparkle color="#F4A84C" className="workDeco wd2" />}
    </motion.article>
  );

  return (
    <StaggerItem from={FROM[index % FROM.length]} className={`work work-${p.size} work-${p.slug} tone-${p.tone}`}>
      {featured ? (
        // Reveal mask for the large feature block.
        <motion.div
          className="maskReveal"
          initial={{ clipPath: reduce ? "inset(-16% -8% -16% -8% round 36px)" : "inset(0% 0% 100% 0% round 36px)" }}
          whileInView={{ clipPath: "inset(-16% -8% -16% -8% round 36px)" }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          {body}
        </motion.div>
      ) : (
        body
      )}
    </StaggerItem>
  );
}

export default function Work() {
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
        label="02 — WORK"
        lines={["A closer look at", <>what I’ve <em className="accentScript">worked on.</em></>]}
      />
      <Stagger className="workGrid" stagger={0.14}>
        {PROJECTS.map((p, i) => <Card key={p.slug} p={p} index={i} />)}
      </Stagger>
    </section>
  );
}
