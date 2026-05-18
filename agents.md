# Agent Notes

## Project Overview

This is LiLi Koerber's portfolio landing page, built with Vue 3, Vite, and Vuetify.

The current landing page implementation lives mostly in:

- `src/App.vue`: page structure, nav data, project data, social links, hero image binding.
- `src/main.css`: global styles, responsive layout, project tile visuals, footer, and mobile nav.
- `public/hero-lili.png`: generated bitmap hero artwork used by the hero section.
- `index.html`: portfolio title and meta description.
- `vite.config.ts`: Vite config with `base: '/portfolio/'` for GitHub Pages-style hosting.

## Local Commands

- `npm.cmd run dev -- --host 127.0.0.1`: start the local Vite dev server on Windows.
- `npm.cmd run build`: type-check and build production assets.
- `npm.cmd run preview`: preview a production build.
- `npm.cmd run deploy`: build and publish `dist` to the `gh-pages` branch.

On this Windows machine, use `npm.cmd` instead of `npm` in PowerShell. Running `npm` directly hit the system execution policy because `npm.ps1` scripts are disabled.

## Local Dev URL

Because `vite.config.ts` sets `base: '/portfolio/'`, the dev URL is:

```text
http://127.0.0.1:5173/portfolio/
```

The root URL without `/portfolio/` may not show the app correctly.

## Deployment

Deployment is configured in `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist -b gh-pages"
```

The deploy branch is `gh-pages`.

Run:

```bash
npm run deploy
```

That command builds first, then uses the `gh-pages` package to publish the `dist` folder.

## Dependencies Added

- `@lucide/vue`: used for UI/social/action icons.
- `gh-pages`: used to deploy the built app to the `gh-pages` branch.

Note: I initially tried `lucide-vue-next`, but npm warned it is deprecated in favor of `@lucide/vue`, so the current package is `@lucide/vue`.

## Design/Implementation Notes

- The page is a custom single-page landing layout rather than the original starter screen.
- The hero uses `import.meta.env.BASE_URL` to build the image URL:

```js
const heroImage = `${import.meta.env.BASE_URL}hero-lili.png`;
```

This matters because the app is served from `/portfolio/` on GitHub Pages.

- The hero artwork was generated with the built-in image generation tool and copied into `public/hero-lili.png`.
- The portfolio grid currently uses styled tiles and a CSS mockup for SMARTCharts rather than real case-study screenshots.
- Footer social URLs are placeholders except for the email shape:
  - `mailto:hello@liliKoerber.com`
  - `https://www.linkedin.com`
  - `https://www.instagram.com`
  - `https://www.facebook.com`
- Current nav anchors are in-page placeholders. `Resume` points to `#resume`, but no resume section/file exists yet.
- The page has a mobile menu controlled by `mobileNavOpen` in `src/App.vue`.

## Verification Already Done

`npm.cmd run build` passes.

The Vite server was started and verified at:

```text
http://127.0.0.1:5173/portfolio/
```

with an HTTP `200` response.

## Known Caveats

- `npm install` reported 8 audit vulnerabilities in the dependency tree. I did not run `npm audit fix` because it may change package versions more broadly.
- `git status` failed because Git detected dubious ownership for `C:/Work/lili/portfolio`. Git suggested:

```bash
git config --global --add safe.directory C:/Work/lili/portfolio
```

Do not run that automatically unless the user wants it, because it changes global Git config.

- `deploy.md` appeared as an open editor tab, but no `deploy.md` file existed in the workspace when checked.
- `dist`, `tsconfig.app.tsbuildinfo`, `tsconfig.node.tsbuildinfo`, and `vite-dev.log` exist from local build/dev runs.
