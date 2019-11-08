import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

/**
 * `....................styles....................`
 */

const errorMessageStyles = ({ theme }) => ({
  color: theme.colors.danger,
});

/**
 * `....................component....................`
 */

const ErrorMessage = styled.span(errorMessageStyles);

export default withTheme(ErrorMessage);
