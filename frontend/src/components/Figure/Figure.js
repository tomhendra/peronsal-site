import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import PropTypes from 'prop-types';

import sanityConfig from '../../../sanity-config';

import Text from '../Text';

import { sizes } from '../../assets/styles/constants';

const { BRAVO } = sizes;

/**
 * `....................styles....................`
 */

const figureStyles = ({ theme }) => ({
  margin: `${theme.spacings.golf} 0`,
});

const figcaptionStyles = ({ theme }) => ({
  marginTop: theme.spacings.charlie,
});

/**
 * `....................component....................`
 */

const FigureElement = styled.figure(figureStyles);
const FigcaptionText = Text.withComponent('figcaption');
const FigcaptionElement = styled(FigcaptionText)(figcaptionStyles);

const Figure = ({ node }) => {
  const fluidProps = getFluidGatsbyImage(
    node.asset._id,
    { maxWidth: 675 },
    sanityConfig,
  );

  return (
    <FigureElement>
      <Img fluid={fluidProps} alt={node.alt} />
      <FigcaptionElement italic size={BRAVO}>
        {node.caption}
      </FigcaptionElement>
    </FigureElement>
  );
};

/**
 * `....................propTypes....................`
 */

Figure.propTypes = {
  node: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ),
};

Figure.defaultProps = {
  node: {},
};

export default withTheme(Figure);
