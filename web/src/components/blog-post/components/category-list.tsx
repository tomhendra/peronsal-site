/** @jsx jsx */
import { jsx } from '@emotion/react';

import { Category } from '../../../types/types';

type Props = {
  categories: Category[];
};

export const CategoryList = ({ categories }: Props): JSX.Element => (
  <ul
    css={theme => ({
      display: 'flex',
      listStyle: 'none',
      marginTop: theme.spacings.foxtrot,

      '& li': {
        background: theme.colors.n700,
        borderRadius: theme.borderRadius.bravo,
        color: theme.colors.n400,
        fontSize: theme.text.bravo.fontSize,
        padding: `${theme.spacings.bravo} ${theme.spacings.charlie}`,
        ':not(:first-of-type)': {
          marginLeft: theme.spacings.charlie,
        },
      },
    })}
  >
    {categories.map(category => (
      <li key={category._id}>{category.title}</li>
    ))}
  </ul>
);
