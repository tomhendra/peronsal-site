import type { LinksFunction } from "@remix-run/cloudflare";
import MaxWidthContainer, {
  links as maxWidthContainerStyles,
} from "~/components/MaxWidthContainer";
import styles from "~/styles/index.css";

const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...maxWidthContainerStyles(),
];

function Index() {
  return (
    <main>
      <MaxWidthContainer>
        <h1>Hello</h1>
        <h2 id="about">About</h2>
      </MaxWidthContainer>
    </main>
  );
}

export { links, Index as default };
