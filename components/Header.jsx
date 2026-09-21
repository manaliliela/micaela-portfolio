"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { NAV } from "../lib/site";
import { EASE } from "./Motion";
import { ArrowRight } from "./Doodles";

export default function Header() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape and when the layout grows to desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 860 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <motion.header
        className={`header ${compact ? "isCompact" : ""}`}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
      >
        <div className="headerInner">
          <a href="#top" className="brand" aria-label="Micaela Studio — back to top">
            <Image
              src="/logo/micaela-logo.png"
              alt="Micaela Studio logo"
              width={866}
              height={857}
              priority
              sizes="96px"
              className="brandLogo"
            />
          </a>

          <nav className="nav" aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
          </nav>

          <a href="#contact" className="btn btnRose headerCta">
            Let’s Talk <ArrowRight />
          </a>

          <button
            type="button"
            className="menuBtn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`burger ${open ? "isOpen" : ""}`} />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-menu"
              className="mobileMenu"
              aria-label="Mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <div className="mobileMenuInner">
                {NAV.map((n) => (
                  <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
                ))}
                <a href="#contact" className="btn btnRose" onClick={() => setOpen(false)}>Let’s Talk <ArrowRight /></a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
