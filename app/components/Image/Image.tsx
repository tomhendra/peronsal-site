import type { LinksFunction } from "@remix-run/cloudflare";

import styles from "./Image.styles.css";

const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

interface Props {
  src: string;
  alt: string;
  ratio?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  objectFit?: string;
}

function Image({
  src = "https://picsum.photos/400/200",
  alt,
  ratio,
  width = "100%",
  height = "auto",
  maxWidth,
  maxHeight,
  objectFit = "cover",
}: Props) {
  const styles = {
    "--ratio": ratio,
    "--width": width,
    "--height": height,
    "--max-width": maxWidth,
    "--max-height": maxHeight,
    "--object-fit": objectFit,
  } as React.CSSProperties;

  return <img src={src} alt={alt} className="img" style={styles} />;
}

export { links, Image as default };
