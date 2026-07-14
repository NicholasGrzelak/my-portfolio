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
  { id: "research", label: "Research" },
  { id: "builds", label: "Personal Builds" },
  { id: "misc", label: "Miscellaneous" },
];

export const projects = [
  {
    code: "R-001",
    section: "research",
    title: "Compliant mechanism stiffness study",
    description:
      "Characterizing out-of-plane stiffness in flexure-based linkages, with FEA validated against physical test coupons.",
    year: "2025",
    skills: ["SolidWorks", "Ansys FEA", "Python", "Flexure design"],
    href: "/projects/example-project",
  },
  {
    code: "R-002",
    section: "research",
    title: "Topology-optimized bracket validation",
    description:
      "Comparing print-in-place optimized geometry against a conventionally machined baseline under cyclic load.",
    year: "2024",
    skills: ["nTop", "Topology optimization", "Instron testing"],
  },
  {
    code: "PB-001",
    section: "builds",
    title: "Belt-driven pen plotter",
    description:
      "A CoreXY plotter designed from scratch: custom extrusion frame, printed motion components, and a small G-code sender written in Python.",
    year: "2025",
    skills: ["Fusion 360", "3D printing (FDM)", "Python", "Motion system design"],
    href: "/projects/example-project",
  },
  {
    code: "PB-002",
    section: "builds",
    title: "Compliant gripper",
    description:
      "Single-piece printed gripper using flexure joints instead of pins — no assembly, no fasteners.",
    year: "2024",
    skills: ["SolidWorks", "3D printing (FDM)", "Flexure design"],
  },
  {
    code: "M-001",
    section: "misc",
    title: "Shop fixtures and jigs",
    description:
      "A running collection of workholding fixtures, drill guides, and assembly jigs designed for one-off jobs.",
    year: "Ongoing",
    skills: ["Fixture design", "Milling", "Lathe"],
  },
  {
    code: "M-002",
    section: "misc",
    title: "Parametric enclosure library",
    description:
      "A small set of parametric project-box models with configurable standoffs, vents, and lid styles.",
    year: "2023",
    skills: ["Fusion 360", "Parametric modeling"],
  },
];