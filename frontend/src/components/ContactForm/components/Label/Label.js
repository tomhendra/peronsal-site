import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

/**
 * `....................styles....................`
 */

const labelStyles = ({ theme }) => ({
  color: theme.colors.n300,
});

/**
 * `....................component....................`
 */

const Label = styled.span(labelStyles);

export default withTheme(Label);
