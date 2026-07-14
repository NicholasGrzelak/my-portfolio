// src/data/profile.js
// One place for your identity — used by the header, hero, footer, and titles.

export const profile = {
  name: "Nicholas Surname",
  role: "Mechanical Design Engineer",

  // Social / academic links, shown in the hero.
  links: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile" },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=YOUR_ID",
    },
  ],

  // Professional associations, societies, and club memberships.
  // Shown as a compact row near the bottom of the homepage.
  // Keep design-team WORK as projects in projects.js — list the
  // membership itself here.
  affiliations: [
    "ASME — Member",
    "PEO — EIT",
    "FSAE Team — Suspension subteam, 2021–2023",
  ],

  // For the "approve" click counter. Sign up free at goatcounter.com,
  // pick a code (e.g. "nicholas-portfolio"), and put it here.
  // Leave empty ("") and the counter shows a dash until configured.
  goatCounterCode: "",
};
