
# A Fresh Start with Next.JS + Stitches + Sanity.io.

Moving away from Gatsby & Emotion, because Next.js & Stitches are evolved tools.

```bash
# Run the frontend
yarn run dev

# Run the Studio
yarn run start:sanity
```

The blog will be running at `http://localhost:3000`, the Studio will run at `http://localhost:3333`.

# Done So Far

- The starter is Sanity official: [Next.js blog with comment section](https://github.com/sanity-io/sanity-template-nextjs-blog-comments/tree/1cc803b66b55921c109bc16fda7d150a9e92323f).
- Replace Tailwind CSS in favour of Stitches using the official Vercel example: [Stitches Example](https://github.com/vercel/next.js/tree/canary/examples/with-stitches).

# Done

- Populated all required credentials on Vercel & Sanity.io. 
- Studio initialized and new `development` dataset created.
- Populated dataset with two blog posts copied from live site. 
- Removed Tailwind packages, added Stitches & Typescript packages / init for Next.js. 
- Changed all file extensions to .tsx. 

# TODO

1. Sort out app structure once the Next.js docs have been read! 
2. Get functional **ASAP!** - worry about prettifying later:
  - Get rid of Tailwind utility classnames.
  - Basic layout with Stitches.
  - Fetch data from Sanity & blog post routes.
3. Config prettier & eslint.
4. Config husky & lint-staged.
5. Config Jest & Testing Library.
6. Write useful npm scripts. 
7. Work out Sanity commenting system with [this post](https://css-tricks.com/how-to-create-a-commenting-engine-with-next-js-and-sanity/) and Sanity docs.
8. New **simple** design.
9.  Test Framer Motion with Stitches.
10. Style properly with Stitches. 
11. Save a copy in GitHub boilerplates.
12. Add pages & dev further...
13. Delete old & create new production dataset as a copy of development **before** merging next to main.
14. Delete Vercel project and start afresh (Add size env variables during deployment).
15. Add custom domain in Vercel dashboard.