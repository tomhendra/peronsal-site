import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import { childrenPropType } from '../../utils/shared-prop-types';

/**
 * `....................styles....................`
 */

const styles = ({ theme }) => ({
  color: theme.colors.n900,
  fontFamily: theme.fontStack.heading,
  fontSize: '57rem',
  fontWeight: theme.fontWeight.bold,
  position: 'absolute',
  top: 0,
  zIndex: theme.zIndex.background,
});

/**
 * `....................component....................`
 */

const Heading = styled.span(styles);

/**
 * `....................propTypes....................`
 */

Heading.propTypes = {
  children: childrenPropType,
};

Heading.defaultProps = {
  children: null,
};

export default withTheme(Heading);
