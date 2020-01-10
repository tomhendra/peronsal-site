import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import { childrenPropType } from '../../utils/shared-prop-types';
import { withMediaQueries } from '../../assets/styles/style-helpers';

/**
 * `....................styles....................`
 */

const styles = ({ center, devMode, theme }) =>
  withMediaQueries(theme)({
    label: 'container',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    maxWidth: [...theme.breakpoints],
    // 5rem & 6rem being height of header for mobile & > mobile...
    minHeight: '100vh',
    paddingTop: ['5rem', '6rem'],
    justifyContent: center && 'center',
    border: devMode && '1px dashed hsl(300, 100%, 50%)',
    '& > *': {
      border: devMode && '1px dashed hsl(200, 100%, 50%)',
    },
    position: 'relative',
  });

/**
 * `....................component....................`
 */

const Container = styled.div(styles);

/**
 * `....................propTypes....................`
 */

Container.propTypes = {
  center: PropTypes.bool,
  devMode: PropTypes.bool,
  children: childrenPropType,
};

Container.defaultProps = {
  center: null,
  devMode: false,
  children: null,
};

export default withTheme(Container);
