import { Link, Outlet } from "@remix-run/react";
import styles from "~/styles/projects.css";

function links() {
  return [{ rel: "stylesheet", href: styles }];
}

function Projects() {
  return (
    <main className="u-max-width-container">
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
    </main>
  );
}

export { links, Projects as default };
