"use client";
import { SITE } from "../lib/site";
import { Reveal, Float, Deco } from "./Motion";
import { Flower, Sparkle, Heart, ArrowRight, LinkedInIcon } from "./Doodles";

export default function Contact() {
  return (
    <section className="section contactSection" id="contact" aria-labelledby="contact-h">
      <div className="contactPanel">
        {/* big daisies on the sides, small blooms + sparkles closer in */}
        <Deco className="cDaisy" from="left" delay={0.1} y={10} rotate={6} duration={7}><Flower fat petal="#FFFFFF" center="#FDB94E" /></Deco>
        <Deco className="cBloom" from="right" delay={0.2} y={9} rotate={5} duration={8} floatDelay={0.8}><Flower fat petal="#F8CDD8" center="#F3A84C" /></Deco>
        <Deco className="cPeach" from="right" delay={0.35} y={8} rotate={7} duration={6.5} floatDelay={0.4}><Flower fat petal="#FDC9A8" center="#FFFFFF" /></Deco>
        <Deco className="cMiniOrange" from="pop" delay={0.5} y={6} rotate={8} duration={5.5}><Flower fat petal="#FDB446" center="#FFFFFF" /></Deco>
        <Deco className="cMiniPink" from="pop" delay={0.6} y={6} rotate={-8} duration={6} floatDelay={0.6}><Flower fat petal="#F5BCCD" center="#FFFFFF" /></Deco>
        <Deco className="cAster" from="pop" delay={0.7} y={5} rotate={14} duration={5}><Sparkle color="#FCC9A6" /></Deco>
        <Deco className="cSpark" from="pop" delay={0.8} y={5} rotate={12} duration={5.5}><Sparkle color="#FFFDF9" /></Deco>

        <Reveal className="contactCopy" from="scale">
          <Heart className="contactHeart" />
          <p className="eyebrow onDark">CONTACT</p>
          <h2 id="contact-h" className="display">
            Need an extra pair of <em className="accentScript">organized hands?</em>
          </h2>
          <p className="contactText">
            Let’s chat about what’s keeping you busy and how I can make your day-to-day work a little easier.
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
