// ─────────────────────────────────────────────────────────────
//  Edit this file to make the site yours.
// ─────────────────────────────────────────────────────────────

export const site = {
  /** Your name — shown in the header and hero. */
  name: 'Tibo Vanbrabandt',
  /** Short role/title shown under your name. */
  role: 'Microsoft Integration Consultant & App Developer',
  /** One-line tagline for the hero + <meta description>. */
  tagline:
    'Integration consultant at delaware Benelux and independent software developer. I build end-to-end software for niche sports, like the DRIVN powerlifting platform.',
  /** Longer intro used in the About section (supports multiple paragraphs). */
  about: [
    'For the past three years I have worked as a Microsoft Integration Consultant at delaware Benelux, where I design and deliver reliable integrations on the Azure stack that connect the systems businesses depend on every day.',
    'Alongside my consultancy work, I build custom software for clients in niche sports. For DRIVN, a powerlifting coaching company, I’m building the full platform end to end: the DRIVN Health app athletes train with and the dashboard their coaches use to manage programming and progress, from first concept toward launch on the App Store and Google Play. As a powerlifter myself, it is exactly the kind of software I want to exist.',
    'I hold a Bachelor’s degree in Multimedia & Creative Technologies (MCT) from Howest University of Applied Sciences. My toolkit combines React, React Native, and TypeScript on the product side with the Azure integration stack on the enterprise side.',
    'AI is part of my daily workflow. Tools like Claude Code and GitHub Copilot help me ship faster without losing the engineering rigour that production software demands.',
    'Away from the keyboard you’ll usually find me under a barbell, training and competing in powerlifting.',
  ],
  /** Hobbies / interests — shown in the About sidebar. */
  interests: ['Powerlifting', 'Strength training', 'Building side projects'],
  /** Education — shown in the About sidebar. */
  education: {
    degree: 'Bachelor MCT',
    field: 'Multimedia & Creative Technologies',
    school: 'Howest University of Applied Sciences',
  },
  /** Contact email — used for the Contact section + mailto link. */
  email: 'hello@tibovanbrabandt.com',
  /** Where you're based (optional — set to '' to hide). */
  location: 'Belgium',
  /** Birth date (ISO) — age is derived from this at build time. */
  birthday: '2002-07-08',
  /** Social / professional links. Remove any you don't want to show. */
  socials: [
    { label: 'GitHub', href: 'https://github.com/tibovb', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tibo-vanbrabandt-665228277/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:hello@tibovanbrabandt.com', icon: 'mail' },
  ],
} as const;

export type Social = (typeof site.socials)[number];
