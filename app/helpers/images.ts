import type {TransformerOption} from '@cld-apis/types';
import {buildImageUrl, setConfig} from 'cloudinary-build-url';
import {CLOUDINARY_CLOUD_NAME, CLOUDINARY_DIR_NAME} from '~/constants';

setConfig({
  cloudName: CLOUDINARY_CLOUD_NAME,
});

type ImageUrlBuilder = {
  (transformations?: TransformerOption): string;
  id: string;
};

function getImageBuilder(cloudinaryFilename: string): ImageUrlBuilder {
  const publicId = CLOUDINARY_DIR_NAME + '/' + cloudinaryFilename;

  function imageUrlBuilder(transformations?: TransformerOption) {
    return buildImageUrl(publicId, {transformations});
  }

  imageUrlBuilder.id = publicId;
  return imageUrlBuilder;
}

type UrlOptions = {
  width: number;
  transformations?: TransformerOption;
};

function getUrl(
  imageUrlBuilder: ImageUrlBuilder,
  {width, transformations}: UrlOptions,
) {
  const url = imageUrlBuilder({
    quality: 'auto',
    format: 'auto',
    ...transformations,
    resize: {width, ...transformations?.resize},
  });

  return url;
}

function getSrc(
  cloudinaryFilename: string,
  {width, transformations}: UrlOptions,
) {
  const imageUrlBuilder = getImageBuilder(cloudinaryFilename);
  const src = getUrl(imageUrlBuilder, {
    width,
    transformations,
  });

  return src;
}

function getSrcSet(
  cloudinaryFilename: string,
  {
    devicePixelRatios,
    widths,
    transformations,
  }: {
    devicePixelRatios?: Array<number>;
    widths: Array<number>;
    transformations?: TransformerOption;
  },
) {
  if (devicePixelRatios && devicePixelRatios.length !== widths.length) {
    throw new Error(
      'Number of devicePixelRatios must equal number of widths in order for each width to have a corresponding x-descriptor.',
    );
  }

  const imageUrlBuilder = getImageBuilder(cloudinaryFilename);
  const srcSet = widths
    .map((width, index) =>
      [
        getUrl(imageUrlBuilder, {
          width,
          transformations,
        }),
        devicePixelRatios ? `${devicePixelRatios[index]}x` : `${width}w`,
      ].join(' '),
    )
    .join(', ');

  return srcSet;
}

function getImgProps(
  cloudinaryFilename: string,
  {
    devicePixelRatios,
    widths,
    sizes,
    transformations,
  }: {
    widths: Array<number>;
    devicePixelRatios?: Array<number>;
    sizes?: Array<string>;
    transformations?: TransformerOption;
  },
) {
  const averageWidth = Math.ceil(
    widths.reduce((a, s) => a + s) / widths.length,
  );

  return {
    src: getSrc(cloudinaryFilename, {
      width: averageWidth,
      transformations,
    }),
    srcSet: getSrcSet(cloudinaryFilename, {
      devicePixelRatios,
      widths,
      transformations,
    }),
    sizes: sizes?.join(', '),
  };
}

export {getSrc, getSrcSet, getImgProps};
