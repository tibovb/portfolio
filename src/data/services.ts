// ─────────────────────────────────────────────────────────────
//  What you offer as a freelancer. Edit freely.
//  (Azure integration work is your day job at delaware, not a
//   freelance service — keep it in Skills, not here.)
// ─────────────────────────────────────────────────────────────

export type Service = {
  icon: 'mobile' | 'layout' | 'code' | 'cloud' | 'tools' | 'spark';
  title: string;
  description: string;
  hue: number;
};

export const services: Service[] = [
  {
    icon: 'mobile',
    title: 'Mobile apps, idea to store',
    description:
      'Cross-platform apps in React Native and Expo, taken from first concept to a polished release on the App Store and Google Play.',
    hue: 24,
  },
  {
    icon: 'layout',
    title: 'Web apps & dashboards',
    description:
      'The tools behind your product: admin panels, coach dashboards, and data-driven web apps built in React and TypeScript.',
    hue: 42,
  },
  {
    icon: 'code',
    title: 'Product partner for niche sports',
    description:
      'A technical partner who builds your platform end to end, from idea to launch, and actually understands the sport, the way I do for DRIVN.',
    hue: 8,
  },
];
