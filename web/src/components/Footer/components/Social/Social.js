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
    // flexWrap: 'wrap',
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
    display: 'flex',
    alignItems: 'center',
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
    textDecoration: 'none',
    textTransform: 'uppercase',
  });

// ....................component....................

const SocialContainer = styled.div(containerStyles);
const SocialLink = styled.a(linkStyles);

function Social() {
  return (
    <SocialContainer>
      <SocialLink
        href="https://github.com/tomhendra"
        target="_blank"
        rel="noopener"
      >
        <Icon
          type={GITHUB}
          color={NEUTRAL}
          size={BRAVO}
          alt="GitHub logo"
          spacingRight={BRAVO}
        />
        GitHub
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/tom-hendra/"
        target="_blank"
        rel="noopener"
        // cheeky little override to align LinkedIn logo at baseline of text
        // css={{ alignItems: 'flex-start' }}
      >
        <Icon
          type={LINKEDIN}
          color={NEUTRAL}
          size={BRAVO}
          alt="LinkedIn logo"
          spacingRight={BRAVO}
        />
        LinkedIn
      </SocialLink>
      <SocialLink
        href="https://twitter.com/TomHendra"
        target="_blank"
        rel="noopener"
      >
        <Icon
          type={TWITTER}
          color={NEUTRAL}
          size={BRAVO}
          alt="Twitter logo"
          spacingRight={BRAVO}
        />
        Twitter
      </SocialLink>
    </SocialContainer>
  );
}

export default Social;
