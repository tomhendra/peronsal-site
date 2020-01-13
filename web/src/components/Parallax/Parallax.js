/*

import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { withTheme } from 'emotion-theming';
import { useInView } from 'react-intersection-observer';

import { childrenPropType } from '../../utils/shared-prop-types';

// ....................styles....................

const styles = ({ theme }) => ({
  position: 'absolute',
  userSelectable: 'none',
  zIndex: theme.zIndex.background,
});

// ....................component....................

const ParallaxElement = styled(motion.div)(styles);

function Parallax({ children }) {
  const [ref, inView, entry] = useInView({
    rootMargin: '60px 60px',
  });

  useEffect(() => {
    console.log('ref: ', ref);
    console.log('inView: ', inView);
    console.log('entry: ', entry);
  });

  console.log('RENDERING....');
  return (
    <ParallaxElement ref={ref}>
      {`${inView}`}
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

*/
