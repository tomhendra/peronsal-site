/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Children } from '../../../../../utils/types';

interface Props {
  open: boolean;
  onClick: () => void;
  children: Children;
}

export const StyledBurger = (props: Props): JSX.Element => {
  const { open, onClick, children } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Burger icon button to open navigation menu"
      css={(theme) => ({
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '2.5rem',
        width: '2.5rem',
        padding: '0',
        zIndex: theme.zIndex.burger,

        '&:focus': {
          outline: 'none',
        },

        '& > span': {
          width: '2.5rem',
          height: '0.25rem',
          background: theme.colors.n400,
          borderRadius: theme.borderRadius.delta,
          transition: `all ${theme.transitions.slow}`,
          position: 'relative',
          transformOrigin: '1px',

          '&:first-of-type': {
            transform: open ? 'rotate(45deg)' : 'rotate(0)',
          },

          '&:nth-of-type(2)': {
            opacity: open ? 0 : 1,
          },

          '&:nth-of-type(3)': {
            transform: open ? 'rotate(-45deg)' : 'rotate(0)',
          },
        },
      })}
    >
      {children}
    </button>
  );
};
