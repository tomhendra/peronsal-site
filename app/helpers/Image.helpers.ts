import type {TransformerOption} from '@cld-apis/types';
import {buildImageUrl} from 'cloudinary-build-url';

type ImageBuilder = {
  (transformations?: TransformerOption): string;
  id: string;
};

function getImageBuilder(id: string): ImageBuilder {
  function imageBuilder(transformations?: TransformerOption) {
    return buildImageUrl(id, {transformations});
  }
  imageBuilder.id = id;
  return imageBuilder;
}

function getImgProps(
  imageBuilder: ImageBuilder,
  {
    widths,
    sizes,
    transformations,
  }: {
    widths: Array<number>;
    sizes: Array<string>;
    transformations?: TransformerOption;
  },
) {
  const averageWidth = Math.ceil(
    widths.reduce((a, s) => a + s) / widths.length,
  );

  return {
    src: imageBuilder({
      quality: 'auto',
      format: 'auto',
      ...transformations,
      resize: {width: averageWidth, ...transformations?.resize},
    }),
    srcSet: widths
      .map(width =>
        [
          imageBuilder({
            quality: 'auto',
            format: 'auto',
            ...transformations,
            resize: {width, ...transformations?.resize},
          }),
          `${width}w`,
        ].join(' '),
      )
      .join(', '),
    sizes: sizes.join(', '),
  };
}

export {getImgProps, getImageBuilder};
