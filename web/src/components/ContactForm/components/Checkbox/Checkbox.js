import React from 'react';
import { useField } from 'formik';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import Label from '../Label';
import ErrorMessage from '../ErrorMessage';

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

const CheckboxElement = styled.div(({ theme, checked, error, touched }) => ({
  backgroundColor: checked ? theme.colors.p500 : theme.colors.n800,
  borderColor: !(error && touched) ? theme.colors.n700 : theme.colors.danger,
  borderRadius: theme.borderRadius.bravo,
  borderWidth: theme.borderWidth.alpha,
  cursor: 'pointer',
  height: theme.iconSizes.charlie,
  width: theme.iconSizes.charlie,
  marginRight: theme.spacings.bravo,
  transition: theme.transitions.slow,
}));

const HiddenCheckboxElement = styled.input({
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: '0',
  clip: 'rect(0 0 0 0)',
  clippath: 'inset(50%)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',

  '&:focused': {
    [CheckboxElement]: {
      boxShadow: '0 0 0 3px pink',
    },
  },
});

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
      <Label htmlFor={id || name}>
        <CheckboxGroup>
          <HiddenCheckboxElement
            type="checkbox"
            checked={checked}
            error={error}
            touched={touched}
            {...field}
            {...otherProps}
          />
          <CheckboxElement checked={checked} error={error} touched={touched} />
          {children}
        </CheckboxGroup>
      </Label>
      {touched && error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </CheckboxContainer>
  );
};

export default withTheme(Checkbox);
