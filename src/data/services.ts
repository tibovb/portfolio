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
    label: 'iOS + Android',
    title: 'Apps that earn their spot on the home screen',
    description:
      'React Native and Expo, from first sketch to a release you’re proud to ship. One codebase, both stores, no half work.',
    hue: 24,
  },
  {
    icon: 'layout',
    label: 'React + TypeScript',
    title: 'The dashboard your team lives in',
    description:
      'Admin panels, coach dashboards, and data-heavy web apps that stay fast and clear as they grow.',
    hue: 42,
  },
  {
    icon: 'code',
    label: 'Idea to launch',
    title: 'One dev, the whole product',
    description:
      'No dev team yet? I take it from napkin to launch. And since I train myself, I actually get sport and coaching products.',
    hue: 8,
  },
];
