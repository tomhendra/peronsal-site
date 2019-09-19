import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { color, fontsize } from '../../assets/styles';

export const ReadLink = styled(Link)`
  color: ${color.primary.light3};
  font-size: ${fontsize.small};
  text-decoration: none;
  text-transform: uppercase;
`;
