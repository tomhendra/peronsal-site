import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import Text from '../../../Text';

import { sizes } from '../../../../assets/styles/constants';

const { BRAVO } = sizes;

// ....................styles....................

const containerStyles = ({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-end',
  height: theme.spacings.golf,
});

const textStyles = ({ theme }) => ({
  marginRight: theme.spacings.bravo,
});

const svgStyles = ({ theme }) => ({
  height: theme.iconSizes.foxtrot,
  width: theme.iconSizes.foxtrot,

  '& circle': {
    fill: 'none',
    strokeWidth: 2,
  },
});

const greyRingStyles = ({ theme }) => ({
  stroke: theme.colors.n700,
});

const colouredRingStyles = ({ theme, messageMaxLength, charsRemaining }) => {
  const r = 10;
  const ringLength = 2 * Math.PI * r;
  const grey = (ringLength * charsRemaining) / messageMaxLength;
  const coloured = ringLength - grey > 0 ? ringLength - grey : 0;
  const warningThreshold = messageMaxLength * 0.25;

  return {
    stroke:
      charsRemaining >= warningThreshold
        ? theme.colors.p500
        : charsRemaining < warningThreshold && charsRemaining >= 0
        ? theme.colors.warning
        : theme.colors.danger,
    strokeDasharray: `${coloured} ${grey}`,
    strokeDashoffset: ringLength / 4,
  };
};

// ....................component....................

const CounterContainer = styled.div(containerStyles);
const CounterText = styled(Text)(textStyles);
const CounterSvg = styled.svg(svgStyles);
const GreyRing = styled.circle(greyRingStyles);
const ColouredRing = styled.circle(colouredRingStyles);

const Counter = ({ messageMaxLength, charsEntered }) => {
  const charsRemaining = messageMaxLength - charsEntered;
  return (
    <CounterContainer>
      <CounterText noMargin size={BRAVO}>
        {`Characters remaining: ${charsRemaining}`}
      </CounterText>
      <CounterSvg>
        <GreyRing cx="50%" cy="50%" r="10" />
        <ColouredRing
          cx="50%"
          cy="50%"
          r="10"
          messageMaxLength={messageMaxLength}
          charsRemaining={charsRemaining}
        />
      </CounterSvg>
    </CounterContainer>
  );
};

export default withTheme(Counter);
