import React from 'react';
import { useField } from 'formik';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Text from '../../../Text';
import Tooltip from '../../../Tooltip';
import Counter from '../Counter';

import { variantPropType } from '../../../../utils/shared-prop-types';

import {
  colors,
  positions,
  sizes,
  variants,
} from '../../../../assets/styles/style-enums';

const { DANGER } = colors;
const { START } = positions;
const { CHARLIE } = sizes;
const { PRIMARY, SECONDARY, TERTIARY } = variants;

// ....................styles....................

const containerStyles = ({ theme }) => ({
  position: 'relative',
  zIndex: theme.zIndex.input,
});

const elementStyles = ({ theme, variant, error, touched }) => {
  const baseStyles = {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    borderStyle: 'solid',
    borderRadius: theme.borderRadius.bravo,
    borderWidth: theme.borderWidth.bravo,
    fontFamily: theme.fontStack.default,
    fontSize: theme.typography.text.delta.fontSize,
    marginTop: theme.spacings.alpha,
    padding: theme.spacings.charlie,
    resize: 'none',
    width: '100%',
  };

  const colorVariants = {
    [PRIMARY]: {
      backgroundColor: theme.colors.white,
      color: theme.colors.n200,
      borderColor: !(error && touched)
        ? theme.colors.n500
        : theme.colors.danger,

      '&::placeholder': {
        color: theme.colors.n300,
      },
    },
    [SECONDARY]: {
      backgroundColor: theme.colors.bodyBg,
      color: theme.colors.bodyColor,
      borderColor: !(error && touched)
        ? theme.colors.n500
        : theme.colors.danger,

      '&::placeholder': {
        color: theme.colors.n300,
      },
    },
    [TERTIARY]: {
      backgroundColor: theme.colors.n100,
      color: theme.colors.n900,
      borderColor: !(error && touched)
        ? theme.colors.n400
        : theme.colors.danger,

      '&::placeholder': {
        color: theme.colors.n700,
      },
    },
  };

  const colorConfig = colorVariants[variant];

  return {
    ...baseStyles,
    ...colorConfig,
  };
};

// ....................component....................

const Container = styled.div(containerStyles);
const Element = styled.textarea(elementStyles);

function Textarea({ label, messageMaxLength, variant, ...otherProps }) {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <Element>.
  const [field, meta] = useField(otherProps);
  const { value } = field;
  const { error, touched } = meta;
  const { id, name } = otherProps;
  return (
    <Container>
      <Text as="label" htmlFor={id || name} size={CHARLIE} variant={variant}>
        {label}
        <Element
          variant={variant}
          error={error}
          touched={touched}
          {...field}
          {...otherProps}
        />
      </Text>
      {/* props supplied for counter to calculate how many chars remaining & provider feedback */}
      <Counter
        variant={variant}
        messageMaxLength={messageMaxLength}
        charsEntered={value.length}
      />
      {touched && error ? (
        <Tooltip variant={DANGER} align={START}>
          {error}
        </Tooltip>
      ) : null}
    </Container>
  );
}

// ....................propTypes....................

Textarea.propTypes = {
  label: PropTypes.string,
  variant: variantPropType,
};

Textarea.defaultProps = {
  label: '⚠️No label provided',
  variant: SECONDARY,
};

export default Textarea;
