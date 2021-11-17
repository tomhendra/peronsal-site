<div align=center>
<img alt="Tom Hendra Logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Portfolio</h1>
<p>A place for projects and to make contact</p>
</div>

## Tech stack

- **App:** Remix, CSS.
- **Deployment:** Cloudflare Workers
- **Analytics:** Fathom (?0)

# Welcome to Remix!

- [Remix Docs](https://docs.remix.run)
- [Customer Dashboard](https://remix.run/dashboard)

## Development

You will be running two processes during development when using Vercel as your server.

- Your Miniflare server in one (miniflare is a local environment for Cloudflare Workers)
- The Remix development server in another

```sh
# in one tab (starts remix dev server)
$ npm run dev

# in another (starts miniflare server)
$ npm start
```

Open up [http://127.0.0.1:8787](http://127.0.0.1:8787) and you should be ready to go!

If you'd rather run everything in a single tab, you can look at [concurrently](https://npm.im/concurrently) or similar tools to run both processes in one tab.

## Deployment

Use wrangler to build and deploy your application to Cloudflare Workers:

```sh
npm run deploy
```
