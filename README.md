# A Fresh Start with Next.JS + Theme UI + MDX.

**Frontend**: Moving away from Gatsby & Emotion, because Next.js & Theme UI are more evolved tools.
**CMS**: Moving away from Sanity.io because it was overkill for this project. The monorepo / API route requires more dev & maintenance, is less lightweight & less dev-friendly than MDX. Plus Tina looks like fun to play with! 🚂

**References**:

- MDNEXT blog starter from [Domitrius Clark](https://github.com/domitriusclark/mdnext).
- TypeScript, ESLint and Prettier config from [Paulin Trognon](https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js).
- Jest & Testing Library config from [Frédérick Morin](https://github.com/freddydumont/theme-ui-next-boilerplate).

**TO KEEP AS LIGHTWEIGHT AS POSSIBLE FOR QUICK REFACTORS, WHILST LEARNING REACT PROPERLY & PRACTISING KENT C DODD'S TEACHINGS ON THIS PROJECT!**

## Done

- Created new branch `legacy` as a backup of `main`.
- Created new branch `next` to move forward with NextJS.
- Deleted old Vercel deployments from GitHub repo.
- Deleted old Vercel project and created a fresh one.
- Copied blog posts from Sanity to MDX files.
- Tested config for prettier, eslint, husky & lint-staged for TS environment.
- Tested POC: Theme UI + Framer Motion + next-mdx-remote + React 17.0.1.
- Hacked apart more advanced MDNEXT Reflex.js example to understand data + ideas & inspiration.
- Installed fresh copy of MDNEXT blog starter.
- Configured environment with TypeScript, ESLine, Prettier, Husky & Lint-staged.
- Rough refactor to TypeScript i.e. types & interfaces not done, just fixed enough errors to get things operational.
- Rough refactor to Theme UI. Site operational without dev server error.

## TODO Dev

1. Rewrite logic for tags / tagList.
2. Read the Next.js docs thoroughly!
3. Read the Theme UI docs thoroughly!
4. Read the Ramda docs thoroughly!
5. Define TypeScript interfaces for data & fix errors.
6. Define TypeScript interfaces & types for components & fix errors.
7. Config Jest & Testing Library.
8. Refactor utils using Ramda & FP principles.
9. New **simple** design.
10. Animations with Framer Motion.
11. Dev further... projects, pages, refactor etc.
12. Think about reusability and refactor accordingly.
13. Save as a starter template in GitHub boilerplates.

## TODO Pre-Production

1. Push `next` branch to GitHub (trigger Preview deployment).
2. Delete legacy directory.
3. Change Vercel Build & Development Settings from Other to Next.js.
4. Remove unused Sanity env variables in Vercel dashboard.
5. Merge next branch into main (trigger Production deployment).

## TODO Post-Production

1. Delete Sanity project.
2. Look into Forestry / Tina / GraphCMS.

## Issues

**Theme UI doesn't support automatic runtime in React 17 yet**

- [Issue #1160](https://github.com/system-ui/theme-ui/issues/1160#issuecomment-715530924).
- [Issue #1239](https://github.com/system-ui/theme-ui/issues/1239).

Options:

1. Stick with React v16.13.1. & wait for Theme UI v0.5.0.
2. Upgrade to React v17.0.1 & use Theme UI 0.5.0-alpha.1. ☑️

Notes:

sx prop usage still throws TS error with 0.5.0-alpha.1:
`Property 'sx' does not exist on type 'IntrinsicAttributes &...`
