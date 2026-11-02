// Set your live domain in .env.local as NEXT_PUBLIC_SITE_URL (used for canonical, sitemap, social cards)
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tanush-gupta.vercel.app";

// Put your photo in /public and set the path here, e.g. "/tanush.jpg". Empty shows the placeholder.
export const PHOTO_SRC = "";

export const EMAIL = "tanushgupta06work@gmail.com";
export const PHONE = "+91 9149836284";

export const SOCIALS = [
  { name: "GitHub", href: "https://github.com/tanush-space" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/taanushhh" },
  { name: "Behance", href: "https://www.behance.net/taanushhh" },
];

export type Project = {
  n: string; type: string; role: string; st: string; d: string; t: string[];
  c: string; nc: string; bg: string; tag: string; url: string;
};

export const PROJECTS: Project[] = [
  { n: "Verdure", type: "Mobile App", role: "UI/UX Designer", st: "Case study", d: "A plant-care app with reminders, dashboards and clean care flows that keep a watering routine easy to follow.", t: ["Figma", "Mobile UI", "Prototyping", "Dashboards"], c: "#cbb8ff", nc: "#ff6a2b", bg: "#c8f55a", tag: "Plant Care App", url: "behance.net" },
  { n: "THREADRIP", type: "Shopping App", role: "UI/UX Designer", st: "Case study", d: "A Gen Z fashion shopping app with a bold, browse-first interface.", t: ["Figma", "E-commerce", "Mobile UI", "Visual design"], c: "#fff4dc", nc: "#c8f55a", bg: "#ff6a2b", tag: "GenZ Fashion", url: "behance.net" },
  { n: "Medighar", type: "Healthcare Platform", role: "Product Designer", st: "Aug – Sept 2025", d: "Pharmacy platform UIs inspired by Apollo Pharmacy and 1MG, with booking dashboards and prototypes built to WCAG standards.", t: ["Figma", "WCAG", "Dashboards", "Wireframes"], c: "#ffd84a", nc: "#cbb8ff", bg: "#f7d0e9", tag: "Pharmacy UI", url: "Remote" },
  { n: "Threesixty Space", type: "Startup Websites", role: "Freelance UI/UX Designer", st: "May – Oct 2025", d: "Design and UX strategy for 5+ startup sites, including onboarding flows, landing pages and CTAs. Engagement rose 35% and conversions 20%.", t: ["Landing pages", "Onboarding", "UX strategy", "CTAs"], c: "#f7d0e9", nc: "#ffd84a", bg: "#cbb8ff", tag: "Startup Sites", url: "Freelance" },
  { n: "Sakkhi Swart", type: "Responsive Website", role: "Designer & Developer", st: "In progress", d: "A personal project: a responsive site built with modern UI patterns, designed in Figma and coded in the browser.", t: ["Figma", "HTML", "CSS", "JavaScript"], c: "#c8f55a", nc: "#cbb8ff", bg: "#ffd84a", tag: "Personal Project", url: "Work in progress" },
];

export const TAG_COLORS = ["#c8f55a", "#cbb8ff", "#ffd84a", "#ff6a2b", "#fff4dc"];

export const EXPERIENCE = [
  { company: "GDGoC MIET", role: "UI/UX Lead", when: "2026 — Present · 2026–27 session", c: "var(--pink)", sh: "var(--orange)", points: ["Lead the UI/UX vertical, guiding design direction for chapter events, campaigns and student-facing digital platforms.", "Mentor and coordinate team members on wireframing, prototyping and design systems in Figma.", "Collaborate with developers and the core team to turn design concepts into usable, user-centered interfaces."] },
  { company: "Kitabwalah", role: "Graphic Design Intern", when: "May 2026 — Oct 2026", c: "var(--yellow)", sh: "var(--ink)", points: ["Designed textbook layouts, worksheets and activity pages for primary school learners across subjects and grade levels.", "Translated curriculum content into age-appropriate learning materials within publication and branding standards.", "Worked with editorial and content teams, applying iterative feedback to deliver on schedule."] },
  { company: "Medighar", role: "Product Designer · Remote", when: "Aug 2025 — Sept 2025 · Healthcare startup", c: "var(--lilac)", sh: "var(--orange)", points: ["Designed pharmacy platform UIs inspired by Apollo Pharmacy and 1MG.", "Created wireframes, booking dashboards and prototypes in Figma.", "Applied WCAG standards for color contrast, typography and responsive design."] },
  { company: "Threesixty Space", role: "Freelance UI/UX Designer · Remote", when: "May 2025 — Oct 2025", c: "var(--cream)", sh: "var(--ink)", points: ["Led website design and UX strategy, driving a 35% boost in client engagement.", "Crafted onboarding flows, landing pages and CTAs for 5+ startup sites.", "Built brand-aligned UI/UX content that lifted conversion rates by 20%."] },
];

export const EDUCATION = [
  { title: "BCA (Hons.)", detail: "CGPA 8.36 · 4th Semester", when: "2024 — 2028", school: "Model Institute of Engineering & Technology (Autonomous), Jammu, India", c: "var(--lime)", sh: "var(--ink)" },
  { title: "Class 12", detail: "Medical Stream · 89.2%", when: "2023", school: "Rich Harvest School (CBSE), Jammu, India", c: "var(--cream)", sh: "var(--orange)" },
];

export const SKILLS = [
  { h: "Design", p: "UI design, UX research, wireframing, prototyping, interaction design, UX writing, accessibility and usability testing.", c: "var(--lime)" },
  { h: "Tools", p: "Figma, Canva, Notion, Miro and WordPress. Workflows that keep files tidy and handoffs smooth.", c: "var(--cream)" },
  { h: "Tech exposure", p: "HTML, CSS, JavaScript, ReactJS, Git, enough to hand off cleanly and speak with developers.", c: "var(--lilac)" },
  { h: "Soft skills", p: "Empathy, collaboration, curiosity, problem-solving and iterative thinking.", c: "var(--orange)" },
];

export const WINS = [
  "HackNITR Finalist · NIT Rourkela", "Girls Rock Code S2 · 1st place", "2× SIH Internal Round Winner",
  "Youth4Work Global Rank #199", "EF SET English C2 · 83/100", "NEP Saarthi Essay · 1st, Hindi",
];

export const MARQUEE = ["UI Designer", "UX Designer", "Product Designer", "Design Systems", "Figma"];
