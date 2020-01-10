import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from '@emotion/styled';
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { withTheme } from 'emotion-theming';

import { childrenPropType } from '../../utils/shared-prop-types';

// ....................styles....................

const styles = ({ theme }) => ({
  position: 'absolute',
  userSelectable: 'none',
  zIndex: theme.zIndex.background,
});

// ....................component....................

const ParallaxElement = styled(motion.div)(styles);

function Parallax({ children, ...rest }) {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useViewportScroll();
  const scrollRange = [elementTop, elementTop + 1];
  const outputRange = [0, -0.05];
  const options = {
    clamp: false,
  };
  const springConfig = {
    damping: 100,
    stiffness: 75,
  };
  const y = useSpring(
    useTransform(scrollY, scrollRange, outputRange, options),
    springConfig,
  );
  // https://kentcdodds.com/blog/useeffect-vs-uselayouteffect
  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <ParallaxElement ref={ref} style={{ y }} {...rest}>
      {children}
    </ParallaxElement>
  );
}

// ....................propTypes....................

Parallax.propTypes = {
  children: childrenPropType,
};

Parallax.defaultProps = {
  children: null,
};

export default withTheme(Parallax);
