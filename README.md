<div align=center>
<img alt="Tom Hendra Logo" src="https://res.cloudinary.com/tomhendra/image/upload/v1567091669/tomhendra-logo/tomhendra-logo-round-1024.png" width="100" />
<h1>Portfolio</h1>
<p>A portfolio website and blog.</p>
</div>

## Features

My portfolio [tomhendra.dev](https://tomhendra.dev) is a Progressive Web App which uses a CMS for writing blog posts and showcasing projects.

- **Frontend:** Gatsby, TypeScript, Emotion.
- **CMS:** Sanity studio.
- **Repo:** Lerna, Yarn workspaces.
- **Deployment:** Vercel.
- **Analytics:** Google analytics.

## Installation

Clone the repo and run setup.

```sh
git clone git@github.com:tomhendra/portfolio
cd portfolio
yarn setup
```

## Setup

Create a new project for Sanity studio.

```sh
# Install command line tools globally
~/$ npm install @sanity/cli -g

# Navigate to studio
~/$ cd studio

# Create a new Sanity project
~/studio$ sanity init
```

Head to [https://manage.sanity.io](https://manage.sanity.io) and retrieve credentials.

TODO: ---> Sanity **CORS Origins**
TODO: ---> Sanity **Tokens**
TODO: ---> Sanity **Webhooks**

Use vercel cli to upload environment variables as indicated in vercel.json.

create a .env file in `web/` and add Sanity & Google analytics credentials.

SANITY_PROJECT_ID=**insert credential here**
SANITY_DATASET=**insert credential here**
SANITY_AUTH_TOKEN=**insert credential here**
GOOGLE_ANALYTICS_TRACKING_ID=**insert credential here**

## Development

Start both dev server for Gatsby & sanity studio.

```sh
yarn start
```

- Gatsby is running at [http://localhost:8000](http://localhost:8000)
- Sanity studio is running at [http://localhost:3333/studio](http://localhost:3333/studio)
- GraphQL explorer is running at [http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql)

## Deployment

Push to gitHub then head over to [vercel.com](https://vercel.com) and follow their instructions for setting up a project from GitHub.

Assign a domain name to the project.

Each new push to GitHub will trigger a new build with both the front end and CMS deployed to Vercel, so sanity studio can be accessed at `http://domain.name/studio`.

TODO: ---> Sanity **Custom Studio URL**

## Creating content

TODO: ---> **Writing a blog post**
TODO: ---> **Creating projects**
