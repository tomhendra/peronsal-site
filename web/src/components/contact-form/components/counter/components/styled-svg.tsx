import { Children } from '../../../../../types';

type Props = {
  children: Children;
};

export const StyledSvg = ({ children }: Props) => (
  <svg
    css={theme => ({
      height: theme.iconSizes.foxtrot,
      width: theme.iconSizes.foxtrot,
      marginLeft: theme.spacings.bravo,

      '& circle': {
        fill: 'none',
        strokeWidth: 2,
      },
    })}
  >
    {children}
  </svg>
);
