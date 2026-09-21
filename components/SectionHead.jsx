"use client";
import { MaskLineInView, Reveal } from "./Motion";

// Label + large editorial heading (each line is a MaskLine) + supporting text.
export default function SectionHead({ id, label, lines, text, aside }) {
  return (
    <header className="sectionHead">
      <div>
        <Reveal as="p" className="eyebrow" y={12}>{label}</Reveal>
        <h2 id={id} className="display">
          {lines.map((l, i) => (
            <MaskLineInView key={i} delay={i * 0.09}>{l}</MaskLineInView>
          ))}
        </h2>
      </div>
      {(text || aside) && (
        <Reveal className="sectionHeadText" delay={0.2} from="right">
          {text && <p>{text}</p>}
          {aside}
        </Reveal>
      )}
    </header>
  );
}
