// Small decorative SVGs — purely visual, hidden from assistive tech.
// `fat` gives the rounder, chunkier daisy petals used in the Contact section.
export function Flower({ petal = "#F7D8DF", center = "#F3CC68", className = "", fat = false }) {
  const p = fat ? { cy: 24, rx: 17, ry: 23 } : { cy: 20, rx: 13, ry: 20 };
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      <g fill={petal}>
        {[0, 60, 120, 180, 240, 300].map((r) => (
          <ellipse key={r} cx="50" cy={p.cy} rx={p.rx} ry={p.ry} transform={`rotate(${r} 50 50)`} />
        ))}
      </g>
      <circle cx="50" cy="50" r={fat ? 12 : 13} fill={center} />
    </svg>
  );
}

export function Sparkle({ color = "#F4A84C", className = "" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <path d="M20 2 C21.5 13 27 18.5 38 20 C27 21.5 21.5 27 20 38 C18.5 27 13 21.5 2 20 C13 18.5 18.5 13 20 2Z" fill={color} />
    </svg>
  );
}

export function Leaf({ color = "#8DBCBC", vein = "#5D9897", className = "" }) {
  return (
    <svg viewBox="0 0 120 200" className={className} aria-hidden="true" focusable="false">
      <path d="M60 196 C8 150 2 70 60 4 C118 70 112 150 60 196Z" fill={color} />
      <path d="M60 190 L60 20 M60 130 L30 100 M60 130 L90 100 M60 90 L34 62 M60 90 L86 62" stroke={vein} strokeWidth="3" strokeLinecap="round" fill="none" opacity=".55" />
    </svg>
  );
}

export function Blob({ color = "#F7D8DF", className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" focusable="false">
      <path fill={color} d="M44.6,-58.4C57.1,-49.5,66,-35.1,70.4,-19.3C74.8,-3.5,74.7,13.6,67.8,27.3C60.9,41,47.2,51.3,32.5,58.9C17.8,66.5,2.1,71.4,-14.6,70.2C-31.3,69,-49,61.7,-59.8,48.6C-70.6,35.5,-74.5,16.7,-72.3,-0.9C-70.1,-18.5,-61.8,-35,-49.4,-44C-37,-53,-18.5,-54.6,-1.1,-53.3C16.3,-52,32.1,-67.3,44.6,-58.4Z" transform="translate(100 100)" />
    </svg>
  );
}

export function Squiggle({ color = "#F47F5D", className = "" }) {
  return (
    <svg viewBox="0 0 120 24" className={className} aria-hidden="true" focusable="false">
      <path d="M2 14 C12 2 20 2 30 12 S48 22 58 12 S76 2 86 12 S104 22 118 8" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function ArrowRight({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" width="18" height="18">
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function LinkedInIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" width="18" height="18">
      <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Heart({ color = "#F0A5C3", className = "" }) {
  return (
    <svg viewBox="0 0 100 90" className={className} aria-hidden="true" focusable="false">
      <path fill={color} d="M50 84 C20 60 4 44 4 26 C4 12 15 4 27 4 C37 4 45 10 50 18 C55 10 63 4 73 4 C85 4 96 12 96 26 C96 44 80 60 50 84Z" />
    </svg>
  );
}

export function Ring({ color = "#EFB8C8", className = "" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <circle cx="20" cy="20" r="14" stroke={color} strokeWidth="4" fill="none" />
    </svg>
  );
}

export function Dots({ color = "#F4A84C", className = "" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <g fill={color}>
        <circle cx="8" cy="30" r="4" />
        <circle cx="20" cy="14" r="5" />
        <circle cx="33" cy="27" r="3.2" />
      </g>
    </svg>
  );
}

// A little loop-the-loop scribble.
export function Loop({ color = "#5D9897", className = "" }) {
  return (
    <svg viewBox="0 0 70 36" className={className} aria-hidden="true" focusable="false">
      <path d="M4 28 C16 30 30 26 38 16 C44 8 34 2 28 8 C22 14 30 26 44 26 C54 26 60 20 66 14" stroke={color} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
