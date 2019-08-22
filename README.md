<div align=center>
<img alt="Gatsby" src="https://res.cloudinary.com/tomhendra/image/upload/v1566505136/portfolio-logo/logo-920x920.png" width="100" />
<h1>Portfolio</h1>
<p>My personal website built with Gatsby</p>
</div>

## Introduction

**[My portfolio](https://tomhendra.dev)** has been built using a React hooks pattern for Gatsby, which I learned from a **[Frontend Masters course](https://frontendmasters.com/courses/gatsby/)**.

This readme is mainly for me to document & retain the process, since this is my first Gatsby site! 🚀

## Getting started with Gatsby

The Gatsby website has a really well put together **[tutorial](https://www.gatsbyjs.org/tutorial/)** to get things kicked off with dependencies etc. Once Homebrew, Node, Git & Gatsby cli is installed, you're ready to start building a Gatsby site.

## Building a site

1.  **Gatsby**

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
