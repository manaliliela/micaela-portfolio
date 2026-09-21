"use client";
import { motion } from "motion/react";
import { SERVICES } from "../lib/content";
import SectionHead from "./SectionHead";
import { Stagger, StaggerItem } from "./Motion";
import { Flower, Sparkle, Squiggle } from "./Doodles";

const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
const ICONS = {
  mail: <><rect x="3" y="5" width="18" height="14" rx="2.5" {...P} /><path d="M3.5 7l8.5 6 8.5-6" {...P} /></>,
  gear: <><circle cx="12" cy="12" r="3.2" {...P} /><path d="M12 3v2.4M12 18.6V21M3 12h2.4M18.6 12H21M5.6 5.6l1.7 1.7M16.7 16.7l1.7 1.7M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7" {...P} /></>,
  doc: <><path d="M7 3h7l4 4v14H7z" {...P} /><path d="M14 3v4h4M9.5 12h6M9.5 15.5h6M9.5 8.5h2" {...P} /></>,
  people: <><circle cx="9" cy="8.5" r="3" {...P} /><path d="M3.5 19c.4-3 2.6-4.8 5.5-4.8s5.1 1.8 5.5 4.8" {...P} /><circle cx="17" cy="9.5" r="2.4" {...P} /><path d="M16 14.4c2.4 0 4 1.4 4.5 3.6" {...P} /></>,
  edit: <><path d="M5 19h14M5.5 15.5L15.8 5.2a1.9 1.9 0 012.7 2.7L8.2 18.2 4.5 19z" {...P} /></>,
  chart: <><path d="M5 20V13M11 20V7M17 20v-9" {...P} strokeWidth="2.6" /></>,
};

const White = (props) => <Flower petal="#FFFDF9" center="#F3CC68" {...props} />;
const Star = (props) => <Sparkle color="#FFFDF9" {...props} />;
const DECOS = [White, Star, Squiggle, Star, White, Squiggle];

export default function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-h">
      <SectionHead
        id="services-h"
        label="01 — WHAT I CAN HELP WITH"
        lines={["Support that keeps", <>things <em className="accentScript">moving.</em></>]}
      />
      <Stagger className="services" stagger={0.1}>
        {SERVICES.map((s, i) => {
          const Deco = DECOS[i];
          return (
            <StaggerItem key={s.n} className={`svc svc${i + 1} tone-${s.tone}`}>
              <motion.article
                className="svcInner"
                whileHover={{ y: -8, rotate: i % 2 ? 0.8 : -0.8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <span className="svcNum">{s.n}</span>
                <svg className="svcIcon" viewBox="0 0 24 24" aria-hidden="true" width="34" height="34">{ICONS[s.icon]}</svg>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Deco className="svcDeco" />
              </motion.article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}
