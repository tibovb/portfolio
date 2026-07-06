// ─────────────────────────────────────────────────────────────
//  Add / edit your projects here. They render in this order.
//  Fill in real names, links and descriptions when ready.
// ─────────────────────────────────────────────────────────────

export type Project = {
  title: string;
  description: string;
  /** Tech tags shown as chips. */
  tags: string[];
  /** Live demo / store URL (optional). */
  demo?: string;
  /** Source code URL (optional). */
  source?: string;
  /** Set true to highlight it (larger card / accent border). */
  featured?: boolean;
  /** Icon shown in the card banner. */
  icon?: 'mobile' | 'layout' | 'cloud' | 'code';
  /** Banner hue (0-360) — gives each card its own color identity. */
  hue?: number;
};

export const projects: Project[] = [
  {
    title: 'DRIVN Health',
    description:
      'A complete mobile application for the powerlifting community with training management, lift tracking, and competition support. Designed, built, and published independently, from initial concept to release on the App Store and Google Play.',
    tags: ['React Native', 'Expo', 'TypeScript', 'App Store', 'Google Play'],
    // demo: 'https://apps.apple.com/...',   // ← link your App Store / Play Store listing
    featured: true,
    icon: 'mobile',
    hue: 24,
  },
  {
    title: 'DRIVN Coach Dashboard',
    description:
      'The web companion to DRIVN Health: a dashboard where coaches manage their athletes, review training data, adjust programming, and track progress in one place.',
    tags: ['React', 'TypeScript', 'REST APIs'],
    // demo: 'https://...',
    icon: 'layout',
    hue: 42,
  },
  {
    title: 'Enterprise Integration Work',
    description:
      'Event-driven integration solutions on the Microsoft Azure stack. Logic Apps, Service Bus, and API Management connect business-critical systems reliably and at scale.',
    tags: ['Azure', 'Logic Apps', 'Service Bus', 'API Management', 'C# / .NET'],
    icon: 'cloud',
    hue: 8,
  },
];
