import SvelteIcon from "./Icons/SvelteIcon";
import SassIcon from "./Icons/SassIcon";
import CloudflarePagesIcon from "./Icons/CloudflarePagesIcon";
import CloudinaryIcon from "./Icons/CloudinaryIcon";
import CssIcon from "./Icons/CssIcon";
import MarkdownIcon from "./Icons/MarkdownIcon";
import ReactIcon from "./Icons/ReactIcon";
import RemixIcon from "./Icons/RemixIcon";
import SupabaseIcon from "./Icons/SupabaseIcon";
import TypeScriptIcon from "./Icons/TypeScriptIcon";
import type { LinksFunction } from "@remix-run/cloudflare";

import styles from "./tech.css";
const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

type TechProps = {
  name:
    | "Cloudflare Pages"
    | "Cloudinary"
    | "CSS"
    | "Markdown"
    | "React"
    | "Remix"
    | "Sass"
    | "Supabase"
    | "Svelte"
    | "TypeScript";
};

function Tech({ name }: TechProps) {
  return (
    <span className="tech-container">
      {name === "Cloudflare Pages" ? (
        <CloudflarePagesIcon />
      ) : name === "Cloudinary" ? (
        <CloudinaryIcon />
      ) : name === "CSS" ? (
        <CssIcon />
      ) : name === "Markdown" ? (
        <MarkdownIcon />
      ) : name === "React" ? (
        <ReactIcon />
      ) : name === "Remix" ? (
        <RemixIcon />
      ) : name === "Sass" ? (
        <SassIcon />
      ) : name === "Supabase" ? (
        <SupabaseIcon />
      ) : name === "Svelte" ? (
        <SvelteIcon />
      ) : name === "TypeScript" ? (
        <TypeScriptIcon />
      ) : null}
      <p className="title">{name}</p>
    </span>
  );
}

export { links, Tech as default };
