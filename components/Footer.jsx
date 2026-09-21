import Image from "next/image";
import { SITE } from "../lib/site";
import { LinkedInIcon } from "./Doodles";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerBrand">
          <Image src="/logo/micaela-logo.png" alt="Simply Micaela logo" width={1254} height={1254} sizes="56px" className="footerLogo" />
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
      </div>
    </footer>
  );
}
