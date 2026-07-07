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
  /** Small context label above the title (e.g. who it was built for). */
  kicker?: string;
  /** Optional status pill, e.g. 'In development'. */
  status?: string;
  /** Icon shown in the card banner. */
  icon?: 'mobile' | 'layout' | 'cloud' | 'code';
  /** Banner hue (0-360) — gives each card its own color identity. */
  hue?: number;
  /** Screenshot in src/assets/projects/<image>.(png|jpg|webp) — shown instead of the icon. */
  image?: string;
};

export const projects: Project[] = [
  {
    title: 'DRIVN Health',
    description:
      'The athlete training app I’m building for DRIVN, a powerlifting coaching company. Daily check-ins, activity and nutrition tracking, bodyweight trends, and the programming athletes follow from their coach. Designed and built end to end, currently in development and heading for release on the App Store and Google Play.',
    tags: ['React Native', 'Expo', 'TypeScript', 'iOS', 'Android'],
    // demo: 'https://apps.apple.com/...',   // ← add the store link once it's published
    featured: true,
    kicker: 'Freelance · DRIVN',
    status: 'In development',
    icon: 'mobile',
    hue: 24,
    image: 'drivn-health',
  },
  {
    title: 'DRIVN Coach Dashboard',
    description:
      'The coach-side web app for DRIVN. Coaches manage their athletes, review training and check-in data, adjust programming, and track progress in one place, as the companion to the DRIVN Health athlete app.',
    tags: ['React', 'TypeScript', 'REST APIs'],
    // demo: 'https://...',
    kicker: 'Freelance · DRIVN',
    status: 'In development',
    icon: 'layout',
    hue: 42,
    image: 'drivn-dashboard',
  },
  {
    title: 'Enterprise Integrations',
    description:
      'As a Microsoft Integration Consultant at delaware Benelux, I design and deliver event-driven integrations on the Azure stack. Logic Apps, Service Bus, and API Management connect business-critical systems reliably and at scale.',
    tags: ['Azure', 'Logic Apps', 'Service Bus', 'API Management', 'C# / .NET'],
    kicker: 'delaware Benelux',
    icon: 'cloud',
    hue: 8,
  },
];
