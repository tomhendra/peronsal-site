import type { LinksFunction } from "@remix-run/cloudflare";
import { setConfig } from "cloudinary-build-url";
import { CLOUDINARY_CLOUD_NAME } from "./Image.constants";
import { getImageBuilder, getImgProps } from "./Image.helpers";

import styles from "./Image.styles.css";

const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

setConfig({
  cloudName: CLOUDINARY_CLOUD_NAME,
});

interface Props {
  src: string;
  alt: string;
  credit: string;
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
  credit,
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

  const imgProps = getImgProps(getImageBuilder(src, alt), {
    widths: [280, 560, 840, 1100, 1650, 2500, 2100, 3100],
    sizes: [
      "(max-width:1023px) 80vw",
      "(min-width:1024px) and (max-width:1620px) 67vw",
      "1100px",
    ],
    transformations: {
      background: "rgb:e6e9ee",
    },
  });

  return (
    <div key={src}>
      {/* alt comes from imgProps so safe to ignore a11y warning... */}
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img className="img" style={styles} title={credit} {...imgProps} />
    </div>
  );
}

export { links, Image as default };
