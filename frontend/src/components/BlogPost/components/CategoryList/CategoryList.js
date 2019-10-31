import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

/**
 * `....................styles....................`
 */

const listStyles = ({ theme }) => ({
  display: 'flex',
  listStyle: 'none',

  '& li': {
    background: theme.colors.p800,
    borderRadius: theme.borderRadius.bravo,
    color: theme.colors.p300,
    fontSize: theme.typography.text.bravo.fontSize,
    padding: `${theme.spacings.bravo} ${theme.spacings.charlie}`,
    ':not(:first-of-type)': {
      marginLeft: theme.spacings.charlie,
    },
  },
});

/**
 * `....................component....................`
 */

const CategoryListElement = styled.ul(listStyles);

const CategoryList = ({ categories }) => (
  <CategoryListElement>
    {categories.map(category => (
      <li key={category._id}>{category.title}</li>
    ))}
  </CategoryListElement>
);

/**
 * `....................propTypes....................`
 */

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

CategoryList.defaultProps = {
  categories: [{}],
};

export default withTheme(CategoryList);
