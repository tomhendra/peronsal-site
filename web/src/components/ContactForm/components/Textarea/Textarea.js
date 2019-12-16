import React from 'react';
import { useField } from 'formik';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';

import Label from '../Label';
import Tooltip from '../../../Tooltip';

import { colors } from '../../../../assets/styles/constants';

const { DANGER } = colors;
// const { TOP } = positions;

/**
 * `....................styles....................`
 */

const containerStyles = ({ theme }) => ({
  position: 'relative',
  zIndex: theme.zIndex.input,
});

const elementStyles = ({ theme, error, touched }) => ({
  borderColor: !(error && touched) ? theme.colors.n700 : theme.colors.danger,
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
});

/**
 * `....................component....................`
 */

const TextareaContainer = styled.div(containerStyles);
const TextareaElement = styled.textarea(elementStyles);

const Textarea = ({ label, ...otherProps }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <TextareaElement>.
  const [field, meta] = useField(otherProps);
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
      {touched && error ? <Tooltip variant={DANGER}>{error}</Tooltip> : null}
    </TextareaContainer>
  );
};

/**
 * `....................propTypes....................`
 */

export default withTheme(Textarea);
