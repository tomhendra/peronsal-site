import React from 'react';
import { useField } from 'formik';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import Label from '../Label';
import ErrorMessage from '../ErrorMessage';

/**
 * `....................styles....................`
 */

const textInputStyles = ({ theme, error, touched }) => ({
  borderColor: !(error && touched) ? theme.colors.n700 : theme.colors.danger,
  borderStyle: 'solid',
  borderRadius: theme.borderRadius.bravo,
  borderWidth: theme.borderWidth.alpha,
  padding: theme.spacings.charlie,
});

/**
 * `....................component....................`
 */

const TextInputElement = styled.input(textInputStyles);

const TextInput = ({ label, ...otherProps }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <TextInputElement>.
  const [field, meta] = useField(otherProps);
  const { error, touched } = meta;
  const { id, name } = otherProps;
  return (
    <>
      <Label htmlFor={id || name}>{label}</Label>
      {/* error/touched props defined for TextInputElement to enable error styling */}
      <TextInputElement
        error={error}
        touched={touched}
        {...field}
        {...otherProps}
      />
      {touched && error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </>
  );
};

/**
 * `....................propTypes....................`
 */

export default withTheme(TextInput);
