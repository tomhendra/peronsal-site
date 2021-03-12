import { Variants, ButtonSizes, Children } from '../../../../types';

type Props = {
  variant: Variants;
  size: ButtonSizes;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  children: Children;
};

export const StyledButton = (props: Props): JSX.Element => {
  const { size, variant, type, disabled, onClick, children } = props;
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      aria-label="Button"
      disabled={disabled}
      onClick={onClick}
      css={theme => {
        const sizeVariants = {
          alpha: '4.8rem',
          bravo: '6rem',
          charlie: '7.2rem',
        };
        const colorVariants = {
          primary: theme.colors.n300,
          secondary: theme.colors.n300,
          tertiary: theme.colors.n500,
        };

        return {
          height: sizeVariants[size],
          border: 0,
          cursor: 'pointer',
          position: 'relative',
          textDecoration: 'none',

          '&::after': {
            borderColor: colorVariants[variant],
            borderRadius: theme.borderRadius.bravo,
            borderStyle: 'solid',
            borderWidth: theme.borderWidth.charlie,
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '100%',
            transformOrigin: 'top right',
            transition: `transform ${theme.transitions.default}`,
            zIndex: theme.zIndex.behind,
          },

          '&:hover, &:focus': {
            '&::after': {
              transition: `transform ${theme.transitions.springDefault}`,
              transform: 'translate(-7px, 7px)',
            },
          },

          '&:active': {
            '&::after': {
              transition: `transform ${theme.transitions.fast}`,
              transform: 'translate(0px, 0px)',
            },
          },

          '&:disabled': {
            opacity: 0.5,
            pointerStandardts: 'none',
            userSelectable: 'none',
            '&::after': {
              transition: `transform ${theme.transitions.default}`,
              transform: 'translate(0px, 0px)',
            },
          },
        };
      }}
    >
      {children}
    </button>
  );
};
