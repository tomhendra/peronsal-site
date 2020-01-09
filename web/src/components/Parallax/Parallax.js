import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { withTheme } from 'emotion-theming';

const styles = ({ theme }) => ({
  position: 'absolute',
  top: 0,
  zIndex: theme.zIndex.background,
});

const ParallaxElement = styled(motion.div)(styles);

const Parallax = ({ children, ...rest }) => {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
    clamp: false,
  });

  useEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <ParallaxElement ref={ref} style={{ y }} {...rest}>
      {children}
    </ParallaxElement>
  );
};

export default withTheme(Parallax);
