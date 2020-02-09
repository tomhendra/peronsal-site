import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// ....................styles....................

const elementStyles = ({ open, theme }) => ({
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
});

// ....................component....................

const BurgerElement = styled.button(elementStyles);

function Burger({ open, setOpen }) {
  return (
    <BurgerElement
      open={open}
      onClick={() => setOpen(!open)}
      aria-label="Burger icon button to open navigation menu"
    >
      <span />
      <span />
      <span />
    </BurgerElement>
  );
}

// ....................propTypes....................

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

PropTypes.defaultProps = {
  open: null,
  setOpen: null,
};

export default Burger;
