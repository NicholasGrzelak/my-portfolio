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
  { id: "masters research", label: "Master's Research" },
  { id: "builds", label: "Personal Builds" },
  { id: "misc", label: "Miscellaneous" },
];

export const projects = [
  {
    code: "R-001",
    section: "masters research",
    title: "Scanning microscope for self driving labs",
    description:
      "Designed, built and characterized a scanning microscope to integrate within a custom Unet cell segmentation model.",
    year: "2026",
    skills: ["Autodesk Inventor", "3D printing (FDM)", "Gcode", "Python", "Machine Vision"],
    href: "/projects/example-project",
  },
  {
    code: "R-002",
    section: "masters research",
    title: "Robotic hot swappable end effectors for self driving labs",
    description:
      "Survied research to unify multiple frameworks creating a suite of swapable end effectors including a gripper and a set of pipettes.",
    year: "2026",
    skills: ["Autodesk Inventor", "Altium Designer", "PCB Design", "3D printing (FDM)", "3D printing (SLA)", "Python", "Mechanism Design"],
    href: "/projects/example-project",
  },
  {
    code: "R-003",
    section: "masters research",
    title: "Modular centrifuge for self driving labs",
    description:
      "Created a modular swinging bucket centrifuge capable of sustaining accelerations up to 1000g.",
    year: "2025",
    skills: ["Autodesk Inventor","DC Motor Control", "Sensor Integration", "3D printing (FDM)", "Lathe", "Python"],
    href: "/projects/example-project",
  },
  {
    code: "R-004",
    section: "masters research",
    title: "Robotic gantry for self driving labs",
    description:
      "5 DOF gantry robot with a work envelope of 400 mm x 600 mm x 300 mm to act as the body of an SDL.",
    year: "2025",
    skills: ["Autodesk Inventor", "Parametric modeling", "3D printing (FDM)", "Milling", "Lathe","Python", "Gcode", "Robotic design"],
    href: "/projects/example-project",
  },
  {
    code: "PB-001",
    section: "builds",
    title: "Catan counter",
    description:
      "Have friends that take long terms in the hit board game Catan? Show them how long they are taking and get cool stats including dice rolls and player wins.",
    year: "2026",
    skills: ["Autodesk Inventor", "3D printing (FDM)", "C++", "Arduino"],
    href: "/projects/example-project",
  },
  {
    code: "PB-002",
    section: "builds",
    title: "Coin Organizer (CAD$)",
    description:
      "Too many coins laying around? Put them in a coin organizer to make grabbing change easy.",
    year: "2024",
    skills: ["SolidWorks", "3D printing (FDM)", "Flexure design"],
  },
  {
    code: "PB-003",
    section: "builds",
    title: "Medical CRM",
    description:
      "Customer relationship management platform for hearing aid clinics to generate leads and schedule appointments.",
    year: "2023",
    skills: ["SolidWorks", "3D printing (FDM)", "Flexure design"],
  },
  {
    code: "PB-004",
    section: "builds",
    title: "Text analyzer",
    description:
      "Too many coins laying around? Put them in a coin organizer to make grabbing change easy.",
    year: "2019",
    skills: ["SolidWorks", "3D printing (FDM)", "Flexure design"],
  },
  {
    code: "M-001",
    section: "misc",
    title: "Dice poker board",
    description:
      "A 4 player board game that turns poker into a board game with dice.",
    year: "2026",
    skills: ["Autodesk Inventor", "Laser Cutting"],
    href: "/projects/example-project",
  },
];