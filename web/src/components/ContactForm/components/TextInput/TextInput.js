import React from 'react';
import { useField } from 'formik';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import Label from '../Label';
import Tooltip from '../../../Tooltip';

import { colors, positions } from '../../../../assets/styles/style-enums';

const { DANGER } = colors;
const { START } = positions;

// ....................styles....................

const containerStyles = ({ theme }) => ({
  position: 'relative',
  zIndex: theme.zIndex.input,
});

const elementStyles = ({ theme, error, touched }) => ({
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  backgroundColor: 'inherit',
  borderColor: !(error && touched) ? theme.colors.n500 : theme.colors.danger,
  borderStyle: 'solid',
  borderRadius: theme.borderRadius.bravo,
  borderWidth: theme.borderWidth.alpha,
  color: theme.colors.bodyColor,
  fontFamily: theme.fontStack.default,
  fontSize: theme.typography.text.delta.fontSize,
  marginTop: theme.spacings.alpha,
  padding: theme.spacings.charlie,
  width: '100%',

  '&::placeholder': {
    color: theme.colors.n300,
  },
});

// ....................component....................

const TextInputContainer = styled.div(containerStyles);
const TextInputElement = styled.input(elementStyles);

function TextInput({ label, ...otherProps }) {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <TextInputElement>.
  const [field, meta] = useField(otherProps);
  const { error, touched } = meta;
  const { id, name } = otherProps;
  return (
    <TextInputContainer>
      <Label htmlFor={id || name}>
        {label}
        <TextInputElement
          error={error}
          touched={touched}
          {...field}
          {...otherProps}
        />
      </Label>
      {touched && error ? (
        <Tooltip variant={DANGER} align={START}>
          {error}
        </Tooltip>
      ) : null}
    </TextInputContainer>
  );
}

// ....................propTypes....................

export default withTheme(TextInput);
