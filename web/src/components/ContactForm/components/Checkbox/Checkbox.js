import React from 'react';
import { useField } from 'formik';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { hideVisually } from 'polished';

import Icon from '../../../Icon';
import Label from '../Label';
import ErrorMessage from '../ErrorMessage';

import { colors, icons, sizes } from '../../../../assets/styles/constants';

const { NEUTRAL } = colors;
const { CHECK } = icons;
const { DELTA } = sizes;

/**
 * `....................styles....................`
 */

const CheckboxContainer = styled.div({
  position: 'relative',
});

const CheckboxGroup = styled.div({
  display: 'flex',
  alignItems: 'center',
});

// const CheckboxElement = styled.div(({ theme, checked, error, touched }) => ({
//   backgroundColor: checked ? theme.colors.p500 : theme.colors.n800,
//   borderColor: !(error && touched) ? theme.colors.n700 : theme.colors.danger,
//   borderRadius: theme.borderRadius.bravo,
//   borderWidth: theme.borderWidth.alpha,
//   cursor: 'pointer',
//   height: theme.iconSizes.charlie,
//   width: theme.iconSizes.charlie,
//   marginRight: theme.spacings.bravo,
//   transition: theme.transitions.slow,
// }));

const CheckboxElement = styled.input(({ theme, checked }) => ({
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  ...hideVisually(),

  '&:focus + ::before': {
    content: ' ',
    borderWidth: '2px',
    borderColor: theme.colors.p500,
  },

  'label > svg': {
    transform: checked && 'translateY(-50%) scale(1, 1)',
    opacity: checked && '1',
  },

  'label::before': {
    borderColor: checked && theme.colors.p500,
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
      <CheckboxGroup>
        <Label htmlFor={id || name}>
          <CheckboxElement
            type="checkbox"
            checked={checked}
            error={error}
            touched={touched}
            {...field}
            {...otherProps}
          />
          {children}
          <Icon
            type={CHECK}
            color={NEUTRAL}
            size={DELTA}
            alt="GitHub logo"
            aria-hidden="true"
          />
        </Label>
      </CheckboxGroup>
      {touched && error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </CheckboxContainer>
  );
};

export default withTheme(Checkbox);
