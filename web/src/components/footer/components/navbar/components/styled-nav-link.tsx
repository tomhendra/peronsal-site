import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { withMediaQueries } from '../../../../../utils/style-helpers';

export const StyledNavLink = styled(Link)(({ theme }) =>
  withMediaQueries(theme)({
    color: theme.colors.n400,
    textDecoration: 'none',
    textTransform: 'uppercase',
    borderWidth: theme.borderWidth.charlie,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderRadius: theme.borderRadius.bravo,
    fontSize: [
      theme.text.bravo.fontSize,
      theme.text.bravo.fontSize,
      theme.text.charlie.fontSize,
    ],
    padding: [
      `${theme.spacings.bravo} 0`,
      `${theme.spacings.bravo} 0`,
      `${theme.spacings.alpha} ${theme.spacings.charlie}`,
    ],

    '&:hover': {
      borderColor: ['transparent', 'transparent', theme.colors.n500],
    },
  }),
);
