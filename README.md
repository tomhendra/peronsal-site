
# A Fresh Start with Next.JS + Stitches + Forestry.io || Tina

**Frontend**: Moving away from Gatsby & Emotion, because Next.js & Stitches are more evolved tools.
**CMS**: Moving away from Sanity.io to Forestry because Sanity was overkill for this project. The monorepo / API route requires more dev & maintenance, is less lightweight & less dev-friendly than Git / markdown. Plus Tina looks like fun to play with! 🙂

Starters used for kicking things off:

- Next JS blog starter with TS from [Vercel](https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript).
- Next JS blog starter with Stitches from [Vercel](https://github.com/vercel/next.js/tree/canary/examples/with-stitches).
- Next JS blog starter from Vercel adapted by [Forestry](https://github.com/forestryio/next-blog-forestry).

The following examples are being used on recommendation by the Stitches docs: "to find inspiration, ideas and design patterns on how to use Stitches in a real-world application".

- Design System from [Modulz](https://github.com/modulz/design-system/).
- Stitches site from [Modulz](https://github.com/modulz/stitches-site).

## Done

- Created new branch `legacy` as a backup of `main`.
- Created new branch `next`.
- Deleted old Vercel deployments from GitHub repo.
- Deleted old Vercel project and created a fresh one.
- Copied blog posts from Sanity to markdown.

# TODO Dev

1. Read the Next.js & Stitches docs!
2. Replace Tailwind utility classnames with Stitches components.
3. Run dev server to test functionality!
4. Darkmode (priority because of FOUC issue with Stitches).
5. Test Framer Motion with Stitches.
6. Config prettier, eslint, husky & lint-staged.
7. Config Jest & Testing Library.
8. Write npm scripts. 
9. New **simple** design.
10. Styles with Stitches.
11. Animations with Framer Motion. 
12. Save as a starter template in GitHub boilerplates.
13. Dev further... projects, pages etc.

## TODO Production

1. Push `next` branch to GitHub (trigger Preview deployment).
2. Delete legacy directory.
3. Change Vercel Build & Development Settings from Other to Next.js.
4. Remove unused Sanity env variables in Vercel dashboard.
5. Merge next branch into main (trigger Production deployment).
6. Delete Sanity project.
7. Look into Forestry / Tina (with MDX?).