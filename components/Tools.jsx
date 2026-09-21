"use client";
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
      <Stagger className="pills" as="ul" stagger={0.045}>
        {TOOLS.map((t, i) => (
          <StaggerItem as="li" key={t} className={`pillWrap shift${i % 4}`}>
            <motion.span
              className={`pill tone-${TONES[i % TONES.length]}`}
              whileHover={{ y: -4, rotate: i % 2 ? 1.5 : -1.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              <i aria-hidden="true" />
              {t}
            </motion.span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
