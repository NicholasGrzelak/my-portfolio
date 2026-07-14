// src/data/skills.js
// The skills table, organized as one row per group.
//
// - Project references attach automatically: if a project in projects.js
//   lists a skill with EXACTLY the same name (case-sensitive), its code
//   appears next to the skill.
// - A skill listed here with no project using it simply shows plain —
//   that's how you add skills manually.
// - A skill used in a project but not filed in any group lands in an
//   automatic "Other" row, so nothing gets lost.

export const skillGroups = [
  {
    label: "CAD",
    skills: ["Fusion 360", "Inventor", "SolidWorks", "Altium", "nTop"],
  },
  {
    label: "Coding",
    skills: ["Python", "MATLAB", "C++"],
  },
  {
    label: "Analysis & testing",
    skills: ["Ansys FEA", "Topology optimization", "Instron testing"],
  },
  {
    label: "Fabrication",
    skills: ["3D printing (FDM)", "Milling", "Lathe", "TIG welding"],
  },
  {
    label: "Machine learning",
    skills: ["TensorFlow", "PyTorch"],
  },
  {
    label: "Design methods",
    skills: [
      "Flexure design",
      "Fixture design",
      "Motion system design",
      "Parametric modeling",
      "GD&T",
      "DFM / DFA",
    ],
  },
];