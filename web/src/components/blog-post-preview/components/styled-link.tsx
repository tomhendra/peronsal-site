import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { withMediaQueries } from '../../../utils/style-helpers';

import { StyledCard } from './styled-card';

export const StyledLink = styled(Link)(({ theme }) =>
  withMediaQueries(theme)({
    position: 'relative',
    textDecoration: 'none',

    '&:hover, &:focus': {
      [StyledCard as any]: {
        '&::after': {
          transition: `transform ${theme.transitions.springDefault}`,
          transform: 'translate(-10px, 10px)',
        },
      },
    },

    '&:active': {
      [StyledCard as any]: {
        '&::after': {
          transition: `transform ${theme.transitions.fast}`,
          transform: 'translate(0px, 0px)',
        },
      },
    },
  }),
);
