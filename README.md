# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

You will be utilizing Wrangler for local development to emulate the Cloudflare runtime. This is already wired up in your package.json as the `dev` script:

```sh
# start the remix dev server and wrangler
npm run dev
```

Open up [http://127.0.0.1:8788](http://127.0.0.1:8788) and you should be ready to go!

## Deployment

Cloudflare Pages are currently only deployable through their Git provider integrations.

If you don't already have an account, then [create a Cloudflare account here](https://dash.cloudflare.com/sign-up/pages) and after verifying your email address with Cloudflare, go to your dashboard and follow the [Cloudflare Pages deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything).

Configure the "Build command" should be set to `npm run build`, and the "Build output directory" should be set to `public`.

## Commit Types

Commitlint is unnecessary for this repo, but meaningful commit messages are necessary.

- build
- chore
- ci
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

## TODO for Home Page

- Reduce padding on form for mobile
- Refactor Button component to export `Button` / `Link` / `A` components separately & use proper extended types e.g. `extends React.ButtonHTMLAttributes<HTMLButtonElement>` etc. (there is a bug where using the type attribute on Button causes a type error) - See [this blog post](https://fettblog.eu/typescript-react-extending-jsx-elements/) for reference.
- Remove padding / border-radius (and more?) in Button component `link` styles
- Replace Header, Mobile and Footer navigation with Link from Button component
- Handle form submissions - See [Remix docs](https://remix.run/docs/en/v1/guides/data-writes) - & investigate whether there is anything specific to Cloudflare Workers to be concerned about.
