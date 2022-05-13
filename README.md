## Commit Types

Commitlint is unnecessary for this repo since I am the only dev, but it is good practice.

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

## TODO Now

- refactor: Replace ~~Header~~, ~~MobileMenu~~, TabNav(?) and Footer links (and any others) with custom Link component
- feat: Handle form submissions - [Remix docs](https://remix.run/docs/en/v1/guides/data-writes) - & investigate whether there is anything specific to Cloudflare Workers to be concerned about.

## TODO Later

- refactor: Accessibility sweep
- feat: Investigate [Cloudflare R2](https://blog.cloudflare.com/r2-open-beta/) + [Imgix](https://imgix.com/) for images because...
  - [this comment](https://github.com/remix-run/remix/discussions/2905#discussioncomment-2686431) makes sense
  - I don't like Cloudinary DX very much
  - I prefer to store everything on Cloudflare's platform and Imgix doesn't host
  - Testing Imgix examples seems to be faster (check this again)
