// src/data/projects.js
// All projects live here. Each one appears in its section on the homepage,
// and its `skills` array feeds the skills table automatically.
//
// IMPORTANT: skill names must exactly match the names in skills.js
// (case-sensitive) for the project reference to attach to the right skill.
//
// Fields:
//   code        drawing-style index (R- research, PB- personal build, M- misc)
//   section     "research" | "builds" | "misc"
//   title       project name
//   description one or two sentences
//   year        "2025", "2023–2024", "Ongoing", etc.
//   skills      list of skills used — these populate the skills table
//   href        optional link to a project page in src/pages/projects/

export const sections = [
  { id: "research", label: "Master's Research" },
  { id: "builds", label: "Personal Builds" },
  { id: "misc", label: "Miscellaneous" },
];

export const projects = [
  {
    code: "R-001",
    section: "research",
    title: "Scanning Microscope for Self-Driving Labs (WIP)",
    description:
      "Designed, built and characterized a scanning microscope to feed a custom U-Net cell segmentation model.",
    year: "2026",
    skills: [
      "Autodesk Inventor",
      "3D printing (FDM)",
      "G-code",
      "Python",
      "Machine vision",
    ],
  },
  {
    code: "R-002",
    section: "research",
    title: "Hot-Swappable Robotic End Effectors for Self-Driving Labs (WIP)",
    description:
      "Surveyed research to unify multiple frameworks, creating a suite of swappable end effectors including a gripper and a set of pipettes.",
    year: "2026",
    skills: [
      "Autodesk Inventor",
      "Altium Designer",
      "PCB design",
      "3D printing (FDM)",
      "3D printing (SLA)",
      "Python",
      "Mechanism design",
    ],
  },
  {
    code: "R-003",
    section: "research",
    title: "Modular Centrifuge for Self-Driving Labs (WIP)",
    description:
      "Created a modular swinging bucket centrifuge capable of sustaining accelerations up to 1000 g.",
    year: "2025",
    skills: [
      "Autodesk Inventor",
      "DC motor control",
      "Sensor integration",
      "3D printing (FDM)",
      "Lathe",
      "Python",
    ],
  },
  {
    code: "R-004",
    section: "research",
    title: "Robotic Gantry for Self-Driving Labs (WIP)",
    description:
      "5 DOF gantry robot with a work envelope of 400 mm x 600 mm x 300 mm to act as the body of an SDL.",
    year: "2025",
    skills: [
      "Autodesk Inventor",
      "Parametric modeling",
      "3D printing (FDM)",
      "Milling",
      "Lathe",
      "Python",
      "G-code",
      "Robotic design",
    ],
  },
  {
    code: "R-005",
    section: "research",
    title: "Cell Segmentation U-Net Model",
    description:
      "A U-Net model able to classify cells with 95% pixel accuracy.",
    year: "2025",
    skills: ["Python", "PyTorch", "Machine vision", "Data augmentation"],
    href: "/projects/mast-segmentation",
  },
  {
    code: "PB-001",
    section: "builds",
    title: "Nicholasgrzelak.ca",
    description:
      "This website that you are looking at. Built on the Astro framework using Agentic AI.",
    year: "2026",
    skills: ["UI/UX"],
  },
  {
    code: "PB-002",
    section: "builds",
    title: "Catan Collector",
    description:
      "Have friends that take long turns in the hit board game Catan? Show them how long they are taking and get cool stats including dice rolls and player wins.",
    year: "2026",
    skills: [
      "Autodesk Inventor",
      "3D printing (FDM)",
      "Circuit design",
      "Arduino",
    ],
    href: "/projects/catan-collector",
  },
  {
    code: "PB-003",
    section: "builds",
    title: "Coin Organizer (CAD$)",
    description:
      "Too many coins lying around? Put them in a coin organizer to make grabbing change easy.",
    year: "2024",
    skills: ["Autodesk Inventor", "3D printing (FDM)"],
  },
  {
    code: "PB-004",
    section: "builds",
    title: "Medical CRM",
    description:
      "Customer relationship management platform for hearing aid clinics to generate leads and schedule appointments.",
    year: "2023",
    skills: ["Python", "UI/UX"],
    href: "/projects/crm",
  },
  {
    code: "PB-005",
    section: "builds",
    title: "Stock Scanner",
    description:
      "Unified tracking platform for equities.",
    year: "2022",
    skills: ["Python", "UI/UX"],
    href: "/projects/stockscan",
  },
  {
    code: "PB-006",
    section: "builds",
    title: "Text Analyzer",
    description:
      "Intro to Python project to scrape word counts in text messages.",
    year: "2019",
    skills: ["Python"],
  },
  {
    code: "M-001",
    section: "misc",
    title: "Dice Poker Board",
    description:
      "A 4-player board game that turns poker into a game of dice.",
    year: "2026",
    skills: ["Autodesk Inventor", "Laser cutting", "DFM / DFA"],
    href: "/projects/dice-poker",
  },
  {
    code: "M-002",
    section: "misc",
    title: "Smart Crib Prototype",
    description:
      "A closed-loop smart crib platform, with motors, fans, and a camera.",
    year: "2024",
    skills: ["ESP32", "Sensor integration", "Circuit design"],
  },
];
