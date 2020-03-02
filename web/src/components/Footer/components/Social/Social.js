import React from 'react';
import styled from '@emotion/styled';

import Icon from '../../../Icon';

import { withMediaQueries } from '../../../../assets/styles/style-helpers';

import { colors, icons, sizes } from '../../../../assets/styles/style-enums';

const { NEUTRAL } = colors;
const { GITHUB, LINKEDIN, TWITTER } = icons;
const { BRAVO } = sizes;

// ....................styles....................

const containerStyles = ({ theme }) =>
  withMediaQueries(theme)({
    display: 'flex',
    justifyContent: [
      'flex-start',
      'flex-start',
      'flex-end',
      'flex-end',
      'flex-start',
    ],

    '& > :not(:last-of-type)': {
      marginRight: [
        theme.spacings.bravo,
        theme.spacings.bravo,
        theme.spacings.echo,
      ],
    },
  });

const linkStyles = ({ theme }) =>
  withMediaQueries(theme)({
    position: 'relative',
    textDecoration: 'none',

    '&::after': {
      borderWidth: theme.borderWidth.charlie,
      borderStyle: 'solid',
      borderColor: theme.colors.n500,
      borderRadius: theme.borderRadius.bravo,
      content: '""',
      height: '100%',
      width: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: theme.zIndex.behind,
      transformOrigin: 'top right',
      transition: `transform ${theme.transitions.default}`,
    },

    '&:hover, &:focus': {
      '&::after': {
        transition: `transform ${theme.transitions.springDefault}`,
        transform: 'translate(-6px, 6px)',
      },
    },
  });

const innerLinkStyles = ({ theme }) =>
  withMediaQueries(theme)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.n900,
    borderWidth: theme.borderWidth.charlie,
    borderStyle: 'solid',
    borderColor: theme.colors.n500,
    borderRadius: theme.borderRadius.bravo,
    color: theme.colors.n400,
    fontSize: [
      theme.typography.text.bravo.fontSize,
      theme.typography.text.bravo.fontSize,
      theme.typography.text.charlie.fontSize,
    ],
    padding: [
      `${theme.spacings.alpha} ${theme.spacings.bravo}`,
      `${theme.spacings.alpha} ${theme.spacings.bravo}`,
      `${theme.spacings.alpha} ${theme.spacings.charlie}`,
    ],
    textTransform: 'uppercase',
    height: '100%',
    width: '100%',
  });

// ....................component....................

const SocialContainer = styled.div(containerStyles);
const SocialLink = styled.a(linkStyles);
const InnerLink = styled.span(innerLinkStyles);

function Social() {
  return (
    <SocialContainer>
      <SocialLink
        href="https://github.com/tomhendra"
        target="_blank"
        rel="noopener"
      >
        <InnerLink>
          <Icon
            type={GITHUB}
            color={NEUTRAL}
            size={BRAVO}
            alt="GitHub logo"
            spacingRight={BRAVO}
          />
          GitHub
        </InnerLink>
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/tom-hendra/"
        target="_blank"
        rel="noopener"
      >
        <InnerLink>
          <Icon
            type={LINKEDIN}
            color={NEUTRAL}
            size={BRAVO}
            alt="LinkedIn logo"
            spacingRight={BRAVO}
          />
          LinkedIn
        </InnerLink>
      </SocialLink>
      <SocialLink
        href="https://twitter.com/TomHendra"
        target="_blank"
        rel="noopener"
      >
        <InnerLink>
          <Icon
            type={TWITTER}
            color={NEUTRAL}
            size={BRAVO}
            alt="Twitter logo"
            spacingRight={BRAVO}
          />
          Twitter
        </InnerLink>
      </SocialLink>
    </SocialContainer>
  );
}

export default Social;
