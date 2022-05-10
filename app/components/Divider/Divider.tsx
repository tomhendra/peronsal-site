import type { LinksFunction } from "@remix-run/cloudflare";
import MaxWidthContainer from "../MaxWidthContainer";

import { links as MaxWidthContainerLinks } from "../MaxWidthContainer";
import styles from "./divider.css";

const links: LinksFunction = () => [
  ...MaxWidthContainerLinks(),
  { rel: "stylesheet", href: styles },
];

function Divider() {
  return (
    <MaxWidthContainer>
      <div className="divider" />
    </MaxWidthContainer>
  );
}

export { links, Divider as default };
