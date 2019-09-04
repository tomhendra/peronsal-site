import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { color } from '../../assets/styles';

export const PostLink = styled(Link)`
  display: inline-block;
  color: ${color.primary.light3};
  text-decoration: none;
`;
