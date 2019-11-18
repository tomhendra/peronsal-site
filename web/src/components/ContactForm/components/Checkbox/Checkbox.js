import React from 'react';
import { useField } from 'formik';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { hideVisually } from 'polished';

import Icon from '../../../Icon';
import Label from '../Label';
import ErrorMessage from '../ErrorMessage';

import { colors, icons, sizes } from '../../../../assets/styles/constants';

const { PRIMARY } = colors;
const { CHECK } = icons;
const { DELTA } = sizes;

/**
 * `....................styles....................`
 */

const CheckboxContainer = styled.div({
  position: 'relative',
});

const CheckboxElement = styled.input(({ theme, checked }) => ({
  ...hideVisually(),

  '&:focus + label::before': {
    borderWidth: theme.borderWidth.bravo,
    borderColor: theme.colors.p500,
  },

  '+ label > div > svg': {
    transform: checked && 'translateY(-50%) scale(1, 1)',
    opacity: checked && 1,
  },

  '+ label::before': {
    borderColor: checked && theme.colors.p500,
  },
}));

const CheckboxLabel = styled(Label)(({ theme }) => ({
  display: 'inline-block',
  paddingLeft: theme.spacings.echo,

  '&::before': {
    backgroundColor: theme.colors.bodyBg,
    border: `${theme.borderWidth.alpha} solid ${theme.colors.n500}`,
    borderRadius: theme.borderRadius.bravo,
    content: '""',
    cursor: 'pointer',
    display: 'block',
    height: theme.iconSizes.echo,
    width: theme.iconSizes.echo,
    position: 'absolute',
    top: theme.spacings.charlie,
    left: 0,
    transform: 'translateY(-50%)',
    transition: 'border 0.05s ease-in, background-color 0.05s ease-in',
  },

  'div > svg': {
    display: 'block',
    height: theme.iconSizes.bravo,
    width: theme.iconSizes.bravo,
    left: '3px',
    lineHeight: 0,
    opacity: 0,
    position: 'absolute',
    top: theme.spacings.charlie,
    transform: 'translateY(-50%) scale(0, 0)',
    transition: 'transform 0.05s ease -in, opacity 0.05s ease -in',
  },
}));

/**
 * `....................component....................`
 */

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
      <CheckboxElement
        id={id || name}
        type="checkbox"
        checked={checked}
        error={error}
        touched={touched}
        {...field}
        {...otherProps}
      />
      <CheckboxLabel htmlFor={id || name}>
        {children}
        <Icon type={CHECK} color={PRIMARY} size={DELTA} aria-hidden="true" />
      </CheckboxLabel>
      {touched && error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </CheckboxContainer>
  );
};

export default withTheme(Checkbox);
