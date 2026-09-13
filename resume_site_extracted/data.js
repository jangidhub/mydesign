/**
 * Site content.
 * Edit this file to update projects, skills, links, etc. — no HTML/CSS
 * knowledge required for most changes.
 *
 * TODO markers show where you should replace placeholder info with the
 * real thing (links, screenshots, exact dates).
 */

const SITE = {
  name: "Sudhanshu Jangid",
  role: "Software Developer",
  location: "Jodhpur, Rajasthan, India",
  email: "sudhanshujangid143@zohomail.in",
  github: "https://github.com/jangidhub/",
  linkedin: "https://www.linkedin.com/in/sudhanshu-jangid03",
  twitter: "https://x.com/Sudhans0841",
  // TODO: confirm this is still the right resume file name/path once you add the PDF.
  resumeUrl: "/resume.pdf",
};

const PROJECTS = [
  {
    name: "Inspection Management System",
    status: null, // e.g. "MVP" / "In Development" — set if this isn't a finished build
    description:
      "A web application built to digitize inspection workflows and reduce dependence on paper-based processes.",
    features: [
      "Authentication",
      "Inspection forms",
      "Database-driven records",
      "Report generation",
      "Responsive interface",
    ],
    tech: ["Python", "Django", "Database", "HTML/CSS/JavaScript"],
    role: "Designed and built the application end to end.",
    // TODO: add the real GitHub repo and live demo URLs (or remove the keys if not public).
    github: null,
    demo: null,
    pattern: "grid",
  },
  {
    name: "My Application Sound",
    status: "Experimental",
    description:
      "A multimodal interaction prototype exploring voice commands, hand-gesture recognition and clap detection as alternative input methods.",
    features: ["Voice command handling", "Gesture recognition", "Clap-based triggers"],
    tech: ["Python"], // TODO: list the actual libraries used (e.g. MediaPipe, SpeechRecognition, etc.)
    role: "Sole developer.",
    github: null, // TODO
    demo: null,
    pattern: "waves",
  },
  {
    name: "Win_Assist",
    status: "In Development",
    description:
      "An offline-first personal assistant for Windows, aimed at automating repetitive tasks and everyday productivity steps.",
    features: ["Offline operation", "Task automation"], // TODO: confirm/expand the actual feature set
    tech: ["Python"], // TODO: add the real stack
    role: "Sole developer.",
    github: null, // TODO
    demo: null,
    pattern: "lines",
  },
  {
    name: "JARVIS AI",
    status: "Experimental",
    description:
      "An AI assistant prototype exploring computer-vision-based interaction, inspired by conversational assistant interfaces.",
    features: ["Computer vision experiments", "Assistant-style interaction"], // TODO: confirm actual scope
    tech: ["Python"], // TODO: add the real stack
    role: "Sole developer.",
    github: null, // TODO
    demo: null,
    pattern: "dots",
  },
];

const CURRENTLY_BUILDING = {
  name: "Tap-to-Connect NFC Platform",
  status: "MVP / In Development",
  description:
    "An NFC-enabled digital identity platform connecting physical NFC cards with dynamic digital profiles for professionals and businesses.",
  tech: ["Django", "Python", "NFC", "Web"],
};

const CAPABILITIES = [
  {
    title: "Web Applications",
    description: "Authentication, dashboards, forms, databases, APIs and business workflows.",
  },
  {
    title: "Business Websites",
    description: "Responsive websites and landing pages for businesses and professionals.",
  },
  {
    title: "Digital Products",
    description: "Small SaaS products, client portals and digital tools.",
  },
  {
    title: "Automation",
    description: "Software that reduces repetitive manual processes.",
  },
];

const SKILLS = [
  { group: "Languages", items: ["Python", "JavaScript", "HTML", "CSS", "SQL"] },
  { group: "Frameworks", items: ["Django", "React", "Next.js"] },
  { group: "Database", items: ["MySQL", "PostgreSQL", "Supabase"] },
  { group: "Tools", items: ["Git", "GitHub", "Linux", "VS Code"] },
];

const EDUCATION = [
  {
    period: "", // TODO: add the years you attended, if you'd like them shown
    title: "Bachelor of Computer Applications (BCA)",
    org: "GD Memorial College",
    description: "",
  },
];

const EXPERIENCE = [
  {
    period: "Ongoing",
    title: "Independent Developer",
    org: "Self-directed",
    description:
      "Building applications independently — full-stack development, MVPs and product experiments, working end to end from database and backend architecture through to a usable, deployed interface.",
  },
];
