import React from 'react';
import { useField } from 'formik';

import { Icon, Tooltip } from '../../..';
import { StyledContainer, StyledCheckbox, StyledLabel } from './components';

import { Variants, Children } from '../../../../utils/types';

type Props = {
  variant: Variants;
  name: string;
  children: Children;
};

export const Checkbox = (props: Props) => {
  const { variant = 'secondary', children, ...rest } = props;
  // We need to tell useField what type of input this is
  // since React treats radios and checkboxes differently
  // than inputs/select/textarea.
  const [field, meta] = useField({ ...rest, type: 'checkbox' });
  const { error, touched } = meta;
  const { name, checked } = field;
  return (
    <StyledContainer>
      <StyledCheckbox name={name} {...field} {...rest} />
      <StyledLabel
        variant={variant}
        name={name}
        checked={checked}
        error={error}
        touched={touched}
      >
        {children}
        <Icon type="Check" color="white" size="alpha" aria-hidden="true" />
      </StyledLabel>
      {touched && error ? (
        <Tooltip variant="danger" align="start" position="top">
          {error}
        </Tooltip>
      ) : null}
    </StyledContainer>
  );
};
