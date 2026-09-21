# Micaela Manalili — Portfolio

Personal portfolio website of Micaela Manalili — Operations Virtual Assistant | Admin & Workflow Support.

Built with Next.js (App Router), React and Motion. Deploys to Vercel with no extra configuration.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

| What | Where |
| --- | --- |
| Page sections | `components/` (Header, Hero, Services, Work, AdditionalProjects, Tools, Process, Contact, Footer) |
| Email + LinkedIn + nav links | `lib/site.js` (one LinkedIn URL feeds every LinkedIn link; empty it and they all hide) |
| Services, tools, process copy | `lib/content.js` |
| Tool logos (one SVG per tool) | `public/tools/` — swap in official logos using the same file names |
| Header logo | `public/logo/micaela-logo-header.png` (trimmed, transparent copy of `micaela-logo.png`) |
| Work + Additional Projects (slider order = list order) | `lib/work.js` |
| Styles / palette | `app/globals.css` |
| Images | `public/` |
| Original brief + design reference | `docs/` |

## Adding or changing work

Everything in **Work** and **Additional Projects** is driven by `lib/work.js`.
Drop images into `public/work/<project>/`, then add or reorder an entry. Each image is
placed as `phone` (social / mobile), `browser` (websites) or `card` (posts, documents),
and keeps its natural proportions — nothing is cropped or stretched.
