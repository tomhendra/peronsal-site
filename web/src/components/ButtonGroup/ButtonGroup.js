import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import { childrenPropType } from '../../utils/shared-prop-types';

// ....................styles....................

const styles = ({ theme }) => ({
  display: 'flex',
  width: '100%',

  '& > *:not(:last-of-type)': {
    marginRight: theme.spacings.delta,
  },
});

// ....................component....................

const ButtonGroupElement = styled.div(styles);

function ButtonGroup({ children }) {
  return <ButtonGroupElement>{children}</ButtonGroupElement>;
}

// ....................propTypes....................

ButtonGroup.propTypes = {
  children: childrenPropType,
};

ButtonGroup.defaultProps = {
  children: null,
};

export default withTheme(ButtonGroup);
