import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import { childrenPropType } from '../../utils/shared-prop-types';

// ....................styles....................

const styles = {
  label: 'wrapper',
  minHeight: '100vh',
  overflow: 'hidden',
  position: 'relative',
  width: '100vw',
};

// ....................component....................

const Wrapper = styled.div(styles);

// ....................propTypes....................

Wrapper.propTypes = {
  children: childrenPropType,
};

Wrapper.defaultProps = {
  children: null,
};

export default withTheme(Wrapper);
