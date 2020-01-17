import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import Icon from '../../../Icon';

import { colors, icons, sizes } from '../../../../assets/styles/constants';

const { NEUTRAL } = colors;
const { GITHUB, LINKEDIN, TWITTER } = icons;
const { ECHO } = sizes;

// ....................styles....................

const linkStyles = ({ theme }) => ({
  'svg:hover': {
    stroke: theme.colors.p500,
  },
});

const containerStyles = () => ({
  display: 'flex',
  justifyContent: 'space-between',
});

// ....................component....................

const SocialContainer = styled.div(containerStyles);
const SocialLink = styled.a(linkStyles);

function Social() {
  return (
    <SocialContainer>
      <SocialLink href="https://github.com/tomhendra">
        <Icon type={GITHUB} color={NEUTRAL} size={ECHO} alt="GitHub logo" />
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/tom-hendra/">
        <Icon type={LINKEDIN} color={NEUTRAL} size={ECHO} alt="LinkedIn logo" />
      </SocialLink>
      <SocialLink href="https://twitter.com/TomHendra">
        <Icon type={TWITTER} color={NEUTRAL} size={ECHO} alt="Twitter logo" />
      </SocialLink>
    </SocialContainer>
  );
}

export default withTheme(Social);
