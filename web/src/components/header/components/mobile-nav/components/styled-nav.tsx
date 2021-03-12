import { Children } from '../../../../../types';

interface Props {
  open: boolean;
  children: Children;
}

export const StyledNav = ({ open, children }: Props) => (
  <nav
    css={theme => ({
      display: 'flex',
      flexDirection: 'column',
      background: theme.colors.bodyBg,
      height: '100vh',
      paddingLeft: theme.spacings.india,
      paddingTop: theme.spacings.kilo,
      position: 'fixed',
      left: 0,
      top: 0,
      transform: !open ? 'translateX(100%)' : 'translateX(0)',
      transition: `transform ${theme.transitions.slow}`,
      width: '100vw',
      zIndex: theme.zIndex.drawer,

      '& > :not(:last-of-type)': {
        marginBottom: theme.spacings.foxtrot,
      },
    })}
  >
    {children}
  </nav>
);
