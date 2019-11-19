import React from 'react';
import { useField } from 'formik';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { hideVisually } from 'polished';

import Icon from '../../../Icon';
import Label from '../Label';
import ErrorMessage from '../ErrorMessage';

import { colors, icons, sizes } from '../../../../assets/styles/constants';

const { WHITE } = colors;
const { CHECK } = icons;
const { ALPHA } = sizes;

/**
 * `....................styles....................`
 */

const containerStyles = {
  position: 'relative',
};

const elementStyles = ({ theme }) => ({
  ...hideVisually(),
  '&:focus + label::before': {
    borderWidth: theme.borderWidth.bravo,
    borderColor: theme.colors.p500,
  },
});

const labelStyles = ({ theme, checked, error, touched }) => ({
  alignItems: 'center',
  display: 'flex',
  position: 'relative',

  '&::before': {
    backgroundColor: !checked ? theme.colors.bodyBg : theme.colors.p500,
    borderColor:
      !checked && !error && !touched
        ? theme.colors.n700
        : checked
        ? theme.colors.p500
        : error && touched && theme.colors.danger,
    borderStyle: 'solid',
    borderRadius: theme.borderRadius.bravo,
    borderWidth: theme.borderWidth.alpha,
    content: '""',
    cursor: 'pointer',
    display: 'inline-block',
    height: theme.iconSizes.charlie,
    marginRight: theme.spacings.bravo,
    transition: 'border 0.05s ease-in, background-color 0.05s ease-in',
    width: theme.iconSizes.charlie,
  },

  // target Icon container div
  '& div': {
    cursor: 'pointer',
    left: '0.2rem',
    opacity: !checked ? 0 : 1,
    position: 'absolute',
    top: '0.2rem',
    transform: !checked ? 'scale(0, 0)' : 'scale(1, 1)',
    transition: 'transform 0.05s ease-in, opacity 0.05s ease-in',
    // thicken the nested svg slightly from 2 default (hackish?)
    '& svg': {
      strokeWidth: 3,
    },
  },
});

/**
 * `....................component....................`
 */

const CheckboxContainer = styled.div(containerStyles);
const CheckboxLabel = styled(Label)(labelStyles);
const CheckboxElement = styled.input(elementStyles);

const Checkbox = ({ children, ...otherProps }) => {
  // We need to tell useField what type of input this is
  // since React treats radios and checkboxes differently
  // than inputs/select/textarea.
  const [field, meta] = useField({ ...otherProps, type: 'checkbox' });
  const { error, touched } = meta;
  const { checked } = field;
  const { id, name } = otherProps;
  return (
    <CheckboxContainer>
      <CheckboxElement id={id || name} type="checkbox" {...field} />
      <CheckboxLabel
        htmlFor={id || name}
        checked={checked}
        error={error}
        touched={touched}
      >
        {children}
        <Icon type={CHECK} color={WHITE} size={ALPHA} aria-hidden="true" />
      </CheckboxLabel>
      {touched && error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </CheckboxContainer>
  );
};

export default withTheme(Checkbox);
