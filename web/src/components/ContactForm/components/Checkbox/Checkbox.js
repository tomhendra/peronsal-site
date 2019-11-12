import React from 'react';
import { useField } from 'formik';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import Label from '../Label';
import ErrorMessage from '../ErrorMessage';

/**
 * `....................styles....................`
 */

const checkboxStyles = ({ theme, error, touched }) => ({
  borderColor: !(error && touched) ? theme.colors.n700 : theme.colors.danger,
  padding: theme.spacings.charlie,
});

/**
 * `....................component....................`
 */

const CheckboxElement = styled.input(checkboxStyles);

const Checkbox = ({ children, ...otherProps }) => {
  // We need to tell useField what type of input this is
  // since React treats radios and checkboxes differently
  // than inputs/select/textarea.
  const [field, meta] = useField({ ...otherProps, type: 'checkbox' });
  const { error, touched } = meta;
  return (
    <>
      <Label>
        {/* error/touched props defined to enable error styling */}
        <CheckboxElement
          type="checkbox"
          error={error}
          touched={touched}
          {...field}
          {...otherProps}
        />
        {children}
      </Label>
      {touched && error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </>
  );
};

export default withTheme(Checkbox);
