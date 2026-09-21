"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { PROJECTS } from "../lib/work";
import SectionHead from "./SectionHead";
import { Stagger, StaggerItem, EASE } from "./Motion";
import { Composition } from "./Mockups";
import { Flower, Sparkle } from "./Doodles";

function Logo({ logo }) {
  if (!logo) return null;
  return (
    <span className={`logoBadge ${logo.dark ? "isDark" : ""}`}>
      <Image src={logo.src} alt={logo.alt} width={logo.w} height={logo.h} sizes="64px" />
    </span>
  );
}

function Card({ p, index }) {
  const num = String(index + 1).padStart(2, "0");
  const featured = p.size === "featured";
  const body = (
    <motion.article
      className="workInner"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
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
    <StaggerItem className={`work work-${p.size} tone-${p.tone}`}>
      {featured ? (
        // Reveal mask for the large feature block.
        <motion.div
          className="maskReveal"
          initial={{ clipPath: "inset(0% 0% 100% 0% round 36px)" }}
          whileInView={{ clipPath: "inset(-10% -5% -10% -5% round 36px)" }}
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
    <section className="section" id="work" aria-labelledby="work-h">
      <SectionHead
        id="work-h"
        label="02 — WORK"
        lines={["A closer look at", <>what I’ve <em className="accentScript">worked on.</em></>]}
        text="Different teams. Different projects. One goal — helping things work better."
      />
      <Stagger className="workGrid" stagger={0.14}>
        {PROJECTS.map((p, i) => <Card key={p.slug} p={p} index={i} />)}
      </Stagger>
    </section>
  );
}
