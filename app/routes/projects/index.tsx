import { Link } from "@remix-run/react";

export default function Projects() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
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
    </div>
  );
}
