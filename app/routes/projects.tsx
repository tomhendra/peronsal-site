import { Link, Outlet } from "@remix-run/react";
import MaxWidthContainer from "~/components/MaxWidthContainer";
import type { LinksFunction } from "@remix-run/cloudflare";

import { links as maxWidthContainerLinks } from "~/components/MaxWidthContainer";

const links: LinksFunction = () => [...maxWidthContainerLinks()];

function Projects() {
  return (
    <MaxWidthContainer>
      <h1>Projects</h1>
      <ul>
        <li>
          <Link to="project-one">Project One</Link>
        </li>
        <li>
          <Link to="project-two">Project Two</Link>
        </li>
        <li>
          <Link to="project-three">Project Three</Link>
        </li>
      </ul>
      <Outlet />
    </MaxWidthContainer>
  );
}

export { links, Projects as default };
