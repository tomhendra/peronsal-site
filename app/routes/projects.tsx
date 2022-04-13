import { Link } from "@remix-run/react";
import styles from "~/styles/projects.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Projects() {
  return (
    <main className="u-max-width-container">
      <h1>Projects</h1>
      <ul>
        <li>
          <Link to="projects/project-one">Project One</Link>
        </li>
        <li>
          <Link to="projects/project-two">Project Two</Link>
        </li>
        <li>
          <Link to="projects/project-three">Project Three</Link>
        </li>
      </ul>
    </main>
  );
}
