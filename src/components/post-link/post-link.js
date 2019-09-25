import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { colors, fontsizes } from '../../assets/styles';

export const PostLink = styled(Link)`
  color: ${colors.neutral.light4};
  font-size: ${fontsizes.large1};
  font-weight: bold;
  line-height: 1.2;
  text-decoration: none;
`;
