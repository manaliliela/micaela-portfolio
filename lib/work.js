// =====================================================================
// WORK DATA — every project here is built from real files in /public/work.
// To add, remove or reorder a project, edit this list. The order is the
// order shown on the site. Each visual is placed by
// `pos` (percent of the mockup area), and keeps its natural proportions:
//   kind: "phone"   -> social / mobile screenshots
//   kind: "browser" -> website / desktop screenshots
//   kind: "card"    -> posts, graphics, documents (framed, uncropped)
// w / h are the real pixel size of each file (used to keep proportions).
// =====================================================================

const a = (n) => `/work/abeona/abeona-sample-${n}.png`;

export const PROJECTS = [
  {
    slug: "abeona",
    size: "featured",
    tone: "pink",
    client: "Abeona Tourism",
    category: "Social Media & Marketing",
    role: "Managed social media and marketing activities by creating and scheduling content, responding to customer inquiries, and preparing promotional materials. I also coordinated campaigns, worked with influencers, researched competitors, and handled a range of marketing and administrative tasks.",
    logo: { src: "/work/abeona/abeona-cover.jpg", w: 320, h: 320, alt: "Abeona Tourism logo" },
    ratio: "16 / 10",
    items: [
      { kind: "phone", src: a(2), w: 828, h: 1792, alt: "Abeona Tourism Instagram feed grid", pos: { left: 2, top: 12, width: 25, rot: -5, z: 1 } },
      { kind: "phone", src: a(3), w: 828, h: 1792, alt: "Abeona Tourism Instagram feed with travel promotions", pos: { left: 19, top: 2, width: 25, rot: 3, z: 2 } },
      { kind: "phone", src: a(1), w: 828, h: 1792, alt: "Abeona Tourism Instagram profile", pos: { left: 37, top: 9, width: 26, rot: -2, z: 4 } },
      { kind: "phone", src: a(4), w: 828, h: 1792, alt: "Abeona Tourism self-drive boat tour giveaway post", pos: { left: 56, top: 1, width: 25, rot: 4, z: 3 } },
      { kind: "phone", src: a(5), w: 828, h: 1792, alt: "Abeona Tourism staycation giveaway post", pos: { left: 73, top: 12, width: 25, rot: -3, z: 2 }, hideOnMobile: true },
    ],
  },
  {
    slug: "gobro",
    size: "medium",
    tone: "yellow",
    client: "GoBro Web Services",
    category: "Marketing Content",
    role: "Worked closely with the COO and CEO on marketing and business initiatives, including event planning, blog creation, newsletters, and digital campaigns. I also prepared promotional materials and organized content for the company’s online presence and client-facing projects.",
    ratio: "1 / 1",
    items: [
      { kind: "browser", src: "/work/gobro/gobro-cover.png", w: 1867, h: 915, alt: "GoBro Web Services website", pos: { left: 2, top: 4, width: 96, rot: 0, z: 1 } },
      { kind: "phone", src: "/work/gobro/gobro-sample-1.png", w: 332, h: 756, alt: "GoBro Web Services Instagram profile", pos: { left: 30, top: 34, width: 26, rot: -4, z: 3 } },
      { kind: "phone", src: "/work/gobro/gobro-sample.png", w: 447, h: 853, alt: "GoBro Web Services news article page", pos: { left: 60, top: 30, width: 28, rot: 3, z: 2 } },
    ],
  },
  {
    slug: "masshouse",
    size: "medium",
    tone: "sage",
    client: "MassHouse Studio",
    category: "Operations & Workflow Support",
    role: "Coordinated day-to-day operations across client communication, project tracking, proposals, CRM updates, PR outreach, website tasks, and administrative work. I also organized workflows in ClickUp, prepared reports, managed information, and kept multiple photography and media projects moving efficiently.",
    ratio: "16 / 10",
    items: [
      { kind: "browser", src: "/work/masshouse/masshouse-sample.png", w: 1852, h: 929, alt: "MassHouse website news page", pos: { left: 2, top: 4, width: 96, rot: 0, z: 1 } },
      { kind: "card", src: "/work/masshouse/masshouse-cover.png", w: 376, h: 245, alt: "MassHouse logo", pos: { left: 8, top: 52, width: 32, rot: -4, z: 2 } },
    ],
  },
  {
    slug: "sushiboy",
    size: "small",
    tone: "peach",
    client: "Sushiboy",
    category: "Social Media Content",
    role: "Managed promotional content across the website and social media by updating promo details, adjusting prices, and publishing campaign materials. I also ensured promotional offers were accurately reflected online and consistently communicated across digital channels.",
    ratio: "5 / 4",
    items: [
      { kind: "card", src: "/work/sushiboy/sushiboy-cover.png", w: 1853, h: 860, alt: "Sushiboy banner", pos: { left: 2, top: 2, width: 96, rot: 0, z: 1 } },
      { kind: "card", src: "/work/sushiboy/sushiboy-sample-1.png", w: 1080, h: 1080, alt: "Sushiboy: Every day is sushi day post", pos: { left: 55, top: 48, width: 40, rot: 4, z: 3 } },
      { kind: "card", src: "/work/sushiboy/sushiboy-sample-2.png", w: 1080, h: 1080, alt: "Sushiboy: Delicious Japanese food post", pos: { left: 8, top: 52, width: 36, rot: -5, z: 2 } },
    ],
  },
  {
    slug: "visions",
    size: "small",
    tone: "blush",
    client: "Visions Quality Coatings",
    category: "Digital Content",
    role: "Collaborated with the internal marketing team to plan social media content, promotions, and campaign ideas aligned with the company’s goals. I also created digital content and graphics, organized social media materials, and helped maintain a consistent and professional online presence.",
    ratio: "5 / 4",
    items: [
      { kind: "phone", src: "/work/visions/visions-sample.png", w: 496, h: 807, alt: "Visions Quality Coatings Instagram feed", pos: { left: 14, top: 4, width: 42, rot: -2, z: 1 } },
      { kind: "card", src: "/work/visions/visions-cover.webp", w: 1200, h: 628, alt: "Visions Quality Coatings logo", pos: { left: 50, top: 50, width: 46, rot: 4, z: 3 } },
    ],
  },
  {
    slug: "dr-lim-dental",
    size: "small",
    tone: "teal",
    client: "Dr. Lim Dental",
    category: "Content & Social Media",
    role: "Created social media content and graphics while maintaining the clinic’s online presence and engagement. I also organized content ideas, responded to inquiries, and contributed to promotional activities for the clinic.",
    ratio: "5 / 4",
    items: [
      { kind: "browser", src: "/work/dr-lim-dental/dr-lim-cover.png", w: 1888, h: 831, alt: "Dr. Lim Dental website", pos: { left: 2, top: 3, width: 96, rot: 0, z: 1 } },
      { kind: "card", src: "/work/dr-lim-dental/dr-lim-sample-1.png", w: 616, h: 617, alt: "Dr. Lim Dental social post: Can't handle the tooth?", pos: { left: 52, top: 42, width: 42, rot: 3, z: 3 } },
      { kind: "card", src: "/work/dr-lim-dental/dr-lim-sample.png", w: 329, h: 441, alt: "Dr. Lim Dental Instagram post collection", pos: { left: 6, top: 46, width: 28, rot: -4, z: 2 } },
    ],
  },
];

