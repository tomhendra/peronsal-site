import { Link, Outlet } from "@remix-run/react";
import styles from "~/styles/projects.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Projects() {
  return (
    <main>
      <div className="breadcrumbs">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/projects">Projects</Link>
        </span>
      </div>
      <Outlet />
    </main>
  );
}
