# Portfolio

Personal developer portfolio built with [Astro](https://astro.build).

## 🚀 Getting started

```sh
npm install       # install dependencies
npm run dev       # start local dev server at http://localhost:4321
npm run build     # build the production site to ./dist
npm run preview   # preview the production build locally
```

## 🧭 Where to edit

| What                        | Where                                  |
| --------------------------- | -------------------------------------- |
| Your name, bio, links       | `src/data/site.ts`                     |
| Projects                    | `src/data/projects.ts`                 |
| Skills                      | `src/data/skills.ts`                   |
| Page sections               | `src/components/*.astro`               |
| Global styles & theme       | `src/styles/global.css`                |
| Deployed URL (for SEO)      | `site` in `astro.config.mjs`           |

## 📦 Structure

```
src/
├── components/   # Header, Hero, About, Skills, Projects, Contact, Footer
├── data/         # site config, projects, skills (edit these)
├── layouts/      # base HTML layout + <head> meta
├── pages/        # index.astro (the single page)
└── styles/       # global.css (design tokens + base styles)
```

## 🌐 Deploy

The site is fully static. Any static host works (GitHub Pages, Netlify, Vercel, Cloudflare Pages).
Update the `site` field in `astro.config.mjs` to your final URL before deploying.
