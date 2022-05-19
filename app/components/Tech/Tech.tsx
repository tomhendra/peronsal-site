import Svelte from "./Icons/Svelte";
import Sass from "./Icons/Sass";
import type { LinksFunction } from "@remix-run/cloudflare";

import styles from "./tech.css";
import CloudflarePages from "./Icons/CloudflarePages";
import Cloudinary from "./Icons/Cloudinary";
import Markdown from "./Icons/Markdown";

const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

type TechProps = {
  name: "Cloudflare Pages" | "Cloudinary" | "Markdown" | "Sass" | "Svelte";
};

function Tech({ name }: TechProps) {
  return (
    <span className="tech-container">
      {name === "Cloudflare Pages" ? (
        <CloudflarePages />
      ) : name === "Cloudinary" ? (
        <Cloudinary />
      ) : name === "Markdown" ? (
        <Markdown />
      ) : name === "Sass" ? (
        <Sass />
      ) : name === "Svelte" ? (
        <Svelte />
      ) : null}
      <p className="title">{name}</p>
    </span>
  );
}

export { links, Tech as default };
