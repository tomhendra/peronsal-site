import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

/**
 * `....................styles....................`
 */

const errorMessageStyles = ({ theme }) => ({
  color: theme.colors.danger,
  fontSize: theme.typography.text.bravo.fontSize,
});

/**
 * `....................component....................`
 */

const ErrorMessage = styled.span(errorMessageStyles);

export default withTheme(ErrorMessage);
