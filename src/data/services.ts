// ─────────────────────────────────────────────────────────────
//  What you offer as a freelancer. Edit freely.
//  (Azure integration work is your day job at delaware, not a
//   freelance service — keep it in Skills, not here.)
// ─────────────────────────────────────────────────────────────

export type Service = {
  icon: 'mobile' | 'layout' | 'code' | 'cloud' | 'tools' | 'spark';
  /** Short mono label above the title. */
  label: string;
  title: string;
  description: string;
  hue: number;
};

export const services: Service[] = [
  {
    icon: 'mobile',
    label: 'One app for it all',
    title: 'Get your club off spreadsheets',
    description:
      'Memberships, schedules, teams, and communication in one app, instead of scattered across Excel, WhatsApp, and paper.',
    hue: 24,
  },
  {
    icon: 'layout',
    label: 'Design that fits',
    title: 'A UI members actually enjoy',
    description:
      'Clubs usually get the interface wrong. I build something clean and quick that people open because they want to, not because they have to.',
    hue: 42,
  },
  {
    icon: 'code',
    label: 'Built around you',
    title: 'Shaped to how your club runs',
    description:
      'No generic template. An app built around your sport, your members, and the way your club actually works day to day.',
    hue: 8,
  },
];
