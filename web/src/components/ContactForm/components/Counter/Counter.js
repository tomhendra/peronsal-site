import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { variantPropType } from '../../../../utils/shared-prop-types';

import Text from '../../../Text';

import { sizes, variants } from '../../../../assets/styles/style-enums';

const { CHARLIE } = sizes;
const { SECONDARY } = variants;

// ....................styles....................

const containerStyles = ({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-end',
  height: theme.spacings.golf,
});

const svgStyles = ({ theme }) => ({
  height: theme.iconSizes.foxtrot,
  width: theme.iconSizes.foxtrot,
  marginLeft: theme.spacings.bravo,

  '& circle': {
    fill: 'none',
    strokeWidth: 2,
  },
});

const greyRingStyles = ({ theme }) => ({
  stroke: theme.colors.n500,
});

function colouredRingStyles({ theme, messageMaxLength, charsRemaining }) {
  const r = 10;
  const ringLength = 2 * Math.PI * r;
  const grey = (ringLength * charsRemaining) / messageMaxLength;
  const coloured = ringLength - grey > 0 ? ringLength - grey : 0;
  const warningThreshold = messageMaxLength * 0.25;

  return {
    stroke:
      charsRemaining >= warningThreshold
        ? theme.colors.p400
        : charsRemaining < warningThreshold && charsRemaining >= 0
        ? theme.colors.warning
        : theme.colors.danger,
    strokeDasharray: `${coloured} ${grey}`,
    strokeDashoffset: ringLength / 4,
  };
}

// ....................component....................

const CounterContainer = styled.div(containerStyles);
const CounterSvg = styled.svg(svgStyles);
const GreyRing = styled.circle(greyRingStyles);
const ColouredRing = styled.circle(colouredRingStyles);

function Counter({ messageMaxLength, charsEntered, variant }) {
  const charsRemaining = messageMaxLength - charsEntered;
  return (
    <CounterContainer>
      <Text noMargin size={CHARLIE} variant={variant}>
        {`Characters remaining: ${charsRemaining}`}
      </Text>
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
}

// ...................propTypes....................

Counter.propTypes = {
  messageMaxLength: PropTypes.number,
  charsEntered: PropTypes.number,
  variant: variantPropType,
};

Counter.defaultProps = {
  messageMaxLength: null,
  charsEntered: null,
  variant: SECONDARY,
};

export default Counter;
