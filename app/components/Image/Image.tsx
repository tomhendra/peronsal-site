import {setConfig} from 'cloudinary-build-url';
import {CLOUDINARY_CLOUD_NAME, CLOUDINARY_FOLDER_NAME} from '~/constants';
import {getImageBuilder, getImgProps} from './Image.helpers';
import type {LinksFunction} from '@remix-run/cloudflare';
import type {TransformerOption} from '@cld-apis/types';

import styles from './image.css';
import clsx from 'clsx';

const links: LinksFunction = () => [{rel: 'stylesheet', href: styles}];

setConfig({
  cloudName: CLOUDINARY_CLOUD_NAME,
});

type BaseProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  widths: number[];
  sizes: string[];
  transformations?: TransformerOption;
  className?: string;
};

type ImgProps = BaseProps &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, keyof BaseProps>;

function Image({
  src,
  alt,
  width,
  height,
  widths,
  sizes,
  transformations,
  className,
}: ImgProps) {
  const url = CLOUDINARY_FOLDER_NAME + '/' + src;

  const imgProps = getImgProps(getImageBuilder(url), {
    widths,
    sizes,
    transformations,
  });

  return (
    <img
      className={clsx('img', className && className)}
      key={src}
      alt={alt}
      width={width}
      height={height}
      {...imgProps}
    />
  );
}

export {links, Image as default};
/*
example usage 

<Image
  className="hero-img"
  src="tom-website-hero"
  alt="A portrait photo of Tom Hendra"
  title="Photo by James Hopper"
  width={560}
  height={640}
  widths={[280, 560, 840, 1100, 1650, 2500, 2100, 3100]}
  sizes={[
    "(max-width:34.375rem) 80vw", // if the viewport is 550px or less (mobile), the width of the slot the image will fill is 440px
    "(max-width:68.75rem) 70vw", // if the viewport is 1100px or less (tablet), the width of the slot the image will fill is 770px
    "(max-width:93.75rem) 60vw", // if the viewport is 1500px or less (laptop), the width of the slot the image will fill is 900px
    "1100px", // default that is chosen when none of the media conditions are true: the width of the slot the image will fill is 1100px
  ]}
  transformations={{
    background: "rgb:e6e9ee",
  }}
/>
*/
