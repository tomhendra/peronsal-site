import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// ....................styles....................

const listStyles = ({ theme }) => ({
  display: 'flex',
  listStyle: 'none',
  marginTop: theme.spacings.foxtrot,

  '& li': {
    background: theme.colors.n700,
    borderRadius: theme.borderRadius.bravo,
    color: theme.colors.n400,
    fontSize: theme.typography.text.bravo.fontSize,
    padding: `${theme.spacings.bravo} ${theme.spacings.charlie}`,
    ':not(:first-of-type)': {
      marginLeft: theme.spacings.charlie,
    },
  },
});

// ....................component....................

const CategoryListElement = styled.ul(listStyles);

function CategoryList({ categories }) {
  return (
    <CategoryListElement>
      {categories.map(category => (
        <li key={category._id}>{category.title}</li>
      ))}
    </CategoryListElement>
  );
}

// ....................propTypes....................

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

CategoryList.defaultProps = {
  categories: [{}],
};

export default CategoryList;
