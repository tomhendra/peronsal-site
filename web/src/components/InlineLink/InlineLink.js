import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Text from '../Text';

// ....................styles....................

function styles({ theme }) {
  const baseStyles = {
    display: 'inline-block',
    position: 'relative',
    textDecoration: 'none',

    '&::before': {
      backgroundColor: theme.colors.l900,
      borderRadius: theme.borderRadius.alpha,
      bottom: 1,
      content: '""',
      height: 8,
      left: 0,
      position: 'absolute',
      transition: `transform ${theme.transitions.default}`,
      width: '100%',
      willChange: 'transform',
      zIndex: theme.zIndex.behind,
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

const InternalLinkElement = styled(Link)(styles);
const ExternalLinkElement = styled(Text)(styles);

function InlineLink({ internalLink, externalLink, ...rest }) {
  return internalLink ? (
    <InternalLinkElement {...rest} to={internalLink} />
  ) : (
    <ExternalLinkElement
      {...rest}
      as="a"
      target="blank"
      rel="noopener"
      href={externalLink}
    />
  );
}

// ....................propTypes....................

InlineLink.propTypes = {
  externalLink: PropTypes.string,
  internalLink: PropTypes.string,
};

InlineLink.defaultProps = {
  externalLink: null,
  internalLink: null,
};

export default InlineLink;
