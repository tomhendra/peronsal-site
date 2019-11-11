import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

/**
 * `....................styles....................`
 */

const styles = ({ theme }) => ({
  display: 'flex',
  width: '100%',

  '& > *:not(:last-of-type)': {
    marginRight: theme.spacings.delta,
  },
});

/**
 * `....................component....................`
 */

const ButtonGroup = styled.div(styles);

export default withTheme(ButtonGroup);
