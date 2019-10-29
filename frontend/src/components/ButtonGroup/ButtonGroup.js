import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

/**
 * `....................styles....................`
 */

const styles = ({ theme }) => ({
  display: 'flex',
  '& > *:not(:last-of-type)': {
    marginRight: theme.spacings.delta,
  },
});

/**
 * `....................component....................`
 */

const ButtonGroupElement = styled.div(styles);

const ButtonGroup = ({ children }) => (
  <ButtonGroupElement>{children}</ButtonGroupElement>
);

/**
 * `....................propTypes....................`
 */

export default withTheme(ButtonGroup);
