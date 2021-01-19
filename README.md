# A Fresh Start with Next.JS + Theme UI + MDX.

**Frontend**: Moving away from Gatsby & Emotion, because Next.js & Theme UI are
more evolved tools. **CMS**: Moving away from Sanity.io because it was overkill
for this project. The monorepo / API route requires more dev & maintenance, is
less lightweight & less dev-friendly than MDX. Plus Tina looks like fun to play
with! 🚂

**References**:

- [MDNEXT blog starter](https://github.com/domitriusclark/mdnext) from Domitrius Clark.
- [Testing JavaScript](https://testingjavascript.com) by Kent C. Dodds.
- [Epic React](https://epicreact.dev) by Kent C. Dodds.

**TO KEEP AS LIGHTWEIGHT AS POSSIBLE FOR QUICK REFACTORS, WHILST LEARNING REACT PROPERLY & PRACTISING KENT C DODD'S TEACHINGS ON THIS PROJECT!**

## Done

- DevOps: Created new branch `legacy` as a backup of `main`.
- DevOps: Created new branch `next` to move forward with NextJS.
- DevOps: Deleted old Vercel deployments from GitHub repo.
- DevOps: Deleted old Vercel project and created a fresh one.
- DevOps: Copied blog posts from Sanity to MDX files.
- POC: Config for prettier, eslint, husky & lint-staged for TS environment.
- POC: Theme UI + Framer Motion + next-mdx-remote + React 17.0.1.
- Research: Hacked apart further developed MDNEXT Reflex.js starter to understand data + ideas & inspiration.
- Init: Installed fresh copy of MDNEXT blog starter.
- Config: TypeScript, ESLint, Prettier, Husky & Lint-staged.
- Refactor: Dirty TypeScript: Types & interfaces not defined with lots of errors to fix.
- Refactor: Dirty Theme UI: Chakra UI removed & dev server runs without errors.
- Config: Jest & Testing Library.

## TODO: Dev

1. Convert to Tailwind CSS
2. Config: Cypress.
3. Research: Read the Next.js docs thoroughly!
4. Testing: Define TS models for data & fix errors.
5. Testing: Define TS models for components & fix errors.
6. Testing: Write tests!
7. Feature: About page.
8. Feature: Projects.
9. Refactor: SearchBox.
10. Refactor: TagCloud.
11. Research: Read the Ramda docs thoroughly!
12. Refactor: All - using Ramda & FP principles.
13. Feature: CodeBlock with Prism + Copy to clipboard button.
14. Research: Reread Refactoring UI.
15. Research: Read the Tailwind CSS docs thoroughly!
16. Design: New **simple** design in Figma.
17. Feature: Implement new design & mobile-first layout.
18. Feature: Interactions with Framer Motion.
19. Research: Think about reusability and refactor accordingly with config interface.
20. DevOps: Save as a starter template in GitHub starter templates.

## TODO: Pre-Production

1. DevOps: Push `next` branch to GitHub (trigger Preview deployment).
2. DevOps: Delete legacy directory.
3. DevOps: Change Vercel Build & Development Settings from Other to Next.js.
4. DevOps: Remove unused Sanity env variables in Vercel dashboard.
5. DevOps: Merge next branch into main (trigger Production deployment).

## TODO: Post-Production

1. DevOps: Delete Sanity project.
2. Research: Look into Forestry / Tina / GraphCMS.

## Issues

### Theme UI doesn't support automatic runtime in React 17 yet:

- [Issue #1160](https://github.com/system-ui/theme-ui/issues/1160#issuecomment-715530924).
- [Issue #1239](https://github.com/system-ui/theme-ui/issues/1239).

Options:

1. Stick with React v16.13.1. & wait for Theme UI v0.5.0.
2. Upgrade to React v17.0.1 & use Theme UI 0.5.0-alpha.x.
3. Use Tailwind CSS instead! ☑️
