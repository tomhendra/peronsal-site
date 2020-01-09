import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from '@emotion/styled';
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { withTheme } from 'emotion-theming';

// ....................styles....................

const styles = ({ theme }) => ({
  position: 'absolute',
  zIndex: theme.zIndex.background,
});

// ....................component....................

const ParallaxElement = styled(motion.div)(styles);

function Parallax({ children, ...rest }) {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useSpring(
    useTransform(scrollY, [elementTop, elementTop + 1], [0, -0.075], {
      clamp: false,
    }),
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

export default withTheme(Parallax);
