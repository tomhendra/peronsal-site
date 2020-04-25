import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const StyledNavLink = styled(Link)(({ theme }) => ({
  color: theme.colors.n400,
  fontFamily: theme.fontStack.heading,
  fontWeight: theme.fontWeight.regular,
  fontSize: theme.headings.alpha.fontSize,
  lineHeight: theme.headings.alpha.lineHeight,
  position: 'relative',
  textDecoration: 'none',
  textTransform: 'uppercase',
  // highlight of active page by text colour
  '&.currentPage,:hover': {
    color: theme.colors.n100,
  },
  // highlight of active page by underline
  /*
  '&.currentPage': {
    '&::after': {
      backgroundColor: theme.colors.p400,
      borderRadius: theme.borderRadius.alpha,
      top: '3.75rem',
      content: '""',
      transform: 'translateX(-100%)',
      position: 'absolute',
      height: '0.25rem',
      width: '100%',
    },
  },
  */
}));
