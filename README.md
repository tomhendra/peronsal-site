# A Fresh Start with Next.JS + Theme UI + MDX.

**Frontend**: Moving away from Gatsby & Emotion, because Next.js & Theme UI are more evolved tools.
**CMS**: Moving away from Sanity.io because it was overkill for this project. The monorepo / API route requires more dev & maintenance, is less lightweight & less dev-friendly than MDX. Plus Tina looks like fun to play with! 🚂

**References**:

- MDNEXT blog starter from [Domitrius Clark](https://github.com/domitriusclark/mdnext).
- TypeScript, ESLint and Prettier config from [Paulin Trognon](https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js).
- Jest & Testing Library config from [Frédérick Morin](https://github.com/freddydumont/theme-ui-next-boilerplate).

## Done

- Created new branch `legacy` as a backup of `main`.
- Created new branch `next` to move forward with NextJS.
- Deleted old Vercel deployments from GitHub repo.
- Deleted old Vercel project and created a fresh one.
- Copied blog posts from Sanity to MDX files.
- Tested config for prettier, eslint, husky & lint-staged for TS environment.
- Tested POC of Theme UI + Framer Motion + next-mdx-remote + React 17.0.1.
- Hacked apart more advanced MDNEXT Reflex.js example to understand data + ideas & inspiration.

## TODO Dev

1. Read the Next.js docs thoroughly!
2. Config TypeScript environment.
3. Write types & interfaces.
4. Refactor utils using Ramda & FP principles.
5. Config Jest & Testing Library.
6. Consider upgrade to React 17: check Theme UI support [progress](https://github.com/system-ui/theme-ui/issues/1239).
7. Convert MDNEXT Starter Blog from Chakra UI to Theme UI.
8. New **simple** design.
9. Read the Theme UI docs thoroughly!
10. TDD components with Theme UI.
11. Animations with Framer Motion.
12. Save as a starter template in GitHub boilerplates.
13. Dev further... projects, pages etc.

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

1. Stick with React v16.13.1. & Wait for Theme UI v0.5.0. ☑️
1. Upgrade to React v17.0.1 & Use Theme UI 0.5.0-alpha.2.
