import React from 'react';
import { useField } from 'formik';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import Label from '../Label';
import ErrorMessage from '../ErrorMessage';

/**
 * `....................styles....................`
 */

const containerStyles = {
  position: 'relative',
};

const elementStyles = ({ theme, error, touched }) => ({
  borderColor: !(error && touched) ? theme.colors.n700 : theme.colors.danger,
  borderStyle: 'solid',
  borderRadius: theme.borderRadius.bravo,
  borderWidth: theme.borderWidth.alpha,
  color: theme.colors.bodyColor,
  fontSize: theme.typography.text.charlie.fontSize,
  margin: `${theme.spacings.alpha} 0`,
  padding: theme.spacings.charlie,
  width: '100%',
});

/**
 * `....................component....................`
 */

const TextInputContainer = styled.div(containerStyles);
const TextInputElement = styled.input(elementStyles);

const TextInput = ({ label, ...otherProps }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <TextInputElement>.
  const [field, meta] = useField(otherProps);
  const { error, touched } = meta;
  const { id, name } = otherProps;
  return (
    <TextInputContainer>
      <Label htmlFor={id || name}>
        {label}
        {/* error/touched props defined for TextInputElement to enable error styling */}
        <TextInputElement
          error={error}
          touched={touched}
          {...field}
          {...otherProps}
        />
      </Label>
      {touched && error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </TextInputContainer>
  );
};

/**
 * `....................propTypes....................`
 */

export default withTheme(TextInput);
