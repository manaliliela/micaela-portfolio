"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { TOOLS } from "../lib/content";
import SectionHead from "./SectionHead";
import { Stagger, StaggerItem } from "./Motion";

const TONES = ["pink", "teal", "yellow", "blush", "sage", "coral"];

export default function Tools() {
  return (
    <section className="section" id="tools" aria-labelledby="tools-h">
      <SectionHead
        id="tools-h"
        label="03 — TOOLS"
        lines={["Tools are useful.", <>Good systems <em className="accentScript">make them work.</em></>]}
      />
      <Stagger className="toolGrid" as="ul" stagger={0.05}>
        {TOOLS.map((t, i) => (
          <StaggerItem as="li" key={t.name} className="toolItem">
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
