/** @jsx jsx */
import { jsx } from '@emotion/react';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import styled from '@emotion/styled';
import Img from 'gatsby-image';

import { Text } from '..';
import { FigureType } from '../../types/types';

const sanityConfig = require('../../../sanity-config');

const FigureImage = styled(Img)(({ theme }) => ({
  borderRadius: theme.borderRadius.alpha,
}));

export const Figure = ({ node }: FigureType): JSX.Element => {
  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
    { maxWidth: 675 },
    sanityConfig,
  );

  return (
    <figure css={theme => ({ margin: `${theme.spacings.golf} 0` })}>
      <FigureImage fluid={fluidProps} alt={node.alt} />
      <Text
        variant="secondary"
        as="figcaption"
        css={theme => ({ marginTop: theme.spacings.charlie })}
      >
        <figcaption>{node.caption}</figcaption>
      </Text>
    </figure>
  );
};
