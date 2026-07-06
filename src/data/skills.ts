// ─────────────────────────────────────────────────────────────
//  Group your skills however you like. Add/remove groups & items.
//  (The Microsoft/Azure list is a reasonable default for an
//   integration consultant — tweak it to match your day-to-day.)
// ─────────────────────────────────────────────────────────────

export type Skill = {
  label: string;
  /** Iconify icon name (e.g. 'logos:react') — omit for skills without a logo. */
  logo?: string;
};

export type SkillGroup = {
  title: string;
  icon: 'mobile' | 'code' | 'cloud' | 'tools' | 'spark';
  /** Card hue (0-360) — gives each category its own color identity. */
  hue: number;
  items: Skill[];
};

export const skills: SkillGroup[] = [
  {
    title: 'Mobile & App Development',
    icon: 'mobile',
    hue: 24,
    items: [
      { label: 'React Native', logo: 'logos:react' },
      { label: 'Expo', logo: 'simple-icons:expo' },
      { label: 'App Store', logo: 'logos:apple-app-store' },
      { label: 'Google Play', logo: 'logos:google-play-icon' },
      { label: 'iOS', logo: 'simple-icons:apple' },
      { label: 'Android', logo: 'logos:android-icon' },
    ],
  },
  {
    title: 'Frontend & Languages',
    icon: 'code',
    hue: 42,
    items: [
      { label: 'React', logo: 'logos:react' },
      { label: 'TypeScript', logo: 'logos:typescript-icon' },
      { label: 'JavaScript', logo: 'logos:javascript' },
      { label: 'Node.js', logo: 'logos:nodejs-icon' },
      { label: 'HTML', logo: 'logos:html-5' },
      { label: 'CSS', logo: 'logos:css-3' },
    ],
  },
  {
    title: 'Microsoft Integration',
    icon: 'cloud',
    hue: 16,
    items: [
      { label: 'Azure Integration Services', logo: 'logos:microsoft-azure' },
      { label: 'Logic Apps', logo: 'logos:microsoft-azure' },
      { label: 'Azure Service Bus', logo: 'logos:microsoft-azure' },
      { label: 'API Management', logo: 'logos:microsoft-azure' },
      { label: 'REST APIs' },
      { label: 'C# / .NET', logo: 'logos:c-sharp' },
    ],
  },
  {
    title: 'DevOps & Databases',
    icon: 'tools',
    hue: 4,
    items: [
      { label: 'Azure DevOps', logo: 'simple-icons:azuredevops' },
      { label: 'CI/CD Pipelines' },
      { label: 'Docker', logo: 'logos:docker-icon' },
      { label: 'Git', logo: 'logos:git-icon' },
      { label: 'SQL Server', logo: 'simple-icons:microsoftsqlserver' },
      { label: 'PostgreSQL', logo: 'logos:postgresql' },
    ],
  },
  {
    title: 'AI-Driven Workflow',
    icon: 'spark',
    hue: 350,
    items: [
      { label: 'Claude Code', logo: 'logos:claude-icon' },
      { label: 'GitHub Copilot', logo: 'simple-icons:githubcopilot' },
      { label: 'OpenAI APIs', logo: 'logos:openai-icon' },
      { label: 'AI-assisted development' },
      { label: 'Prompt engineering' },
    ],
  },
];
