import React from 'react';
import { useField } from 'formik';

import { Text, Tooltip } from '../../..';
import { StyledContainer, StyledInput } from './components';

import { Variants } from '../../../../utils/types';

type Props = {
  label: string;
  variant: Variants;
  name: string;
  placeholder: string;
  type: 'text' | 'email';
};

export const TextInput = (props: Props): JSX.Element => {
  const { label, variant = 'secondary', ...rest } = props;
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <StyledInput>.
  const [field, meta] = useField(rest);
  const { error, touched } = meta;
  const { name } = field;

  return (
    <StyledContainer>
      <Text as="label" htmlFor={name} variant={variant}>
        {label}
        <StyledInput
          variant={variant}
          error={error}
          touched={touched}
          {...field}
          {...rest}
        />
      </Text>
      {touched && error ? (
        <Tooltip variant="danger" align="start" position="top">
          {error}
        </Tooltip>
      ) : null}
    </StyledContainer>
  );
};
