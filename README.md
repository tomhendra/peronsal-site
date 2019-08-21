<div align=center>
<img alt="Gatsby" src="https://res.cloudinary.com/tomhendra/image/upload/v1566377250/portfolio-logo/logo-outlined-rectangle-bg.svg" width="100" />
<h1>Portfolio website</h1>
</div>

My **[portfolio](https://tomhendra.dev)** is built with Gatsby using a React hooks pattern learned from **[Frontend Masters](https://frontendmasters.com/courses/gatsby/)**.

_This readme is mostly for me to document & retain the process, since this is my first Gatsby site!_ 🚀

## Getting started

The Gatsby website has a really easy to understand **[tutorial](https://www.gatsbyjs.org/tutorial/)** to get things kicked off with dependencies etc. Awesome stuff!

## We dives into the code

1.  **Gatsby setup.**

    Bare bones are built using the Gatsby CLI to create a new site.

    ```sh
    # create a new Gatsby site using the built in cli
    gatsby new portfolio
    ```

    Navigate into the new directory and start it up.

    ```sh
    cd portfolio/
    gatsby develop
    ```

    The site is running at `http://localhost:8000`

    There's also see a second link: `http://localhost:8000/___graphql`.
    _This is a tool to experiment with querying data with GraphQL._

    Yeah. That's it!

2.  **Navigation.**

    Site navigation uses Reach router's Link already build in to Gatsby. Reach is an awesome tool, because it puts accessibility at the forefront. Kudos to **[Reach](https://reach.tech/router)**.

    ```javascript
    // make your import at the top of the js file.
    import { Link } from 'gatsby';
    ```

    ```javascript
    // Use as as you see fit.
    <Link to="about/">about</Link>
    ```

3.  **emotion css-in-js.**

    Styled with the wonderful **[Emotion](https://emotion.sh/docs/introduction)** library.

    ```sh
    # Install these dependencies and you're good to go!
    npm i @emotion/core @emotion/styled gatsby-plugin-emotion
    ```

4) **animations - TBC**

5) **Testing - TBC**

6) **Performance - TBC**
