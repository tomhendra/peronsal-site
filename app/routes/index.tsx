import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main>
      <h1>Tom Hendra's Personal Site</h1>
      <Link to="projects">Projects</Link>
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
