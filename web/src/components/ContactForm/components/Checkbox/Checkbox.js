import React from 'react';
import { useField } from 'formik';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { hideVisually } from 'polished';
import { childrenPropType } from '../../../../utils/shared-prop-types';

import Icon from '../../../Icon';
import Tooltip from '../../../Tooltip';
import Label from '../Label';

import {
  colors,
  icons,
  positions,
  sizes,
} from '../../../../assets/styles/constants';

const { DANGER, WHITE } = colors;
const { CHECK } = icons;
const { START } = positions;
const { ALPHA } = sizes;

// ....................styles....................

const containerStyles = ({ theme }) => ({
  padding: `${theme.spacings.bravo} 0`,
  position: 'relative',
  zIndex: theme.zIndex.input,
});

const elementStyles = ({ theme }) => ({
  ...hideVisually(),
  '&:focus + label::before': {
    borderWidth: theme.borderWidth.bravo,
    borderColor: theme.colors.p400,
  },
});

const labelStyles = ({ theme, checked, error, touched }) => ({
  alignItems: 'center',
  display: 'flex',
  position: 'relative',

  '&::before': {
    backgroundColor: !checked ? 'inherit' : theme.colors.p400,
    borderColor:
      !checked && !touched
        ? theme.colors.n400
        : checked
        ? theme.colors.p400
        : error && theme.colors.danger,
    borderStyle: 'solid',
    borderRadius: theme.borderRadius.bravo,
    borderWidth: theme.borderWidth.alpha,
    content: '""',
    cursor: 'pointer',
    display: 'inline-block',
    height: theme.iconSizes.charlie,
    marginRight: '0.6rem',
    transition: 'border 0.05s ease-in, background-color 0.05s ease-in',
    width: theme.iconSizes.charlie,
  },

  // target Icon container div
  '& div': {
    cursor: 'pointer',
    left: '0.2rem',
    opacity: !checked ? 0 : 1,
    position: 'absolute',
    top: '0.2rem',
    transform: !checked ? 'scale(0, 0)' : 'scale(1, 1)',
    transition: 'transform 0.05s ease-in, opacity 0.05s ease-in',
    // thicken the nested svg slightly from 2 default (hackish?)
    '& svg': {
      strokeWidth: 3,
    },
  },
});

// ....................component....................

const CheckboxContainer = styled.div(containerStyles);
const CheckboxLabel = styled(Label)(labelStyles);
const CheckboxElement = styled.input(elementStyles);

function Checkbox({ children, ...otherProps }) {
  // We need to tell useField what type of input this is
  // since React treats radios and checkboxes differently
  // than inputs/select/textarea.
  const [field, meta] = useField({ ...otherProps, type: 'checkbox' });
  const { error, touched } = meta;
  const { checked } = field;
  const { id, name } = otherProps;
  return (
    <CheckboxContainer>
      <CheckboxElement id={id || name} type="checkbox" {...field} />
      <CheckboxLabel
        htmlFor={id || name}
        checked={checked}
        error={error}
        touched={touched}
      >
        {children}
        <Icon type={CHECK} color={WHITE} size={ALPHA} aria-hidden="true" />
      </CheckboxLabel>
      {touched && error ? (
        <Tooltip variant={DANGER} align={START}>
          {error}
        </Tooltip>
      ) : null}
    </CheckboxContainer>
  );
}

// ...................propTypes....................

Checkbox.propTypes = {
  children: childrenPropType,
};

Checkbox.defaultProps = {
  children: null,
};

export default withTheme(Checkbox);
