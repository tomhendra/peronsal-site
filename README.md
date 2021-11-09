<div align=center>
<img alt="Tom Hendra Logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Portfolio</h1>
<p>A portfolio website with blog.</p>
</div>

Personal site 3.0 is built with [Astro](https://docs.astro.build/getting-started/).

Version 1.0 used Gatsby and Sanity CMS in, and 2.0 used Next.js + MDX based on
the trend of 2021, but 2.0 remains unfinished since I feel that a full stack
framework like Next.js is overkill for a basic website. Plus I didn't like being
pushed towards Vercel where Next.js deployments shine... I remember when Vercel
reduced the number of serverless functions included with their free plan, which
pushed users to a pro plan if existing deployments exceeded the limit. This makes
me very wary of Vercel.

Many devs love an over-engineered site, and that's fine, I used to too, it is
fun to play around & build stuff. But I am now of the opinion that we should use
the most appropriate tools available to fulfil our requirements in the most
efficient way.

Astro feels like the right choice for my personal site at present.

- I like that I can build components in React and reuse ones I have built for
  other projects.
- I can use
  [partial hydration](https://docs.astro.build/core-concepts/component-hydration/)
  for interactive components.
- Out-of-the-box Markdown support.

But static site builders have historically caused two negative experiences in my
opinion:

1. Waiting for data - watching spinners.
2. Waiting for the build step - watching logs.

However there will be few user interactions on my site that require data
fetching, and since Astro uses
[Vite](https://astro.build/blog/astro-021-preview/#hello-vite) and
[Vite uses ESBuild](https://vitejs.dev/guide/features.html#npm-dependency-resolving-and-pre-bundling),
the build step time should be significantly reduced for deployment.

If I need to fetch more data in the future I will probably use
[Remix](https://remix-run.web.app) but for now, Astro seems like a solid choice.

## Tech stack

- **App:** Astro.
- **Content:** Markdown editor / Forestry.io(?)
- **Deployment:** Cloudflare Pages.
- **Analytics:** Fathom.

# Astro Starter Kit: Blog

```
npm init astro -- --template blog
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/snowpackjs/astro/tree/latest/examples/blog)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

Features:

- ✅ SEO-friendly setup with canonical URLs and OpenGraph data
- ✅ Full Markdown support
- ✅ RSS 2.0 generation
- ✅ Sitemap.xml generation

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Tour.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                      |
| :-------------- | :------------------------------------------ |
| `npm install`   | Installs dependencies                       |
| `npm run dev`   | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./dist/`     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://github.com/snowpackjs/astro) or jump into our [Discord server](https://astro.build/chat).
