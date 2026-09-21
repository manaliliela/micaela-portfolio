"use client";
import { motion } from "motion/react";
import { SERVICES } from "../lib/content";
import SectionHead from "./SectionHead";
import { Stagger, StaggerItem, Deco } from "./Motion";
import { Flower, Sparkle, Squiggle, Blob, Loop, Dots, Heart } from "./Doodles";

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
// Each card drifts in from its own side, so the grid never moves as one block.
const FROM = ["left", "up", "right", "left", "up", "right"];

export default function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-h">
      <Deco className="svBlobA" from="scale" opacity={0.5} y={10} rotate={3} duration={9}><Blob color="#F7D8DF" /></Deco>
      <Deco className="svBlobB" from="scale" opacity={0.45} delay={0.2} y={9} rotate={-3} duration={10}><Blob color="#DCE8D5" /></Deco>
      <Deco className="svFlower" from="pop" delay={0.3} y={8} rotate={6} duration={7.5}><Flower petal="#8DBCBC" center="#FFFDF9" /></Deco>
      <Deco className="svSpark" from="pop" delay={0.5} y={6} rotate={12} duration={5.5}><Sparkle color="#F4A84C" /></Deco>
      <Deco className="svLoop" from="left" opacity={0.8} delay={0.2} y={4} rotate={2} duration={6.5}><Loop color="#EFB8C8" /></Deco>
      <Deco className="svDots" from="up" delay={0.3} y={5} rotate={4} duration={6}><Dots color="#F3CC68" /></Deco>
      <Deco className="svHeart" from="pop" opacity={0.85} delay={0.4} y={6} rotate={5} duration={7}><Heart color="#F7D8DF" /></Deco>

      <SectionHead
        id="services-h"
        label="WHAT I CAN HELP WITH"
        lines={["Support that keeps", <>things <em className="accentScript">moving.</em></>]}
      />
      <Stagger className="services" stagger={0.035}>
        {SERVICES.map((s, i) => {
          const Deco = DECOS[i];
          return (
            <StaggerItem key={s.n} light from={FROM[i]} className={`svc svc${i + 1} tone-${s.tone}`}>
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
