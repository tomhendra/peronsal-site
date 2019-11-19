import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

/**
 * `....................styles....................`
 */

const labelStyles = ({ theme }) => ({
  color: theme.colors.n400,
  fontSize: theme.typography.text.bravo.fontSize,
  position: 'relative',
});

/**
 * `....................component....................`
 */

const Label = styled.label(labelStyles);

export default withTheme(Label);