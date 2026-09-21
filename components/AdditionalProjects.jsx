"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ADDITIONAL } from "../lib/work";
import SectionHead from "./SectionHead";
import { Stagger, StaggerItem, EASE } from "./Motion";

function Viewer({ item, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="viewer"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — ${item.note}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="viewerBody"
        initial={{ y: 24, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 12, opacity: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="viewerHead">
          <div>
            <strong>{item.title}</strong>
            <span>{item.note}</span>
          </div>
          <button ref={closeRef} type="button" className="viewerClose" onClick={onClose} aria-label="Close preview">✕</button>
        </div>
        <div className="viewerScroll">
          {item.images.map((im) => (
            <div key={im.src} className="viewerImg">
              <Image src={im.src} alt={im.alt} width={im.w} height={im.h} sizes="(max-width: 900px) 900px, 1400px" />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AdditionalProjects() {
  const [active, setActive] = useState(null);
  return (
    <section className="section sectionLight" id="additional" aria-labelledby="additional-h">
      <SectionHead
        id="additional-h"
        label="ADDITIONAL PROJECTS"
        lines={["More work,", <>more <em className="accentScript">possibilities.</em></>]}
        text="A collection of other projects and sample work, including presentations and company profiles. Tap any sample to view it full size."
      />

      <Stagger className="addGrid" stagger={0.1}>
        {ADDITIONAL.map((it, i) => {
          const lead = it.images[0];
          return (
            <StaggerItem key={it.id} className={`addItem add${i + 1} tone-${it.tone}`}>
              <motion.button
                type="button"
                className="addCard"
                onClick={() => setActive(it)}
                whileHover={{ y: -6, rotate: i % 2 ? 0.5 : -0.5 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                aria-label={`View ${it.title} ${it.note} full size`}
              >
                <span className={`sheet ${it.images.length > 1 ? "hasStack" : ""}`}>
                  <Image src={lead.src} alt={lead.alt} width={lead.w} height={lead.h} sizes="(max-width: 700px) 92vw, 46vw" />
                </span>
                <span className="addCaption">
                  <strong>{it.title}</strong>
                  <em>{it.note}{it.images.length > 1 ? ` · ${it.images.length} views` : ""}</em>
                </span>
              </motion.button>
            </StaggerItem>
          );
        })}
      </Stagger>

      <AnimatePresence>{active && <Viewer item={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}
