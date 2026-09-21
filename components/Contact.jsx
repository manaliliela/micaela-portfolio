"use client";
import { SITE } from "../lib/site";
import { Reveal, Float } from "./Motion";
import { Flower, Leaf, Sparkle, ArrowRight, LinkedInIcon } from "./Doodles";

export default function Contact() {
  return (
    <section className="section contactSection" id="contact" aria-labelledby="contact-h">
      <div className="contactPanel">
        <Float className="deco cFlowerA" y={10} rotate={6} duration={6.5}><Flower petal="#F7D8DF" center="#F3CC68" /></Float>
        <Float className="deco cFlowerB" y={8} rotate={5} duration={5.5} delay={1}><Flower petal="#FFFDF9" center="#F4A84C" /></Float>
        <Float className="deco cLeaf" y={6} rotate={2} duration={8}><Leaf color="#5D9897" vein="#FFFDF9" /></Float>
        <Float className="deco cSpark" y={6} rotate={10} duration={5}><Sparkle color="#F3CC68" /></Float>

        <Reveal className="contactCopy">
          <p className="eyebrow onDark">05 — CONTACT</p>
          <h2 id="contact-h" className="display">
            Need an extra pair of <em className="accentScript">organized hands?</em>
          </h2>
          <p className="contactText">
            Let’s talk about where you need support and how I can help make things easier behind the scenes.
          </p>
          <div className="contactActions">
            <a className="btn btnCream" href={`mailto:${SITE.email}`}>Say Hello <ArrowRight /></a>
            <a className="contactLink" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
          {SITE.linkedin && (
            <div className="contactActions contactSocial">
              <a
                className="btn btnLine"
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn (opens in a new tab)"
              >
                <LinkedInIcon /> Connect on LinkedIn
              </a>
            </div>
          )}
        </Reveal>

        <Float className="contactNote" y={5} rotate={2} duration={7}>
          <span className="script">Behind the scenes,<br />big things happen.</span>
        </Float>
      </div>
    </section>
  );
}
