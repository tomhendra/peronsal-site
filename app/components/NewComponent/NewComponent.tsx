import * as CONSTANTS from "./NewComponent.constants";
import { someHelperFn } from "./NewComponent.helpers";
import { useStuff } from "./use-stuff-hook";
import NewComponentChild from "./NewComponentChild";
import type { LinksFunction } from "@remix-run/cloudflare";

import styles from "./styles.css";

const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

function NewComponent() {
  const title = someHelperFn(CONSTANTS.TITLE);
  const [count, setCount] = useStuff();

  return (
    <div className="example-container">
      <h1>{title}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <NewComponentChild count={count} />
    </div>
  );
}

export { links, NewComponent as default };
