import React from 'react';
import { useField } from 'formik';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import Label from '../Label';
import Tooltip from '../../../Tooltip';
import Counter from '../Counter';

import { colors } from '../../../../assets/styles/constants';

const { DANGER } = colors;

// ....................styles....................

const containerStyles = ({ theme }) => ({
  position: 'relative',
  zIndex: theme.zIndex.input,
});

const elementStyles = ({ theme, error, touched }) => ({
  '-webkit-appearance': 'none',
  '-moz-appearance': 'none',
  appearance: 'none',
  backgroundColor: 'inherit',
  borderColor: !(error && touched) ? theme.colors.n500 : theme.colors.danger,
  borderStyle: 'solid',
  borderRadius: theme.borderRadius.bravo,
  borderWidth: theme.borderWidth.alpha,
  color: theme.colors.bodyColor,
  fontFamily: theme.fontStack.default,
  fontSize: theme.typography.text.charlie.fontSize,
  marginTop: theme.spacings.alpha,
  padding: theme.spacings.charlie,
  resize: 'none',
  width: '100%',

  '&::placeholder': {
    color: theme.colors.n300,
  },
});

// ....................component....................

const TextareaContainer = styled.div(containerStyles);
const TextareaElement = styled.textarea(elementStyles);

function Textarea({ label, messageMaxLength, ...otherProps }) {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <TextareaElement>.
  const [field, meta] = useField(otherProps);
  const { value } = field;
  const { error, touched } = meta;
  const { id, name } = otherProps;
  return (
    <TextareaContainer>
      <Label htmlFor={id || name}>
        {label}
        <TextareaElement
          error={error}
          touched={touched}
          {...field}
          {...otherProps}
        />
      </Label>
      {/* props supplied for counter to calculate how many chars remaining & provider feedback */}
      <Counter
        messageMaxLength={messageMaxLength}
        charsEntered={value.length}
      />
      {touched && error ? <Tooltip variant={DANGER}>{error}</Tooltip> : null}
    </TextareaContainer>
  );
}

// ....................propTypes....................

export default withTheme(Textarea);
