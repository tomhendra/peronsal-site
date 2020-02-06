import { format, formatDistance, differenceInDays } from 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../../Heading';

import { sizes } from '../../../../assets/styles/style-enums';

const { ALPHA } = sizes;

// ....................component....................

function PostedDate({ date }) {
  return (
    <Heading sub as="h2" size={ALPHA} noMargin>
      Posted&nbsp;
      {differenceInDays(new Date(), new Date(date)) > 5
        ? format(new Date(date), 'do MMMM, yyyy')
        : formatDistance(new Date(date), new Date(), {
            addSuffix: true,
          })}
    </Heading>
  );
}

// ....................propTypes....................

PostedDate.propTypes = {
  date: PropTypes.string,
};

PostedDate.defaultProps = {
  date: '',
};

export default PostedDate;
