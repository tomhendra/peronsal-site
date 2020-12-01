# A Fresh Start with Next.JS + Stitches + Forestry.io || Tina

**Frontend**: Moving away from Gatsby & Emotion, because Next.js & Theme UI are more evolved tools.
**CMS**: Moving away from Sanity.io to Forestry because Sanity was overkill for this project. The monorepo / API route requires more dev & maintenance, is less lightweight & less dev-friendly than Git / markdown. Plus Tina looks like fun to play with! 🙂

**References**:

- MDNEXT starter from [Domitrius Clark](https://github.com/domitriusclark/mdnext).
- Next JS blog starter with TS from [Vercel](https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript).
- TypeScript, ESLint and Prettier config from [Paulin Trognon](https://paulintrognon.fr/blog/typescript-prettier-eslint-next-js).
- Jest & Testing Library config from [Frédérick Morin](https://github.com/freddydumont/theme-ui-next-boilerplate).

## Done

- Created new branch `legacy` as a backup of `main`.
- Created new branch `next`.
- Deleted old Vercel deployments from GitHub repo.
- Deleted old Vercel project and created a fresh one.
- Copied blog posts from Sanity to markdown.
- Config prettier, eslint, husky & lint-staged.
- Write npm scripts.
- Get Theme UI working with `next-mdx-remote`.
- Get Theme UI working with `next-mdx-remote` + React 17.0.1.

# TODO Dev

1. Read the Next.js & Theme UI docs thoroughly!
2. Understand data flow.
3. Write proper types.
4. Refactor `api.ts` (Ramda utils).
5. Config Jest & Testing Library ref. [Frédérick Morin](https://github.com/freddydumont/theme-ui-next-boilerplate).
6. New **simple** design.
7. TDD components with Theme UI.
8. Animations with Framer Motion.
9. Save as a starter template in GitHub boilerplates.
10. Dev further... projects, pages etc.

## TODO Pre-Production

1. Push `next` branch to GitHub (trigger Preview deployment).
2. Delete legacy directory.
3. Change Vercel Build & Development Settings from Other to Next.js.
4. Remove unused Sanity env variables in Vercel dashboard.
5. Merge next branch into main (trigger Production deployment).

## TODO Post-Production

1. Delete Sanity project.
2. Look into Forestry / Tina.

## Notes

- Theme UI doesn't support automatic runtime in React 17. See:
  - [Issue #1160](https://github.com/system-ui/theme-ui/issues/1160#issuecomment-715530924).
  - [Issue #1239](https://github.com/system-ui/theme-ui/issues/1239).
