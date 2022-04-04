---
title: 'Redirects with AWS Amplify'
subtitle: 'How to handle redirects within AWS Amplify.'
date: '2021-05-21'
updated: '2022-04-03'
coverImage: 'compass'
alt: 'a compass being held'
caption: 'Photo by Valentin Antonucci'
tags:
  - 'React'
  - 'AWS'
description: "The common use of client-side routers to handle redirects is not a good idea,
because browsers and search engines don't receive the status code of 301 / 302
for a redirect that would usually be sent by a server."
---

## Introduction

Using client-side routers to handle redirects can have a negative effect on SEO
and alter browser behaviour, so it is a much better idea to ensure our redirects
happen on the server or CDN and not the client.

In a React (CRA) AWS Amplify app we need to apply our configurations in the
three places that a server is used:

1. The Webpack development server
2. The local server used to test production builds
3. AWS Amplify

## The Development Server

CRA allows us to modify the Express server that is used foe the dev server by
defining our own configuration in a `.src/setupProxy.js` file.

We can pass an Express app to the exported function and define a redirect that
says anytime the browser requests the home route `/` the dev server will
redirect it to the dashboard route.

```jsx
function proxy(app) {
  app.get(/^\/$/, (req, res) => res.redirect('/dashboard'));
}

module.exports = proxy;
```

## The Local Server

When we want to test our production build locally before submitting to QA, we
use a local server. A common recommendation is the `serve` module from Vercel.
To configure redirects we create a `serve.json` file in the `public` directory.

```json
{
  "redirects": [
    {
      "source": "/",
      "destination": "/dashboard",
      "type": 302
    }
  ]
}
```

### AWS Amplify

Head to the Amplify Console and set the redirects using the UI.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d16d6f4f-9416-4e7d-a127-26d40b59aa0c/Screen_Shot_2021-05-07_at_17.20.33.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d16d6f4f-9416-4e7d-a127-26d40b59aa0c/Screen_Shot_2021-05-07_at_17.20.33.png)

### Summary

Although it is not very typical to redirect all users from the root route to
another route, it is typical to redirect an old route to a new one, or a short
version of the URL to the full version, and this should definitely happen on the
server side so that the status codes can be set properly.

Thanks to Kent C. Dodds for this recommendation from his Epic React course.

## Extra: Fix the Access Denied Error with AWS Amplify

When a React application is deployed to AWS Amplify with client-side routing
configured, assets are sometimes not loaded properly when the browser is
refreshed which can result in an error like this one.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/04ae6ece-8b9a-4a9c-b5a9-d7d605309ff3/Screen_Shot_2021-05-07_at_17.25.42.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/04ae6ece-8b9a-4a9c-b5a9-d7d605309ff3/Screen_Shot_2021-05-07_at_17.25.42.png)

This is apparently not a problem with Amplify but that is where we apply the
solution. In the Amplify console go to rewrites & redirects and add a new rule.

Source address: `</^((?!\.(css|gif|ico|jpg|js|png|txt|svg|woff|ttf)$).)*$/>`

Target address: `/index.html`

Type: `200 (Rewrite`

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c098e4f1-66f3-4c50-8085-868fa5c1d8fd/Screen_Shot_2021-05-07_at_17.32.33.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c098e4f1-66f3-4c50-8085-868fa5c1d8fd/Screen_Shot_2021-05-07_at_17.32.33.png)

Deploy a test build to AWS Amplify and the issue should be solved.

Thanks to GitHub issues:

[https://github.com/aws-amplify/amplify-js/issues/2498](https://github.com/aws-amplify/amplify-js/issues/2498)

[https://github.com/aws-amplify/amplify-js/issues/2545](https://github.com/aws-amplify/amplify-js/issues/2545)
