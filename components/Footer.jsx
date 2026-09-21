import Image from "next/image";
import { SITE } from "../lib/site";
import { LinkedInIcon } from "./Doodles";
import { Reveal } from "./Motion";

export default function Footer() {
  return (
    <footer className="footer">
      <Reveal className="footerInner" y={20}>
        <div className="footerBrand">
          <Image src="/logo/micaela-logo.png" alt="Micaela Studio logo" width={866} height={857} sizes="80px" className="footerLogo" />
          <div>
            <strong>{SITE.name}</strong>
            <span>{SITE.title}</span>
          </div>
        </div>
        <nav className="footerLinks" aria-label="Footer">
          <a href="#work">Work</a>
          {SITE.linkedin && (
            <a className="footerLinkedIn" href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
              <LinkedInIcon /> LinkedIn
            </a>
          )}
          <a href={`mailto:${SITE.email}`}>Email</a>
        </nav>
        <p className="copy">© 2026 {SITE.name}</p>
        <a className="toTop" href="#top" aria-label="Back to top">↑</a>
      </Reveal>
    </footer>
  );
}
