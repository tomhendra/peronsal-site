import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { colors, fontsizes } from '../../assets/styles';

export const ReadLink = styled(Link)`
  color: ${colors.primary.light3};
  font-size: ${fontsizes.small};
  text-decoration: none;
  text-transform: uppercase;
`;
