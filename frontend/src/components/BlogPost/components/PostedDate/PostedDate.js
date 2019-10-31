import { format, formatDistance, differenceInDays } from 'date-fns';
import React from 'react';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

import Heading from '../../../Heading';

import { sizes } from '../../../../assets/styles/constants';

const { ALPHA } = sizes;

/**
 * `....................component....................`
 */

const PostedDate = ({ date }) => (
  <Heading sub as="h2" size={ALPHA}>
    Posted&nbsp;
    {differenceInDays(new Date(), new Date(date)) > 5
      ? format(new Date(date), 'do MMMM, yyyy')
      : formatDistance(new Date(date), new Date(), {
          addSuffix: true,
        })}
  </Heading>
);

/**
 * `....................propTypes....................`
 */

PostedDate.propTypes = {
  date: PropTypes.string,
};

PostedDate.defaultProps = {
  date: '',
};

export default withTheme(PostedDate);
