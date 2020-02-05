/*

import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { withMediaQueries } from '../../assets/styles/style-helpers';

// ....................styles....................

const styles = ({ noMargin, theme }) =>
  withMediaQueries(theme)({
    color: theme.colors.n800,
    fontFamily: theme.fontStack.heading,
    fontSize: ['18.5rem', '39.5rem', '57rem', '57rem'],
    fontWeight: theme.fontWeight.bold,
    lineHeight: [0.75, 0.95],
    marginTop: !noMargin
      ? [
          theme.spacings.foxtrot,
          theme.spacings.india,
          theme.spacings.hotel,
          theme.spacings.hotel,
        ]
      : 0,
    position: 'absolute',
    zIndex: theme.zIndex.background,
  });

// ....................component....................

const GraphicElement = styled.span(styles);

function Graphic({ noMargin, children }) {
  return (
    <GraphicElement
      noMargin={noMargin}
      role="img"
      aria-label={`Graphic text displaying the word ${children}`}
    >
      {children}
    </GraphicElement>
  );
}

// ....................propTypes....................

Graphic.propTypes = {
  noMargin: PropTypes.bool,
};

Graphic.defaultProps = {
  noMargin: false,
};

export default withTheme(Graphic);

*/
