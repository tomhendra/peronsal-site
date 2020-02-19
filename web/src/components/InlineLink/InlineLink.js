import React from 'react';
import styled from '@emotion/styled';

import Text from '../Text';

// ....................styles....................

function styles({ theme }) {
  const baseStyles = {
    display: 'inline-block',
    position: 'relative',
    textDecoration: 'none',

    '&::before': {
      position: 'absolute',
      bottom: -2,
      left: 0,
      backgroundColor: theme.colors.l900,
      content: '""',
      width: '100%',
      height: 12,
      zIndex: theme.zIndex.behind,
      transition: `transform ${theme.transitions.default}`,
      willChange: 'transform',
    },

    '&:hover': {
      '&::before': {
        transform: 'translateY(50%)',
      },
    },

    '&:visited': {
      color: theme.colors.n400,
    },
  };

  return {
    ...baseStyles,
  };
}

// ....................component....................

const InlineLinkElement = styled(Text)(styles);

function InlineLink({ externalLink, ...rest }) {
  return (
    <InlineLinkElement
      {...rest}
      as="a"
      target="blank"
      rel="noopener"
      href={externalLink}
    />
  );
}

// ....................propTypes....................

export default InlineLink;
