import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

// ....................styles....................

function styles({ theme }) {
  const baseStyles = {
    color: 'inherit',
    display: 'inline-block',
    position: 'relative',
    textDecoration: 'none',

    '&::before': {
      backgroundColor: theme.colors.l800,
      borderRadius: theme.borderRadius.alpha,
      bottom: -2,
      content: '""',
      height: '33%',
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

    '&:active': {
      color: 'inherit',
    },

    '&:visited': {
      color: 'inherit',
    },
  };

  return {
    ...baseStyles,
  };
}

// ....................component....................

const InternalLinkElement = styled(Link)(styles);
const ExternalLinkElement = styled.a(styles);

function InlineLink({ internalLink, externalLink, ...rest }) {
  return internalLink ? (
    <InternalLinkElement {...rest} to={internalLink} />
  ) : (
    <ExternalLinkElement
      {...rest}
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
