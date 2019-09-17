import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { color } from '../../assets/styles';

export const ReadLink = styled(Link)`
  border-bottom: 2px solid ${color.primary.light3};
  color: ${color.primary.light3};
  display: inline-block;
  text-decoration: none;
`;
