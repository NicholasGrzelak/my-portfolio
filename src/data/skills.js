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
//
// Naming: sentence case, except proper nouns (Autodesk Inventor, PyTorch)
// and acronyms (FEA, PCB, GD&T).

export const skillGroups = [
  {
    label: "CAD",
    skills: ["Fusion 360", "Autodesk Inventor", "Altium Designer"],
  },
  {
    label: "Fabrication",
    skills: [
      "3D printing (FDM)",
      "3D printing (SLA)",
      "Milling",
      "Lathe",
      "Laser cutting",
    ],
  },
  {
    label: "Electronics",
    skills: [
      "Arduino",
      "ESP32",
      "Circuit design",
      "PCB design",
      "Sensor integration",
    ],
  },
  {
    label: "Analysis & testing",
    skills: ["DC motor control", "FEA", "Instron testing"],
  },
  {
    label: "Coding",
    skills: ["Python", "MATLAB", "C++", "G-code"],
  },
  {
    label: "Machine learning",
    skills: ["TensorFlow", "PyTorch", "Machine vision", "Data augmentation"],
  },
  {
    label: "Design methods",
    skills: [
      "Motion system design",
      "Robotic design",
      "Parametric modeling",
      "GD&T",
      "Mechanism design",
      "DFM / DFA",
      "UI/UX",
    ],
  },
];