// Additional projects: presentations & company profiles, shown one at a time
// in a slider. The order here is the order in the slider.
// Wide strips are shown uncropped and open full-size in a viewer.
export const ADDITIONAL = [
  {
    id: "tripgo",
    title: "Tripgo",
    note: "Company profile",
    tone: "pink",
    images: [
      { src: "/work/additional-projects/project-1.png", w: 1692, h: 277, alt: "Tripgo company profile slides" },
      { src: "/work/additional-projects/project-2.png", w: 1201, h: 341, alt: "Tripgo company profile, inner pages" },
    ],
  },
  {
    id: "fitdxb",
    title: "FITDXB",
    note: "Company profile",
    tone: "yellow",
    images: [{ src: "/work/additional-projects/project-3.png", w: 1730, h: 405, alt: "FITDXB company profile slides" }],
  },
  {
    id: "onsite",
    title: "Onsite.ae",
    note: "Company profile",
    tone: "sage",
    images: [{ src: "/work/additional-projects/project-4.png", w: 1534, h: 312, alt: "Onsite.ae company profile slides" }],
  },
  {
    id: "abeona-presentation",
    title: "Abeona Travel",
    note: "Presentation slides",
    tone: "teal",
    images: [{ src: "/work/additional-projects/project-5.png", w: 1330, h: 777, alt: "Abeona Travel presentation slides" }],
  },
];
