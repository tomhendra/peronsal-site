import styled from '@emotion/styled';
import Img from 'gatsby-image';

import { withMediaQueries } from '../../../utils/style-helpers';

export const StyledImg = styled(Img)(({ theme }) =>
  withMediaQueries(theme)({
    marginBottom: [
      theme.spacings.echo,
      theme.spacings.echo,
      theme.spacings.echo,
      theme.spacings.foxtrot,
      theme.spacings.foxtrot,
    ],
  }),
);
