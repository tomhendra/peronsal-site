import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

// ....................styles....................

const elementStyles = ({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '2rem',
  height: '1.75rem',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: '0',

  '&:focus': {
    outline: 'none',
  },

  div: {
    width: '2rem',
    height: '0.2rem',
    background: theme.colors.n500,
    borderRadius: theme.borderRadius.delta,
    transition: 'all 0.3s linear',
    position: 'relative',
    transformOrigin: '1px',
  },
});

// ....................component....................

const BurgerElement = styled.button(elementStyles);

const Burger = () => (
  <BurgerElement>
    <div />
    <div />
    <div />
  </BurgerElement>
);

export default withTheme(Burger);
