import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { colors, fontsizes } from '../../assets/styles';

export const NavLink = styled(Link)`
  color: ${colors.neutral.light5};
  font-size: ${fontsizes.small};
  /* font-weight: ${props => props.fontWeight || 'normal'}; */
  text-decoration: none;

  &.current-page {
    color: ${colors.primary.light3};
  }
`;
