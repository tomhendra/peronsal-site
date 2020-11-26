import Img from 'gatsby-image';
import styled from '@emotion/styled';

export const StyledImg = styled(Img)(({ theme }) => ({
  opacity: 0.85,
  transition: `opacity ${theme.transitions.slow}`,

  '&:hover': {
    opacity: 1,
  },
}));
