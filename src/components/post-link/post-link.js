import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { color, fontsize } from '../../assets/styles';

export const PostLink = styled(Link)`
  color: ${color.neutral.light4};
  font-size: ${fontsize.large1};
  font-weight: bold;
  line-height: 1.2;
  text-decoration: none;
`;
