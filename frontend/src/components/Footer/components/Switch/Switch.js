import React from 'react';
import styled from '@emotion/styled';

import { withTheme } from 'emotion-theming';

/**
 * `....................styles....................`
 */

const styles = {
  textAlign: 'right',
};

/**
 * `....................component....................`
 */

const SwitchElement = styled.span(styles);

const Switch = () => <SwitchElement>SWITCH</SwitchElement>;

export default withTheme(Switch);
