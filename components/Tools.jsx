"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { TOOLS } from "../lib/content";
import SectionHead from "./SectionHead";
import { Stagger, StaggerItem, Deco } from "./Motion";
import { Flower, Sparkle, Squiggle, Blob, Dots, Ring } from "./Doodles";

const TONES = ["pink", "teal", "yellow", "blush", "sage", "coral"];

export default function Tools() {
  return (
    <section className="section" id="tools" aria-labelledby="tools-h">
      <Deco className="tlBlobA" from="scale" opacity={0.5} y={10} rotate={3} duration={9}><Blob color="#F7D8DF" /></Deco>
      <Deco className="tlBlobB" from="scale" opacity={0.4} delay={0.2} y={9} rotate={-3} duration={10}><Blob color="#CFE3E2" /></Deco>
      <Deco className="tlFlowerA" from="pop" delay={0.3} y={8} rotate={6} duration={7.5}><Flower petal="#EFB8C8" center="#FFFDF9" /></Deco>
      <Deco className="tlFlowerB" from="pop" delay={0.5} y={7} rotate={-6} duration={8}><Flower petal="#F3CC68" center="#FFFDF9" /></Deco>
      <Deco className="tlSpark" from="pop" delay={0.4} y={6} rotate={12} duration={5.5}><Sparkle color="#F4A84C" /></Deco>
      <Deco className="tlSquiggle" from="right" opacity={0.75} delay={0.2} y={4} rotate={2} duration={6}><Squiggle color="#5D9897" /></Deco>
      <Deco className="tlDots" from="up" delay={0.3} y={5} rotate={4} duration={6.5}><Dots color="#EFB8C8" /></Deco>
      <Deco className="tlRing" from="pop" opacity={0.85} delay={0.6} y={6} rotate={0} duration={7}><Ring color="#8DBCBC" /></Deco>

      <SectionHead
        id="tools-h"
        label="TOOLS"
        lines={["Tools are useful.", <>Good systems <em className="accentScript">make them work.</em></>]}
      />
      <Stagger className="toolGrid" as="ul" stagger={0.02}>
        {TOOLS.map((t, i) => (
          <StaggerItem as="li" key={t.name} light from="scale" className="toolItem">
            <motion.div
              className={`tool tone-${TONES[i % TONES.length]}`}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <span className="toolLogo">
                <Image src={`/tools/${t.logo}.svg`} alt="" width={48} height={48} />
              </span>
              <span className="toolName">{t.name}</span>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
