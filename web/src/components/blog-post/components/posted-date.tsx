import { format, formatDistance, differenceInDays } from 'date-fns';
import React from 'react';

import { Heading } from '../..';

type Props = {
  date: Date;
};

export const PostedDate = ({ date }: Props) => (
  <Heading noSpacingBottom as="h2" variant="primary">
    Posted&nbsp;
    {differenceInDays(new Date(), new Date(date)) > 5
      ? format(new Date(date), 'do MMMM, yyyy')
      : formatDistance(new Date(date), new Date(), {
          addSuffix: true,
        })}
  </Heading>
);
