import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const StyledNavLink = styled(Link)(({ theme }) => ({
  color: theme.colors.n400,
  fontFamily: theme.fontStack.heading,
  fontSize: theme.headings.delta.fontSize,
  lineHeight: 0.85,
  textAlign: 'left',
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: `all ${theme.transitions.default}`,
  position: 'relative',

  '&.currentPage,:hover': {
    color: theme.colors.n000,
  },

  '&.currentPage': {
    '&::before': {
      backgroundColor: theme.colors.p400,
      borderRadius: theme.borderRadius.alpha,
      content: '""',
      position: 'absolute',
      left: '-1.5rem',
      height: '100%',
      width: '0.5rem',
    },
  },
}));
