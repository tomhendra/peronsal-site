import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';

import { withMediaQueries } from '../../assets/styles/style-helpers';

/**
 * `....................styles....................`
 */

const styles = ({ noMargin, theme }) =>
  withMediaQueries(theme)({
    color: theme.colors.n800,
    fontFamily: theme.fontStack.heading,
    fontSize: ['18.5rem', '39.5rem', '57rem', '57rem'],
    fontWeight: theme.fontWeight.bold,
    lineHeight: [0.75, 0.95],
    marginTop: !noMargin
      ? [
          theme.spacings.india,
          theme.spacings.india,
          theme.spacings.hotel,
          theme.spacings.hotel,
        ]
      : 0,
    position: 'absolute',
    // top: 0,
    zIndex: theme.zIndex.background,
  });

/**
 * `....................component....................`
 */

const GraphicElement = styled(motion.span)(styles);

const Graphic = ({ noMargin, children, ...rest }) => {
  const { scrollY } = useViewportScroll();
  const ref = useRef(null);
  const [elementTop, setElementTop] = useState(0);

  const y = useTransform(scrollY, [elementTop, elementTop + 6], [0, -1], {
    clamp: false,
  });

  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <GraphicElement
      noMargin={noMargin}
      ref={ref}
      style={{ y }}
      initial={{ y: 0 }}
      {...rest}
    >
      {children}
    </GraphicElement>
  );
};

/**
 * `....................propTypes....................`
 */

Graphic.propTypes = {
  noMargin: PropTypes.bool,
};

Graphic.defaultProps = {
  noMargin: false,
};

export default withTheme(Graphic);
